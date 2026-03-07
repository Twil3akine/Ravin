// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), svelte()],
  adapter: cloudflare(),
});