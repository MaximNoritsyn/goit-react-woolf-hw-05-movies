import { useEffect } from 'react';
import { MoviesList } from '../../components/MovieList';
import { useMovies } from '../../context/Movies/index';

export const HomePage = () => {
    const { movies, setTrandingMovies } = useMovies();

    useEffect(() => {
        setTrandingMovies()
    }, []);


  return (
    <div>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
}