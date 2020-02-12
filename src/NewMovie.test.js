import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import NewMovie from './NewMovie';

afterEach(cleanup);

test('<NewMovie>', () => {
  const { debug, getByTestId, container } = render(<NewMovie />);

  expect(getByTestId('page-title').textContent).toBe('New Movie');
  expect(getByTestId('movie-form')).toBeTruthy();
  //   expect(container.firstChild).toMatchSnapshot();
});
