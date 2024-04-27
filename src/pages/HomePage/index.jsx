import { useState, useEffect } from 'react';
import { MoviesList } from '../../components/MovieList';
import { getTrandingMovies } from '../../api/themoviedb';

export const HomePage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const setTrandingMovies = async () => {
            try {
                const data = await getTrandingMovies();
                setMovies(data.results);
            }
            catch (error) {
                console.error(error);
            }
        }
        setTrandingMovies()
    }, []);


  return (
    <div>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
}