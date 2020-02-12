import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Movie, { POSTER_PATH } from './Movie';

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

test('<Movie />', () => {
  render(<Movie />);
  expect(console.error).toHaveBeenCalled();
});

test('<Movie /> with movie', () => {
  const movie = {
    id: 'hi',
    title: 'Level Up Big Day Out',
    poster_path: POSTER_PATH
  };

  const { debug, getByTestId } = render(
    <MemoryRouter>
      <Movie movie={movie} />
    </MemoryRouter>
  );

  expect(console.error).not.toHaveBeenCalled();
  expect(getByTestId('movie-link').getAttribute('href')).toBe('/' + movie.id);
  expect(getByTestId('movie-img').src).toBe(
    `${POSTER_PATH}${movie.poster_path}`
  );
});

/**
ask what the implementation details are
what code is making the application do 
what the user is expecting the app to do
 */
