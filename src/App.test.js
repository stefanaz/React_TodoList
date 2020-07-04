import React from 'react';
import { render } from '@testing-library/react';
import App from './containers/App';

test('renders @News@ text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/News/i);
  expect(linkElement).toBeInTheDocument();
});
