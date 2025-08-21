import { render, screen, fireEvent } from '@testing-library/react'
import Search from '../src/components/Search.jsx'

describe('Search component', () => {
  it('renders input with placeholder and calls handlers', () => {
    const onSearch = vi.fn((e) => e.preventDefault())
    const onQueryChange = vi.fn()

    render(
      <Search onSearch={onSearch} onQueryChange={onQueryChange} query="Dune" />
    )

  const input = screen.getByLabelText(/Book title/i)
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('Dune')

    fireEvent.change(input, { target: { value: 'Foundation' } })
    expect(onQueryChange).toHaveBeenCalled()

    const button = screen.getByRole('button', { name: /Search/i })
    fireEvent.click(button)
    expect(onSearch).toHaveBeenCalled()
  })
})
