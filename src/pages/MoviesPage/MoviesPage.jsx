import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import { MoviesList } from '../../components/MovieList/MovieList';
import { searchMovies } from '../../api/themoviedb';
import css from './MoviesPage.module.css';


export const MoviesPage = () => {
    const [movies, setMovies] = useState([]);

    const [searchParams, setSearchParams] = useSearchParams();

    const queryParams = searchParams.get('query') || '';

    const [query, setQuery] = useState(queryParams);
    
    const handleChange = e => {
        setQuery(e.target.value);
    };

    useEffect(() => {
        setSearchMovies(queryParams)
    }, [queryParams]);

    const setSearchMovies = async (query) => {
        try {
            const data = await searchMovies(query, 1);
            setMovies(prev => [...prev, ...data.results]);
        }
        catch (error) {
            alert('Sorry, something went wrong. Please try again later.');
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        setMovies([]);
        setSearchParams({'query': query});
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit} className={css.form}>
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder="Search movies"
                    className={css.input}
                />
                <button type="submit" className={css.button}>Search</button>
            </form>
            <MoviesList movies={movies} />
        </div>
    );
}

export default MoviesPage;