import { render, cleanup, screen } from '@testing-library/react';
import ABasic from './ABasic';

describe('ABasic', () => {
  afterEach(cleanup);

  it('renders', () => {
    render(<ABasic />);
    expect(true).toBe(true);
  });

  it('get by text', () => {
    render(<ABasic testProp={'cheese'} />);
    const linkElement = screen.getByText(/cheese/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('get by test id', () => {
    const { getByTestId } = render(<ABasic testProp={'cheese'} />);
    const countValue = getByTestId('test-prop-id').textContent;
    expect(countValue).toEqual('cheese');
  });
});
