// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import pagefind from 'astro-pagefind';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.repl.net',
  integrations: [mdx(), pagefind()],
  vite: {
    // 빈 옵션 객체를 전달해 봅니다.
    plugins: [tailwindcss()],
  },
});
