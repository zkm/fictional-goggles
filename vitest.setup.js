// Global test setup for Vitest
// Provides jest-dom matchers like `toBeInTheDocument`
import '@testing-library/jest-dom'

// Polyfill matchMedia for jsdom
if (typeof window !== 'undefined' && !window.matchMedia) {
	window.matchMedia = (query) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: () => {}, // deprecated
		removeListener: () => {}, // deprecated
		addEventListener: () => {},
		removeEventListener: () => {},
		dispatchEvent: () => false,
	})
}
