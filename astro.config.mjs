// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import pagefind from 'astro-pagefind';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import astroBrokenLinksChecker from 'astro-broken-links-checker';

export default defineConfig({
  site: 'https://www.repl.net',
  integrations: [
    mdx(),
    pagefind(),
    sitemap(),
    astroBrokenLinksChecker({
      throwError: true,
    }),
  ],
  vite: {
    // 빈 옵션 객체를 전달해 봅니다.
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      // 테마 설정 (예: 'github-dark', 'dracula', 'vitesse-dark')
      theme: 'vitesse-dark',
    },
  },
});
