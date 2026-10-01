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
