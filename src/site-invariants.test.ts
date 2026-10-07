import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { promptDefinitions } from './data/prompts';
import { documentMenu } from './data/documents';
import { showcaseProjects } from './data/showcase';
import { getCodeSource } from './utils/codeSource';
import { getPromptSource } from './utils/promptSource';

const root = resolve(import.meta.dirname, '..');
const read = (relativePath: string) =>
  readFileSync(resolve(root, relativePath), 'utf8');

describe('REPL Works content invariants', () => {
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
      expect(source.length, `${prompt.slug} source is empty`).toBeGreaterThan(
        0,
      );
    }
  });

  it('keeps the document sidebar backed by its ordered configuration', () => {
    const documentSlugs = documentMenu.map((document) => document.slug);
    expect(new Set(documentSlugs).size).toBe(documentSlugs.length);

    for (const document of documentMenu) {
      expect(
        existsSync(resolve(root, `src/content/documents/${document.slug}.mdx`)),
      ).toBe(true);
    }
  });

  it('keeps the complete AGENTS example backed by its template source', () => {
    const template = getCodeSource('/templates/documents/AGENTS.md');
    expect(template).toBe(
      read('templates/documents/AGENTS.md').replace(/\r\n/g, '\n').trimEnd(),
    );

    const agentsPage = read('src/content/documents/agents.mdx');
    expect(agentsPage).toContain(
      '<CodeFile path="/templates/documents/AGENTS.md"',
    );
  });

  it('provides raw Markdown endpoints for document standards', () => {
    expect(existsSync(resolve(root, 'src/pages/documents/[slug].md.ts'))).toBe(
      true,
    );
  });

  it('keeps the public tools and showcase entries complete', () => {
    const showcaseDirectory = resolve(root, 'src/content/showcase');
    for (const entry of [
      'ai-issue.mdx',
      'coolrestore.mdx',
      'etern-labs.mdx',
      'eternops.mdx',
      'mma.mdx',
      'repl-works-website.mdx',
      'wifinote.mdx',
    ]) {
      expect(existsSync(resolve(showcaseDirectory, entry))).toBe(true);
    }
    expect(existsSync(resolve(showcaseDirectory, 'claytube.mdx'))).toBe(false);
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
