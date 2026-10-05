import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { documentMenu as documentMenuConfig } from '../src/data/documents';
import { promptDefinitions } from '../src/data/prompts';

test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('html')).toHaveAttribute('lang', 'ko');
  await expect(page.locator('a[href="#main-content"]')).toBeVisible();
});

test('links to document details and provides raw document downloads', async ({
  page,
}) => {
  await page.goto('/documents');

  const documentLink = page
    .locator('aside nav:visible a[data-sidebar-link][href^="/documents/"]')
    .first();
  await expect(documentLink).toBeVisible();
  await expect(documentLink).toHaveAttribute('href', /^\/documents\/[a-z-]+$/);

  const response = await page.request.get('/documents/agents.md');
  expect(response.status()).toBe(200);
  expect(response.headers()['content-type']).toContain('text/markdown');
});

test('renders document sidebar from its configured order', async ({ page }) => {
  await page.goto('/documents/agents');
  const documentMenu = page
    .locator('aside nav[aria-label="문서 목록"]')
    .first()
    .locator('a[data-sidebar-link]');
  await expect(documentMenu.first()).toHaveAttribute('href', '/documents');
  await expect(documentMenu).toHaveCount(8);
  const documentMenuHrefs = await documentMenu.evaluateAll((links) =>
    links.map((link) => link.getAttribute('href')),
  );
  expect(documentMenuHrefs.toSorted()).toEqual(
    [
      '/documents',
      ...documentMenuConfig.map((document) => `/documents/${document.slug}`),
    ].toSorted(),
  );
});

test('renders document explanations without code controls', async ({
  page,
}) => {
  const documentSlugs = [
    'architecture',
    'ideas',
    'pitching-script',
    'product-spec',
    'tasks',
    'tech-stack',
  ];

  for (const slug of documentSlugs) {
    await page.goto(`/documents/${slug}`);
    await expect(page.locator('.expressive-code')).toHaveCount(0);
  }

  await page.goto('/documents/agents');
  const agentsCode = page.locator('article .expressive-code');
  await expect(agentsCode).toHaveCount(1);
  await expect(agentsCode.locator('.title')).toHaveCount(1);
  await expect(agentsCode.locator('.copy button')).toBeVisible();
  const expectedTemplate = readFileSync(
    resolve(import.meta.dirname, '../templates/documents/AGENTS.md'),
    'utf8',
  )
    .replace(/\r\n/g, '\n')
    .trimEnd();
  const renderedLines = await agentsCode
    .locator('pre code .ec-line')
    .allTextContents();
  expect(renderedLines.map((line) => line.replace(/\n$/, '')).join('\n')).toBe(
    expectedTemplate,
  );
});

test('applies the light theme to detail pages', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('theme', 'light'));
  await page.goto('/prompts/idea-generation');

  await expect(page.locator('html')).toHaveClass(/light/);
  await expect(page.locator('html')).not.toHaveClass(/dark/);
  await expect(page.locator('h1').first()).toHaveCSS(
    'color',
    'oklch(0.208 0.042 265.755)',
  );
  await expect(page.locator('footer')).toHaveCSS(
    'background-color',
    'oklch(0.984 0.003 247.858)',
  );
});

test('renders expressive code blocks with a localized copy button', async ({
  page,
}) => {
  await page.addInitScript(() => localStorage.setItem('theme', 'light'));
  await page.goto('/prompts/idea-generation');

  const copyButton = page.locator('.expressive-code .copy button').first();
  await expect(copyButton).toBeVisible();
  await expect(copyButton).toHaveAttribute('title');
  await expect(page.locator('.code-copy-btn')).toHaveCount(0);
  expect(
    Number(
      await copyButton.evaluate((element) => getComputedStyle(element).opacity),
    ),
  ).toBeGreaterThan(0);

  await copyButton.click();
  await expect(
    page.locator('.expressive-code .feedback').first(),
  ).toBeVisible();

  const lightBackground = await page
    .locator('.expressive-code pre')
    .first()
    .evaluate((element) => getComputedStyle(element).backgroundColor);

  await page.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
  });
  await expect(page.locator('html')).toHaveClass(/dark/);

  const darkBackground = await page
    .locator('.expressive-code pre')
    .first()
    .evaluate((element) => getComputedStyle(element).backgroundColor);

  expect(darkBackground).not.toBe(lightBackground);
});

test('applies the light theme to the homepage', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('theme', 'light'));
  await page.goto('/');

  await expect(page.locator('html')).toHaveClass(/light/);
  await expect(page.locator('html')).not.toHaveClass(/dark/);
  await expect(page.locator('h1').first()).toHaveCSS(
    'color',
    'oklch(0.208 0.042 265.755)',
  );
  await expect(page.locator('main')).toHaveCSS(
    'color',
    'oklch(0.208 0.042 265.755)',
  );
  await expect(page.locator('svg text').first()).toHaveCSS(
    'fill',
    'rgb(30, 27, 75)',
  );
});

test('loads the search interface', async ({ page }) => {
  await page.goto('/search');

  const searchInput = page.locator('pagefind-searchbox').locator('input');
  await expect(searchInput).toBeVisible();
  await searchInput.fill('REPL');
  await expect(searchInput).toHaveValue('REPL');
});

test('shows all Showcase projects as compatible cards', async ({ page }) => {
  await page.goto('/showcase');

  await expect(page.locator('article a[href^="/showcase/"]')).toHaveCount(8);
});

test('keeps primary pages within a mobile viewport', async ({ page }) => {
  await page.setViewportSize({ width: 393, height: 852 });

  for (const path of [
    '/',
    '/workflow',
    '/prompts',
    '/documents',
    '/tools',
    '/showcase',
    '/faq',
    '/search',
  ]) {
    await page.goto(path);
    const width = await page.evaluate(
      () => document.documentElement.scrollWidth,
    );
    const viewportWidth = await page.evaluate(
      () => document.documentElement.clientWidth,
    );
    expect(width, `${path} overflows horizontally`).toBeLessThanOrEqual(
      viewportWidth + 1,
    );
  }

  await page.goto('/');
  await page.locator('summary').click();
  await expect(page.locator('details nav a[href="/workflow"]')).toBeVisible();

  await page.mouse.click(20, 700);
  await expect(page.locator('details nav')).toBeHidden();
});

test('embeds the exact prompt text rendered on every prompt detail page and has detail copy button', async ({
  page,
}) => {
  const slugs = promptDefinitions.map((prompt) => prompt.slug);
  await page.goto('/prompts');
  await expect(page.locator('button[data-prompt-copy]').first()).toBeVisible();
  const embeddedPrompts = new Map<string, string>();

  for (const slug of slugs) {
    const embedded = await page
      .locator(`script[data-prompt-source="${slug}"]`)
      .textContent();
    expect(embedded).not.toBeNull();
    embeddedPrompts.set(slug, JSON.parse(embedded as string));
  }

  for (const slug of slugs) {
    await page.goto(`/prompts/${slug}`);
    await expect(
      page.locator('article .expressive-code .copy button').first(),
    ).toBeVisible();
    await expect(page.locator('[data-output-artifact]')).toBeVisible();
    await expect(
      page.locator('article .expressive-code .title').last(),
    ).toBeVisible();

    const expectedText = embeddedPrompts.get(slug);
    expect(expectedText).toBeDefined();

    const renderedLines = await page
      .locator('article .expressive-code')
      .last()
      .locator('pre code .ec-line')
      .allTextContents();

    expect(
      renderedLines.map((line) => line.replace(/\n$/, '')).join('\n'),
    ).toBe(expectedText);
  }
});

test('copies prompt text to the clipboard', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('/prompts');

  const button = page.locator('button[data-prompt-copy]').first();
  const source = page.locator('script[data-prompt-source]').first();
  const promptText = JSON.parse((await source.textContent()) ?? 'null');

  await button.click();

  await expect(button.locator('[data-prompt-copy-label]')).toHaveText('복사됨');
  await expect
    .poll(() => page.evaluate(() => navigator.clipboard.readText()))
    .toBe(promptText);
});

test('renders sidebar navigation on detail pages', async ({ page }) => {
  await page.goto('/prompts/idea-generation');
  const promptSidebar = page.locator('aside nav:visible').first();
  await expect(promptSidebar).toBeVisible();
  await expect(
    promptSidebar.locator('a[href="/prompts/pitch-creation"]'),
  ).toBeVisible();

  await page.goto('/showcase/repl-works-website');
  const showcaseSidebar = page.locator('aside nav:visible').first();
  await expect(showcaseSidebar).toBeVisible();
  await expect(
    showcaseSidebar.locator('a[href="/showcase/claytube"]'),
  ).toBeVisible();
});
