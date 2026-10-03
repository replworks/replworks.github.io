// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import astroExpressiveCode from 'astro-expressive-code';
import { pluginFramesTexts } from '@expressive-code/plugin-frames';
import pagefind from 'astro-pagefind';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import astroBrokenLinksChecker from 'astro-broken-links-checker';

pluginFramesTexts.overrideTexts(undefined, {
  copyButtonTooltip: '복사',
  copyButtonCopied: '복사됨',
});

export default defineConfig({
  site: 'https://www.repl.net',
  integrations: [
    astroExpressiveCode(),
    mdx(),
    pagefind(),
    sitemap({
      serialize(item) {
        if (item.url.endsWith('/index/')) {
          item.url = item.url.replace('/index/', '/');
        }
        return item;
      },
    }),
    astroBrokenLinksChecker({
      throwError: true,
      checkExternalLinks: false,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
