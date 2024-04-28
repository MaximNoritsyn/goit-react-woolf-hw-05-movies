import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { getTrandingMovies, searchMovies } from '../../api/themoviedb';

const MoviesContext = createContext();

export const useMovies = () => {
    return useContext(MoviesContext);
}

export const MoviesProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const [canLoadMore, setCanLoadMore] = useState(false);

    const lastQuery = useRef(query);
    
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
            setMovies(data.results);
            setCanLoadMore(data.page < data.total_pages);
        }
        catch (error) {
            alert('Sorry, something went wrong. Please try again later.');
        }
    }

    useContext(() => {
        setTrandingMovies();
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        setPage(1);
        lastQuery.current = query;
        setSearchMovies(query);
    };

    useEffect(() => {
        if (page > 1 && lastQuery.current === query) {
            setSearchMovies(query, page);
        }
    }, [page, query]);

    const values = {
        movies,
        setMovies,
        setQuery,
        canLoadMore,
        setPage,
        setCanLoadMore,
        setTrandingMovies,
        handleSubmit
    };

    return (
        <MoviesContext.Provider value={values}>
        {children}
        </MoviesContext.Provider>
    );
}