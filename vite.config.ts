import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/my-portfolio/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react', 'reading-time'],
  },
  ssr: {
    noExternal: ['remark', 'remark-parse', 'remark-gfm', 'remark-smartypants', 'remark-rehype', 'rehype-slug', 'rehype-autolink-headings', 'rehype-external-links', 'rehype-pretty-code', 'rehype-sanitize', 'rehype-stringify'],
  },
});
