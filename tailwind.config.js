/**** Optional Tailwind config for v4 ****/
/**
 * Enables class-based dark mode so the `dark:` variant responds to `.dark` on the root.
 * Content is optional in v4 but kept for editor tooling and potential JIT hints.
 */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}',
  ],
};
