// scripts/og-yml.mjs
import { readdir, writeFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const DIST = 'dist';
const BASE = process.env.BASE ?? 'http://localhost:4321';
const EXCLUDE = [/^\/404$/, /^\/og-card/]; // 제외할 경로 패턴

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (e.name.endsWith('.html')) out.push(p);
  }
  return out;
}

const files = await walk(DIST);

const paths = files
  .map((f) => '/' + relative(DIST, f).split(sep).join('/'))
  .map((p) => p.replace(/index\.html$/, '').replace(/\.html$/, ''))
  .map((p) => (p.length > 1 ? p.replace(/\/$/, '') : p))
  .filter((p) => !EXCLUDE.some((re) => re.test(p)))
  .sort();

const yml = paths
  .map((p) => {
    const name = p === '/' ? 'index' : p.slice(1).replace(/\//g, '-');
    return [
      `- url: ${BASE}${p}`,
      `  output: public/og/${name}.png`,
      `  width: 1200`,
      `  height: 630`,
      `  wait: 800`,
    ].join('\n');
  })
  .join('\n\n');

await writeFile('og.yml', yml + '\n');
console.log(`og.yml: ${paths.length} pages`);
