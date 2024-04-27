import { MovieItem } from './MovieItem/index';
import css from './index.module.css';


export const MoviesList = ({ movies }) => {
  return (
    <div className={css.movieList}>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}