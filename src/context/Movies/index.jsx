import { createContext, useContext, useState, useEffect } from "react";
import { getTrandingMovies, searchMovies } from '../../api/themoviedb';

const MoviesContext = createContext();

export const useMovies = () => {
    return useContext(MoviesContext);
}

export const MoviesProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    
    const setTrandingMovies = async () => {
        try {
            const data = await getTrandingMovies();
            setMovies(data.results);
        }
        catch (error) {
            console.error(error);
        }
    }

    const setSearchMovies = async (query) => {
        try {
            const data = await searchMovies(query);
            setMovies(data.results);
        }
        catch (error) {
            console.error(error);
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        setSearchMovies(query);
        setQuery('');
    };

    return (
        <MoviesContext.Provider value={{ movies, setMovies, setQuery, setTrandingMovies, handleSubmit }}>
        {children}
        </MoviesContext.Provider>
    );
}