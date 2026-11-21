import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

jest.mock('axios', () => ({
  create: () => ({
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
  }),
}));

test('renders the hotel booking home page', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /find your place to pause/i })).toBeInTheDocument();
});

test('opens the mobile navigation menu accessibly', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /open navigation menu/i }));

  expect(screen.getByRole('button', { name: /close navigation menu/i })).toHaveAttribute('aria-expanded', 'true');
  expect(screen.getByRole('link', { name: 'My stays' })).toBeInTheDocument();
});
