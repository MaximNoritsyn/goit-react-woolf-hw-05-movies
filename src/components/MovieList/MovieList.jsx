import React from 'react';
import { MovieItem } from './MovieItem/MovieItem';
import css from './MovieList.module.css';


export const MoviesList = ({movies}) => {

  return (
    <div className={css.container}>
      <div className={css.movieList}>
        {movies && movies.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}