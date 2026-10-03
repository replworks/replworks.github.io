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
    astroExpressiveCode({
      themes: ['vitesse-dark', 'github-light'],
      useDarkModeMediaQuery: false,
      themeCssSelector: (theme) =>
        theme.type === 'dark' ? "[data-theme='dark']" : "[data-theme='light']",
      frames: {
        showCopyToClipboardButton: true,
      },
      styleOverrides: {
        borderRadius: '0.75rem',
        borderWidth: '1px',
        borderColor: ['#334155', '#cbd5e1'],
        codeBackground: ['#111827', '#f1f5f9'],
        codePaddingBlock: '1.25rem',
        codePaddingInline: '1.25rem',
        frames: {
          shadowColor: ['#02061799', '#94a3b866'],
          editorBackground: ['#111827', '#f1f5f9'],
          editorTabBarBackground: ['#1e293b', '#e2e8f0'],
          editorTabBarBorderColor: ['#334155', '#cbd5e1'],
        },
      },
    }),
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
