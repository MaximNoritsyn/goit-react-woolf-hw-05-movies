import { useEffect } from 'react';
import { MovieItem } from './MovieItem/index';
import { LoadMore } from 'components/LoadMore';
import { useMovies } from "context/Movies";
import css from './index.module.css';


export const MoviesList = () => {
  const { movies, setCanLoadMore } = useMovies();

  useEffect(() => {
    setCanLoadMore(false);
  }, []);

  return (
    <div className={css.movieList}>
      {movies && movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
      <LoadMore />
    </div>
  );
}