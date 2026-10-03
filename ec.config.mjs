import { defineEcConfig } from 'astro-expressive-code';

export default defineEcConfig({
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
});
