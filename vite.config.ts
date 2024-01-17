import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteSass from 'vite-plugin-sass';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteSass()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
