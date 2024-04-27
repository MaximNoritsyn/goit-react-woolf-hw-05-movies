import { useEffect } from 'react';
import { MoviesList } from '../../components/MovieList';
import { useMovies } from '../../context/Movies/index';

export const HomePage = () => {
  const { setTrandingMovies } = useMovies();

  useEffect(() => {
    setTrandingMovies()
  }, []);


  return (
    <MoviesList />
  );
}