import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Matter de verificación de comprobación con un esquema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transformar el objeto de cadena hasta la fecha
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog };
