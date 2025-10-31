import { useEffect, useState } from 'react'

function hasStorage() {
  try {
    return (
      typeof window !== 'undefined' &&
      typeof window.localStorage !== 'undefined' &&
      typeof window.localStorage.getItem === 'function' &&
      typeof window.localStorage.setItem === 'function'
    )
  } catch {
    return false
  }
}

function getInitialTheme() {
  // 1) User preference (guard for non-browser/test envs)
  const stored = hasStorage() ? window.localStorage.getItem('theme') : null
  if (stored === 'dark' || stored === 'light') return stored
  // 2) System preference
  return typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    const body = document.body
    if (theme === 'dark') {
      root.classList.add('dark')
      body.classList.add('dark')
    } else {
      root.classList.remove('dark')
      body.classList.remove('dark')
      // Clean up any stray `.dark` classes elsewhere that could force dark variants
      document.querySelectorAll('.dark').forEach((el) => {
        if (el !== root && el !== body) el.classList.remove('dark')
      })
    }
    if (hasStorage()) {
      window.localStorage.setItem('theme', theme)
    }
  }, [theme])

  return (
    <button
      type="button"
      className="theme-toggle inline-flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-700 px-3 py-1.5 text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-gray-900 hover:border-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600 transition-colors"
      aria-label="Toggle dark mode"
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
    >
      <span className="i-[theme-icon] hidden" aria-hidden="true" />
      {theme === 'dark' ? 'Light mode' : 'Dark mode'}
    </button>
  )
}
