import React, { useEffect, Suspense, useState } from 'react';
import { Outlet } from "react-router-dom";
import { MoviesList } from '../../components/MovieList/MovieList';
import { Loader } from '../../components/Loader/Loader';
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