import { describe, expect, it } from 'vitest';
import { formatPath, formatUrl, getCanonicalUrl } from './url';

describe('formatUrl and formatPath', () => {
  it('appends a trailing slash to sub-paths', () => {
    expect(formatUrl('/about')).toBe('/about/');
    expect(formatUrl('/about/')).toBe('/about/');
    expect(formatUrl('/docs/getting-started')).toBe('/docs/getting-started/');
    expect(formatUrl('/docs/getting-started/')).toBe('/docs/getting-started/');
  });

  it('keeps root URL as /', () => {
    expect(formatUrl('/')).toBe('/');
    expect(formatPath('/')).toBe('/');
  });

  it('does not append a trailing slash to paths with file extensions', () => {
    expect(formatUrl('/sitemap.xml')).toBe('/sitemap.xml');
    expect(formatUrl('/favicon.ico')).toBe('/favicon.ico');
    expect(formatUrl('/images/logo.png')).toBe('/images/logo.png');
    expect(formatUrl('/documents/agents.md')).toBe('/documents/agents.md');
    expect(formatUrl('/sitemap.xml/')).toBe('/sitemap.xml');
  });

  it('places query and anchor after the trailing slash', () => {
    expect(formatUrl('/docs?q=a#top')).toBe('/docs/?q=a#top');
    expect(formatUrl('/docs/?q=a#top')).toBe('/docs/?q=a#top');
    expect(formatUrl('/faq#repl-works-compatible')).toBe(
      '/faq/#repl-works-compatible',
    );
  });

  it('preserves external URLs as-is', () => {
    expect(formatUrl('https://github.com/replworks/replworks.github.io')).toBe(
      'https://github.com/replworks/replworks.github.io',
    );
    expect(formatUrl('https://wifinote.net')).toBe('https://wifinote.net');
    expect(formatUrl('https://brew.repl.net')).toBe('https://brew.repl.net');
    expect(formatUrl('mailto:works@repl.net')).toBe('mailto:works@repl.net');
  });

  it('preserves hash-only links', () => {
    expect(formatUrl('#main-content')).toBe('#main-content');
  });

  it('normalizes internal repl.net absolute URLs to have trailing slash', () => {
    expect(formatUrl('https://www.repl.net')).toBe('https://www.repl.net/');
    expect(formatUrl('https://www.repl.net/')).toBe('https://www.repl.net/');
    expect(formatUrl('https://www.repl.net/workflow')).toBe(
      'https://www.repl.net/workflow/',
    );
  });

  it('computes canonical URL with https://www.repl.net/ and trailing slash', () => {
    expect(getCanonicalUrl('/')).toBe('https://www.repl.net/');
    expect(getCanonicalUrl('/workflow')).toBe('https://www.repl.net/workflow/');
    expect(getCanonicalUrl('/workflow/')).toBe(
      'https://www.repl.net/workflow/',
    );
    expect(getCanonicalUrl('/documents/agents')).toBe(
      'https://www.repl.net/documents/agents/',
    );
  });
});
