import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import ThemeProvider from './context';
import '@testing-library/jest-dom';

test('trigger theme switch button should change the text to TOGGLE LIGHT MODE', () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );

  let button = screen.getByTestId('toggle');
  const header = screen.getByTestId('header');
  
  // Initial state
  expect(button.textContent).toEqual('TOGGLE DARK MODE');
  expect(header).toHaveClass('light');

  // Switch to dark mode
  fireEvent.click(button);

  button = screen.getByTestId('toggle');
  expect(button.textContent).toBe('TOGGLE LIGHT MODE');
  expect(header.className).toContain('dark');

  // Switch back to light mode
  fireEvent.click(button);
  
  button = screen.getByTestId('toggle');
  expect(button.textContent).toBe('TOGGLE DARK MODE');
  expect(header).toHaveClass('light');
})
