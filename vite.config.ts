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
  optimizeDeps: {},
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
    rollupOptions: {
      external: (id) => id === 'fsevents',
    },
  },
});
