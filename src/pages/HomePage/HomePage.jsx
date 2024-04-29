import React, { useEffect, useState } from 'react';
import { MoviesList } from '../../components/MovieList/MovieList';
import { getTrendingMovies } from '../../api/themoviedb';

export const HomePage = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const setTrandingMovies = async () => {
        try {
          const data = await getTrendingMovies();
            setMovies(data.results);
        }
        catch (error) {
            alert('Sorry, something went wrong. Please try again later.');
        }
    }
    
    setTrandingMovies()
  }, []);

  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
}

export default HomePage;