import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
	site: 'https://climatizapy.com',
	integrations: [mdx(), tailwind(), robotsTxt()],
	output: 'server',
	adapter: netlify(),
});
