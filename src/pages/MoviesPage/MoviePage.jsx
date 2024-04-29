import React, { useEffect, Suspense, useState } from 'react';
import { Outlet } from "react-router-dom";
import { Loader } from '../../components/Loader/Loader';
import { MoviesList } from '../../components/MovieList/MovieList';


export const MoviesPage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        setMovies([])
    }, []);
    
    return (
        <div>
            <MoviesList movies={movies} />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </div>
    );
}

export default MoviesPage;