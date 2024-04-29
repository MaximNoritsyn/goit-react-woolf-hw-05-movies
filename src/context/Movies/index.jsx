import React, { createContext, useContext, useState} from "react";
import { searchMovies } from '../../api/themoviedb';

const MoviesContext = createContext();

export const useMovies = () => {
    return useContext(MoviesContext);
}

export const MoviesProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [canLoadMore, setCanLoadMore] = useState(false);

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


    const values = {
        movies,
        setMovies,
        canLoadMore,
        setCanLoadMore,
        setSearchMovies
    };

    return (
        <MoviesContext.Provider value={values}>
        {children}
        </MoviesContext.Provider>
    );
}