import { defineConfig, devices } from '@playwright/test';

const PORT = process.env.PORT || 4321;

const baseURL = `http://localhost:${PORT}`;

// See https://playwright.dev/docs/test-configuration.
export default defineConfig({
  testDir: './tests',
  testMatch: '/*.e2e.ts',
  // Fail the build on CI if you accidentally left test.only in the source code.
  forbidOnly: !!process.env.CI,
  // Retry on CI only.
  retries: process.env.CI ? 2 : 0,
  // Web server
  webServer: {
    command: 'npm run build && npx astro preview',
    url: baseURL,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: 'http://localhost:4321/labs/',
  },
});
