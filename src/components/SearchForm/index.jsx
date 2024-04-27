import { useState } from 'react';

export const SearchForm = ({ onSubmit }) => {
    const [query, setQuery] = useState('');
    
    const handleChange = e => {
        setQuery(e.target.value);
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(query);
        setQuery('');
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