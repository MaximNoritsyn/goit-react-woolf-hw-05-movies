import { useEffect, Suspense } from 'react';
import { Outlet } from "react-router-dom";
import { Loader } from '../../components/Loader';
import { useMovies } from '../../context/Movies/index';
import { MoviesList } from '../../components/MovieList/index';


export const MoviesPage = () => {
    const { setMovies } = useMovies();

    useEffect(() => {
        setMovies([])
    }, [setMovies]);
    
    return (
        <div>
            <MoviesList />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </div>
    );
}

export default MoviesPage;