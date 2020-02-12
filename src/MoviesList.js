/* eslint react/no-did-mount-set-state: 0 */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Movie from './Movie';
import axios from 'axios';

class MoviesList extends PureComponent {
  state = {
    movies: []
  };

  async componentDidMount() {
    try {
      const movies = await axios.get(
        'https://api.themoviedb.org/3/discover/movie?api_key=hi&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
      );

      this.setState({
        movies: movies.results
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movies } = this.state;
    if (movies.length !== 0)
      return (
        <MovieGrid data-testid="movie-grid">
          {this.state.movies.map(movie => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </MovieGrid>
      );

    return <h1>Loading...</h1>;
  }
}

export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
