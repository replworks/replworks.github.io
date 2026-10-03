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
  { title: '홈', href: '/' },
  { title: '워크플로우', href: '/workflow' },
  { title: '프롬프트', href: '/prompts' },
  { title: '문서', href: '/documents' },
  { title: '도구', href: '/tools' },
  { title: '쇼케이스', href: '/showcase' },
  { title: '자주 묻는 질문', href: '/faq' },
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
