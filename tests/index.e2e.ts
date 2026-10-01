import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('REPL Works');
});

test('searches every public content collection', async ({ page }) => {
  await page.goto('/search');

  const searchInput = page.locator('pagefind-searchbox').locator('input');
  const resultLink = page.locator('pagefind-results').locator('.pf-result-link').first();

  for (const query of [
    'continuous improvement',
    'product specification',
    'repl-cli',
    'wifi note',
    'frequently asked questions',
  ]) {
    await searchInput.fill(query);
    await expect(resultLink).toBeVisible();
  }
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
      () => document.documentElement.scrollWidth
    );
    const viewportWidth = await page.evaluate(
      () => document.documentElement.clientWidth
    );
    expect(width, `${path} overflows horizontally`).toBeLessThanOrEqual(
      viewportWidth + 1
    );
  }

  await page.goto('/');
  await page.locator('summary').click();
  await expect(page.locator('details nav').getByRole('link', { name: 'Workflow' })).toBeVisible();
});
