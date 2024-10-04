import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Define and export the Vite configuration
export default defineConfig({
  plugins: [react()],
  root: 'src',
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: 'src/index.html',
    },
  },
});
