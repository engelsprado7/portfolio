import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import path from 'path';
import { fileURLToPath } from 'url';
import astrowind from './vendor/integration';
import sitemap from "@astrojs/sitemap";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), sitemap(),
  astrowind({
    config: './src/config.yaml',
  }),
  ],

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});