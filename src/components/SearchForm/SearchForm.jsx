import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from './SearchForm.module.css'

export const SearchForm = () => {
    const { setSearchMovies, setMovies } = useMovies();

    const [searchParams, setSearchParams] = useSearchParams();

    const queryParams = searchParams.get('query') || '';

    const [query, setQuery] = useState(queryParams);
    
    const handleChange = e => {
        setQuery(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        setSearchParams({'query': query});
        setMovies([]);
        setSearchMovies(query);
    };
    
    return (
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
    );
    }