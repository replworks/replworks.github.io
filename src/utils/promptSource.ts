import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const promptSourceDirectory = resolve(process.cwd(), 'templates/prompts');

export function getPromptSourceFilename(slug: string): string {
  return `${slug.replaceAll('-', '_').toUpperCase()}_PROMPT.txt`;
}

export function getPromptSource(slug: string): string {
  const sourceFilename = getPromptSourceFilename(slug);
  const sourcePath = resolve(promptSourceDirectory, sourceFilename);

  if (!existsSync(sourcePath)) {
    throw new Error(
      `Missing prompt source for "${slug}": templates/prompts/${sourceFilename}`,
    );
  }

  return readFileSync(sourcePath, 'utf8').replace(/\r\n/g, '\n').trimEnd();
}
