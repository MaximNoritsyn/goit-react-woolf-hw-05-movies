import React, { createContext, useContext, useState} from "react";
import { getTrandingMovies, searchMovies } from '../../api/themoviedb';

const MoviesContext = createContext();

export const useMovies = () => {
    return useContext(MoviesContext);
}

export const MoviesProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [canLoadMore, setCanLoadMore] = useState(false);
    
    const setTrandingMovies = async () => {
        try {
            const data = await getTrandingMovies();
            setMovies(data.results);
        }
        catch (error) {
            alert('Sorry, something went wrong. Please try again later.');
        }
    }

    const setSearchMovies = async (query, page=1) => {
        try {
            const data = await searchMovies(query, page);
            setMovies(prev => [...prev, ...data.results]);
            setCanLoadMore(data.page < data.total_pages);
        }
        catch (error) {
            alert('Sorry, something went wrong. Please try again later.');
        }
    }

    useContext(() => {
        setTrandingMovies();
    }, []);


    const values = {
        movies,
        setMovies,
        canLoadMore,
        setCanLoadMore,
        setTrandingMovies,
        setSearchMovies
    };

    return (
        <MoviesContext.Provider value={values}>
        {children}
        </MoviesContext.Provider>
    );
}