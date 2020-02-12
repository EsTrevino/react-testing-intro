import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import axios from 'axios';
import MovieDetail from './MovieDetail';

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

jest.mock('axios');

//test variables
const match = {
  params: {
    id: 'jdklsjdkl'
  }
};

const movie = { id: 'hi', title: 'Level up rules' };

console.error = jest.fn();

test('<MovieDetail />', async () => {
  axios.get.mockImplementationOnce(() => Promise.resolve(movie));

  const { getByText, getByTestId } = render(<MovieDetail match={match} />);

  await waitForElement(() => getByText(movie.title));

  expect(getByTestId('movie-title').textContent).toBe(movie.title);
});

/**
ask what the implementation details are
what code is making the application do 
what the user is expecting the app to do
 */
