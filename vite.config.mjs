import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // GitHub Pages project site: https://patrick-b-l.github.io/Portfolio_example/
  base: mode === 'production' ? '/Portfolio_example/' : '/',
}));
