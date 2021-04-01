import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1 title', () => {
	render(<App />);
	const titleElement = screen.getByText(/Open Library book search/i);
	expect(titleElement).toBeInTheDocument();
});
