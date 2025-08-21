import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages, set the base to the repo name when building in CI.
  // Local dev remains '/'. If your repository is renamed, update this value.
  base: process.env.GITHUB_ACTIONS ? '/fictional-goggles/' : '/',
  test: {
    environment: 'jsdom',
  setupFiles: ['./vitest.setup.js'],
    css: true,
    globals: true,
    include: [
      '**/__tests__/**/*.{test,spec}.{js,jsx,ts,tsx}',
    ],
  },
})
