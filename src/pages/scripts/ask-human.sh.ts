import type { APIRoute } from 'astro';
import { getCodeSource } from '../../utils/codeSource';

const sourceFile = '/templates/scripts/ask-human.sh';

export const GET: APIRoute = () => {
  const body = getCodeSource(sourceFile);

  return new Response(body, {
    headers: {
      'Content-Type': 'text/x-shellscript; charset=utf-8',
      'Content-Disposition': 'inline; filename="ask-human.sh"',
    },
  });
};
