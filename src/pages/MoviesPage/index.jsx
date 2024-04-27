import { useEffect } from 'react';
import { MoviesList } from '../../components/MovieList';
import { useMovies } from '../../context/Movies/index';


export const MoviesPage = () => {
    const { setMovies } = useMovies();

    useEffect(() => {
        setMovies([])
    }, []);
    
    return (<MoviesList />
    );
    }