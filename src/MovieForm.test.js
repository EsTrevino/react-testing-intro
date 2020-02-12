import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import MovieForm from './MovieForm';

afterEach(cleanup);

const onSubmit = jest.fn();

test('<MovieForm>', () => {
  const { debug, getByTestId, container, getByText, getByLabelText } = render(
    <MovieForm submitForm={onSubmit} />
  );

  expect(getByTestId('movie-form')).toBeTruthy();

  fireEvent.change(getByLabelText('Text'), { target: { value: 'hello' } });

  fireEvent.click(getByText('Submit'));
  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(onSubmit).toHaveBeenCalledWith({ text: 'hello' });
});
