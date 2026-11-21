import { render, screen } from '@testing-library/react';
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
  expect(screen.getByText(/welcome to our hotel booking app/i)).toBeInTheDocument();
});
