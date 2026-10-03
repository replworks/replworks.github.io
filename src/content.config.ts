import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const baseCollectionSchema = z.object({
  title: z.string(),
  label: z.string().optional(),
  description: z.string(),
  version: z.string(),
  publishedAt: z.iso.datetime(),
});

export const collections = {
  workflow: defineCollection({
    loader: glob({
      base: './src/content/workflow',
      pattern: '**/*.{md,mdx}',
    }),
    schema: baseCollectionSchema,
  }),
  prompts: defineCollection({
    loader: glob({
      base: './src/content/prompts',
      pattern: '**/*.{md,mdx}',
    }),
    schema: baseCollectionSchema,
  }),
  documents: defineCollection({
    loader: glob({
      base: './src/content/documents',
      pattern: '**/*.{md,mdx}',
    }),
    schema: baseCollectionSchema,
  }),
  tools: defineCollection({
    loader: glob({
      base: './src/content/tools',
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
  faq: defineCollection({
    loader: glob({
      base: './src/content/faq',
      pattern: '**/*.{md,mdx}',
    }),
    schema: baseCollectionSchema,
  }),
};
