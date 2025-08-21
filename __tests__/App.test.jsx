import { render, screen } from '@testing-library/react'
import App from '../src/App'

it('renders h1 title', () => {
  render(<App />)
  const titleElement = screen.getByText(/Fictional Goggles/i)
  expect(titleElement).toBeInTheDocument()
})
