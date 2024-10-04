import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Define and export the Vite configuration
export default defineConfig({
  plugins: [react()],
  root: './',
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html',
    },
  },
});
