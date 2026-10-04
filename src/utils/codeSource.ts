import { readFileSync } from 'node:fs';
import { relative, resolve, sep } from 'node:path';

const projectRoot = resolve(process.cwd());

export function getCodeSource(sourcePath: string): string {
  const filePath = resolve(projectRoot, sourcePath.replace(/^\/+/, ''));
  const relativePath = relative(projectRoot, filePath);

  if (relativePath.startsWith(`..${sep}`) || relativePath === '..') {
    throw new Error(`Code source must be inside the project: ${sourcePath}`);
  }

  return readFileSync(filePath, 'utf8').replace(/\r\n/g, '\n').trimEnd();
}
