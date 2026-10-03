import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('REPL Works — 문서 주도 AI 개발 방법론');
  await expect(page.locator('html')).toHaveAttribute('lang', 'ko');
  await expect(page.locator('a[href="#main-content"]')).toHaveText(
    '본문으로 건너뛰기',
  );
});

test('applies the light theme to detail pages', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('theme', 'light'));
  await page.goto('/prompts/idea-refinement');

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

test('searches every public content collection', async ({ page }) => {
  await page.goto('/search');

  const searchInput = page.locator('pagefind-searchbox').locator('input');
  const resultLink = page
    .locator('pagefind-results')
    .locator('.pf-result-link')
    .first();

  for (const query of [
    'prompt library',
    'product specification',
    'repl-cli',
    'wifi note',
    'frequently asked questions',
  ]) {
    await searchInput.fill(query);
    await expect(resultLink).toBeVisible();
  }
});

test('shows all Showcase projects as compatible cards', async ({ page }) => {
  await page.goto('/showcase');

  await expect(
    page.getByText('REPL Works 방식으로 개발하고 운영 중인 프로젝트들입니다.'),
  ).toBeVisible();
  await expect(page.getByText('DOCUMENT SPECIFICATION')).toHaveCount(0);
  await expect(page.locator('article a[href^="/showcase/"]')).toHaveCount(7);
  await expect(page.getByText('배운 점')).toHaveCount(7);
  await expect(page.getByText('REPL Works Compatible')).toHaveCount(7);
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
  await expect(
    page.locator('details nav').getByRole('link', { name: '워크플로우' }),
  ).toBeVisible();

  await page.mouse.click(20, 700);
  await expect(page.locator('details nav')).toBeHidden();
});

test('embeds the exact prompt text rendered on every prompt detail page and has detail copy button', async ({
  page,
}) => {
  const slugs = [
    'idea-refinement',
    'pitch-creation',
    'product-specification',
    'tech-stack',
    'architecture-design',
    'task-generation',
    'execution-validation',
    'architecture-review',
    'task-review',
  ];

  await page.goto('/prompts');
  const cardOrder = await page
    .locator('button[data-prompt-copy]')
    .evaluateAll((buttons) =>
      buttons.map((button) => button.getAttribute('aria-label')),
    );
  expect(cardOrder).toEqual([
    '1번 Idea Refinement 프롬프트 복사',
    '2번 Pitch Creation 프롬프트 복사',
    '3번 Product Specification 프롬프트 복사',
    '4번 Tech Stack 프롬프트 복사',
    '5번 Architecture Design 프롬프트 복사',
    '6번 Task Generation 프롬프트 복사',
    '7번 Execution Validation 프롬프트 복사',
    '8번 Architecture Review 프롬프트 복사',
    '9번 Task Review 프롬프트 복사',
  ]);
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
      page.locator('article pre .code-copy-btn').first(),
    ).toBeVisible();

    const expectedText = embeddedPrompts.get(slug);
    expect(expectedText).toBeDefined();

    const promptCodeElement = page
      .locator('article pre code')
      .filter({ hasText: expectedText?.slice(0, 20) ?? '' })
      .first();

    const renderedPrompt = await promptCodeElement.textContent();

    expect(renderedPrompt).not.toBeNull();
    expect(renderedPrompt).toBe(expectedText);
  }
});

test('renders sidebar navigation on detail pages', async ({ page }) => {
  await page.goto('/prompts/idea-refinement');
  await expect(page.locator('aside nav')).toBeVisible();
  await expect(
    page.locator('aside nav').getByRole('link', { name: /피치 작성/ }),
  ).toBeVisible();

  await page.goto('/showcase/repl-works-website');
  await expect(page.locator('aside nav')).toBeVisible();
  await expect(
    page.locator('aside nav').getByRole('link', { name: /클래이튜브/ }),
  ).toBeVisible();
});
