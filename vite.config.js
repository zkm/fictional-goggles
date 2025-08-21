import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
