//we need to test movies list
/**
 * what does it do?
 * 1) makes a get request to grab a list of movies and updates the state with whats returned
 * 2) maps through the list to display each individual movie
 *
 * what is most important to the user in this component?
 * that it grabs the needed information from the request
 * and displays it
 *
 * we should test those two things
 */

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, waitForElement } from '@testing-library/react';
import axios from 'axios';
import MovieList from './MoviesList';

//movies list call expects an array of movies
const movieOne = { title: 'Top Gun', poster_path: 'jfdksfjkld', id: '123' };
const movieTwo = { title: 'Surfs Up 2', poster_path: 'jfdksfjkld', id: '456' };
const movieThree = {
  title: 'Goodfellas',
  poster_path: 'jfdksfjkld',
  id: '789'
};
const mockedApiResponse = { results: [movieOne, movieTwo, movieThree] };

jest.mock('axios');

afterEach(() => {
  cleanup();
});

test('<MoviesList>', async () => {
  axios.get.mockImplementationOnce(() => Promise.resolve(mockedApiResponse));

  const { debug, getByTestId, getAllByTestId, getByText, queryByText } = render(
    <MemoryRouter>
      <MovieList />
    </MemoryRouter>
  );

  expect(getByText('Loading...'));

  await waitForElement(() => {
    return getByTestId('movie-grid');
  });

  expect(queryByText('Loading...')).toBe(null);

  expect(getAllByTestId('movie-link').length).toBe(
    mockedApiResponse.results.length
  );
});
