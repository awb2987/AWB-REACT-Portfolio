import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// SET development server port & automatically open app in the browser
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
});
