import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

describe('App', () => {
  afterEach(cleanup);

  test('renders App text', () => {
    render(<App />);
    const appText = screen.getByText(/App/i);
    expect(appText).toBeInTheDocument();
  });
});
