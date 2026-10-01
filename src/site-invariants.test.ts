import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

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
        `${documentName} is missing from DocumentFlow`
      ).toBeGreaterThan(previousIndex);
      previousIndex = currentIndex;
      expect(
        existsSync(
          resolve(root, `src/content/documents/${documentPaths[documentName]}`)
        )
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
        true
      );
    }
  });

  it('provides raw Markdown endpoints and download links for standards', () => {
    expect(existsSync(resolve(root, 'src/pages/documents/[slug].md.ts'))).toBe(
      true
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
    for (const tool of ['ai-issue.mdx', 'repl-cli.mdx']) {
      const content = read(`src/content/tools/${tool}`);
      expect(content).toContain('## Purpose');
      expect(content).toContain('## Installation');
      expect(content).toContain('## Repository');
    }

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
