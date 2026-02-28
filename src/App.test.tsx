import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders main title and waits for data', async () => {
  render(<App />);
  const titleElement = screen.getByText(/Encontrá la moto de tus sueños/i);
  expect(titleElement).toBeInTheDocument();

  // Wait for some element that might be rendered after data load or just wait a bit
  // to see if anything crashes during the lifecycle.
  await waitFor(() => {
    // We expect some elements from sections that might depend on data or just let it finish loading
    const footerElement = screen.getByText(/DBM Motos/i);
    expect(footerElement).toBeInTheDocument();
  }, { timeout: 3000 });
});
