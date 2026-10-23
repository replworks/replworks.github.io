export interface DocumentMenuDefinition {
  slug: string;
  title?: string;
  subtitle?: string;
  badge?: string;
}

export const documentMenu: DocumentMenuDefinition[] = [
  { slug: 'ideas' },
  { slug: 'pitching-script' },
  { slug: 'product-spec' },
  { slug: 'tech-stack' },
  { slug: 'architecture' },
  { slug: 'tasks' },
  { slug: 'agents' },
];
