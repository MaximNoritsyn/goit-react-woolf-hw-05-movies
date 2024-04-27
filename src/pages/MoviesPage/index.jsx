import { useEffect, Suspense } from 'react';
import { Outlet } from "react-router-dom";
import { useMovies } from '../../context/Movies/index';
import { MoviesList } from '../../components/MovieList/index';


export const MoviesPage = () => {
    const { setMovies } = useMovies();

    useEffect(() => {
        setMovies([])
    }, []);
    
    return (
        <div>
            <MoviesList />
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
    );
}

export default MoviesPage;