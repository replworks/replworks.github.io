import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const entries = await getCollection('documents');

  return entries.map((entry) => ({
    params: { slug: entry.id },
    props: { body: entry.body },
  }));
}

export const GET: APIRoute = ({ params, props }) => {
  const body = props.body as string;
  const filename = `${params.slug ?? 'document'}.md`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Content-Disposition': `attachment; filename="${filename}"`,
    },
  });
};
