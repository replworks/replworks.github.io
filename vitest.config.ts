// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',

    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.astro/**',
      '**/*.e2e.ts',
      '**/tests/**',
    ],
  },
});
