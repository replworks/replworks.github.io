import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const baseCollectionSchema = z.object({
  title: z.string(),
  description: z.string(),
  version: z.string(),
  publishedAt: z.string().datetime(),
});

export const collections = {
  manifesto: defineCollection({
    schema: baseCollectionSchema,
  }),
  specification: defineCollection({
    schema: baseCollectionSchema,
  }),
  workflow: defineCollection({
    schema: baseCollectionSchema,
  }),
  resources: defineCollection({
    schema: baseCollectionSchema,
  }),
  showcase: defineCollection({
    schema: baseCollectionSchema,
  }),
};
