import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Counter from './Counter';

afterEach(cleanup);

test('<Counter />', () => {
  const { getByTestId, debug } = render(<Counter />);
  const counterButton = getByTestId('counter-button');

  // debug();
  //assert that counter button is a button
  expect(counterButton.tagName).toBe('BUTTON');
  //assert that counter button starts at zero
  expect(counterButton.textContent).toBe('0');

  fireEvent.click(counterButton);
  expect(counterButton.textContent).toBe('1');

  fireEvent.click(counterButton);
  expect(counterButton.textContent).toBe('2');
});
