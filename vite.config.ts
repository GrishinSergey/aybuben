import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Repo URL on GitHub Pages: https://<user>.github.io/aybuben/
  // Vite needs the trailing slash; it's prepended to all asset URLs.
  // Locally (npm run dev) Vite ignores `base` for the dev server root,
  // but uses it for asset resolution — keep it as-is, no env split needed.
  base: '/aybuben/',
});
