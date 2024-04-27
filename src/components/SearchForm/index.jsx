import { useState } from 'react';
import { useMovies } from '../../context/Movies/index';
import css from './index.module.css'

export const SearchForm = () => {
    const { query, setQuery, handleSubmit } = useMovies();
    
    const handleChange = e => {
        setQuery(e.target.value);
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search movies"
            />
            <button type="submit">Search</button>
        </form>
    );
    }