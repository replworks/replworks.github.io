const FILE_EXTENSION_REGEX = /\.[a-zA-Z0-9]+$/;
const EXTERNAL_URL_REGEX = /^(?:[a-z]+:)?\/\//i;

/**
 * Normalizes an internal link or pathname to follow REPL Works trailing slash rules:
 * - Sub-paths always end with a slash: `/about/`, `/docs/getting-started/`
 * - Root path is `/` (or `https://www.repl.net/`)
 * - Paths with file extensions do NOT have a trailing slash: `/sitemap.xml`, `/favicon.ico`, `/images/logo.png`
 * - Query strings and hashes follow the slash: `/docs/?q=a#top`
 * - External site links are preserved as-is
 */
export function formatUrl(url: string): string {
  if (!url) return '/';

  if (
    url.startsWith('mailto:') ||
    url.startsWith('tel:') ||
    url.startsWith('javascript:')
  ) {
    return url;
  }

  if (url.startsWith('#')) {
    return url;
  }

  if (EXTERNAL_URL_REGEX.test(url)) {
    try {
      const parsed = new URL(url);
      if (
        parsed.hostname !== 'www.repl.net' &&
        parsed.hostname !== 'repl.net'
      ) {
        return url;
      }
      const formattedPath = formatPath(parsed.pathname);
      return `https://www.repl.net${formattedPath}${parsed.search}${parsed.hash}`;
    } catch {
      return url;
    }
  }

  return formatRelativeUrl(url);
}

function formatRelativeUrl(url: string): string {
  const [withoutHash, hash] = url.split('#');
  const hashPart = hash !== undefined ? `#${hash}` : '';

  const [pathOnly, search] = withoutHash.split('?');
  const searchPart = search !== undefined ? `?${search}` : '';

  const formattedPath = formatPath(pathOnly);
  return `${formattedPath}${searchPart}${hashPart}`;
}

export function formatPath(path: string): string {
  if (!path || path === '/') {
    return '/';
  }

  const trimmed = path.replace(/\/+$/, '');
  const lastSegment = trimmed.split('/').pop() ?? '';
  if (FILE_EXTENSION_REGEX.test(lastSegment)) {
    return trimmed;
  }

  return `${trimmed}/`;
}

export function getCanonicalUrl(pathname: string): string {
  const formattedPath = formatPath(pathname);
  return `https://www.repl.net${formattedPath}`;
}
