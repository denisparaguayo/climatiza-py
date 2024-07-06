import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import robotsTxt from 'astro-robots-txt';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://climatizapy.com',
  integrations: [mdx(), tailwind(), robotsTxt(), sitemap()],
  output: 'server',
  adapter: netlify()
});