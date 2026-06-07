export const contentCollections = [
  'manifesto',
  'specification',
  'workflow',
  'resources',
  'showcase',
] as const;

export type ContentCollection = (typeof contentCollections)[number];

export const navItems = [
  { title: 'Home', href: '/' },
  { title: 'Why', href: '/why' },
  { title: 'Manifesto', href: '/manifesto' },
  { title: 'Specification', href: '/specification' },
  { title: 'Workflow', href: '/workflow' },
  { title: 'Resources', href: '/resources' },
  { title: 'Showcase', href: '/showcase' },
  { title: 'Search', href: '/search' },
] as const;

export const collectionTitles: Record<ContentCollection, string> = {
  manifesto: 'Manifesto',
  specification: 'Specification',
  workflow: 'Workflow',
  resources: 'Resources',
  showcase: 'Showcase',
};

export const collectionDescriptions: Record<ContentCollection, string> = {
  manifesto: 'A shared manifesto for REPL Works and AI development.',
  specification:
    'The specification framework for the REPL Works documentation platform.',
  workflow: 'The workflow and process guidance for using REPL Works.',
  resources: 'Curated resources to support REPL Works adoption.',
  showcase: 'Proof of adoption and showcase examples for REPL Works.',
};

export function isContentCollection(value: string): value is ContentCollection {
  return contentCollections.includes(value as ContentCollection);
}
