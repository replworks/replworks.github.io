import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { promptDefinitions } from './data/prompts';
import { showcaseProjects } from './data/showcase';
import { getPromptSource } from './utils/promptSource';

const root = resolve(import.meta.dirname, '..');
const read = (relativePath: string) =>
  readFileSync(resolve(root, relativePath), 'utf8');

describe('REPL Works content invariants', () => {
  it('keeps the authoritative document creation order', () => {
    const index = read('src/content/documents/index.mdx');
    const order = [
      'IDEAS.md',
      'PITCHING_SCRIPT.md',
      'PRODUCT_SPEC.md',
      'TECH_STACK.md',
      'ARCHITECTURE.md',
      'TASKS.md',
    ] as const;

    let previousIndex = -1;
    const documentPaths = {
      'IDEAS.md': 'ideas.mdx',
      'PITCHING_SCRIPT.md': 'pitching-script.mdx',
      'PRODUCT_SPEC.md': 'product-spec.mdx',
      'TECH_STACK.md': 'tech-stack.mdx',
      'ARCHITECTURE.md': 'architecture.mdx',
      'TASKS.md': 'tasks.mdx',
    } as const;

    for (const documentName of order) {
      const currentIndex = index.indexOf(`'${documentName}'`);
      expect(
        currentIndex,
        `${documentName} is missing from DocumentFlow`,
      ).toBeGreaterThan(previousIndex);
      previousIndex = currentIndex;
      expect(
        existsSync(
          resolve(root, `src/content/documents/${documentPaths[documentName]}`),
        ),
      ).toBe(true);
    }
  });

  it('publishes a prompt for every AI-authored document stage', () => {
    for (const prompt of [
      'product-specification.mdx',
      'tech-stack.mdx',
      'architecture-design.mdx',
      'task-generation.mdx',
    ]) {
      expect(existsSync(resolve(root, `src/content/prompts/${prompt}`))).toBe(
        true,
      );
    }
  });

  it('keeps every published prompt backed by its slug-named source file', () => {
    for (const prompt of promptDefinitions) {
      const source = getPromptSource(prompt.slug);
      expect(source.length, `${prompt.slug} source is empty`).toBeGreaterThan(0);
    }
  });

  it('provides raw Markdown endpoints and download links for standards', () => {
    expect(existsSync(resolve(root, 'src/pages/documents/[slug].md.ts'))).toBe(
      true,
    );

    const documentsIndex = read('src/content/documents/index.mdx');
    for (const slug of [
      'ideas',
      'pitching-script',
      'product-spec',
      'tech-stack',
      'architecture',
      'tasks',
      'agents',
    ]) {
      expect(documentsIndex).toContain(`/documents/${slug}.md`);
    }
  });

  it('keeps the public tools and showcase entries complete', () => {
    const toolsIndex = read('src/content/tools/index.mdx');
    for (const repository of [
      'https://github.com/replworks/repl-cli',
      'https://github.com/replworks/ai-issue',
      'https://github.com/replworks/coolrestore',
    ]) {
      expect(toolsIndex).toContain(repository);
    }
    expect(toolsIndex).not.toContain('href="/tools/repl-cli"');
    expect(toolsIndex).not.toContain('href="/tools/ai-issue"');

    const showcaseDirectory = resolve(root, 'src/content/showcase');
    for (const entry of [
      'ai-issue.mdx',
      'claytube.mdx',
      'etern-labs.mdx',
      'eternops.mdx',
      'mma.mdx',
      'repl-works-website.mdx',
      'wifi-note.mdx',
    ]) {
      const content = read(`src/content/showcase/${entry}`);
      expect(content).toContain('## Workflow Usage');
      expect(content).toContain('## Tools Used');
      expect(existsSync(resolve(showcaseDirectory, entry))).toBe(true);
    }
  });

  it('keeps the shared showcase data complete for home and Showcase', () => {
    expect(showcaseProjects).toHaveLength(7);
    expect(new Set(showcaseProjects.map((project) => project.slug)).size).toBe(
      7,
    );
    expect(showcaseProjects.filter((project) => project.featured)).toHaveLength(
      4,
    );

    for (const project of showcaseProjects) {
      expect(project.detailUrl).toMatch(/^\/showcase\//);
      expect(project.tags.length).toBeGreaterThan(0);
      expect(project.lesson.length).toBeGreaterThan(0);
    }

    const home = read('src/pages/index.astro');
    const card = read('src/components/ShowcaseCard.astro');
    expect(home).toContain("from '../data/showcase'");
    expect(home).toContain("from '../components/ShowcaseCard.astro'");
    expect(card).toContain('showLesson');
  });

  it('keeps Showcase as a card-first page', () => {
    const showcase = read('src/content/showcase/index.mdx');
    expect(showcase).toContain(
      'REPL Works 방식으로 개발하고 운영 중인 프로젝트들입니다.',
    );
    expect(showcase).not.toContain('DOCUMENT SPECIFICATION');
    expect(showcase).not.toContain('Compatibility Requirements');
    expect(showcase).not.toContain('Official Projects');
    expect(showcase).not.toContain('Learn By Example');
  });

  it('does not retain the removed frameworks collection or legacy file name', () => {
    const sourceFiles = [
      'src/content.config.ts',
      'src/lib/site.ts',
      'src/content/documents/index.mdx',
    ];
    for (const sourceFile of sourceFiles) {
      const content = read(sourceFile);
      expect(content).not.toContain("'frameworks'");
      expect(content).not.toContain('FRAMEWORK.md');
    }

    expect(existsSync(resolve(root, 'src/content/frameworks'))).toBe(false);
  });
});
