export const contentCollections = [
  'workflow',
  'prompts',
  'documents',
  'tools',
  'showcase',
  'faq',
] as const;

export type ContentCollection = (typeof contentCollections)[number];

export const navItems = [
  { title: 'Home', href: '/' },
  { title: 'Workflow', href: '/workflow' },
  { title: 'Prompts', href: '/prompts' },
  { title: 'Documents', href: '/documents' },
  { title: 'Tools', href: '/tools' },
  { title: 'Showcase', href: '/showcase' },
  { title: 'FAQ', href: '/faq' },
] as const;

export const collectionTitles: Record<ContentCollection, string> = {
  workflow: 'Workflow',
  prompts: 'Prompts',
  documents: 'Documents',
  tools: 'Tools',
  showcase: 'Showcase',
  faq: 'FAQ',
};

export const collectionDescriptions: Record<ContentCollection, string> = {
  workflow: 'The workflow and process guidance for using REPL Works.',
  prompts: 'Reusable prompts for AI-native product development.',
  documents: 'Reusable document standards for the REPL Works framework.',
  tools: 'REPL Works ecosystem tools and framework assets.',
  showcase: 'REPL Works compatible projects and adoption examples.',
  faq: 'Answers to recurring questions about REPL Works.',
};

export function isContentCollection(value: string): value is ContentCollection {
  return contentCollections.includes(value as ContentCollection);
}
