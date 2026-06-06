import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const baseCollectionSchema = z.object({
  title: z.string(),
  description: z.string(),
  version: z.string(),
  publishedAt: z.string().datetime(),
});

export const collections = {
  manifesto: defineCollection({
    loader: glob({
      base: './src/content/manifesto',
      pattern: '**/*.{md,mdx}',
    }),
    schema: baseCollectionSchema,
  }),
  specification: defineCollection({
    loader: glob({
      base: './src/content/specification',
      pattern: '**/*.{md,mdx}',
    }),
    schema: baseCollectionSchema,
  }),
  workflow: defineCollection({
    loader: glob({
      base: './src/content/workflow',
      pattern: '**/*.{md,mdx}',
    }),
    schema: baseCollectionSchema,
  }),
  resources: defineCollection({
    loader: glob({
      base: './src/content/resources',
      pattern: '**/*.{md,mdx}',
    }),
    schema: baseCollectionSchema,
  }),
  showcase: defineCollection({
    loader: glob({
      base: './src/content/showcase',
      pattern: '**/*.{md,mdx}',
    }),
    schema: baseCollectionSchema,
  }),
};
