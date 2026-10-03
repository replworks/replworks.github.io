import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const promptSourceDirectory = resolve(process.cwd(), 'templates/prompts');

export function getPromptSource(slug: string): string {
  const sourcePath = resolve(promptSourceDirectory, `${slug}.txt`);

  if (!existsSync(sourcePath)) {
    throw new Error(
      `Missing prompt source for "${slug}": templates/prompts/${slug}.txt`,
    );
  }

  return readFileSync(sourcePath, 'utf8').replace(/\r\n/g, '\n').trimEnd();
}
