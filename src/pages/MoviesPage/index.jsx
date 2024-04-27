import { useState, useEffect } from 'react';
import { searchMovies } from '../../api/themoviedb';
import { SearchForm } from '../../components/SearchForm';
import { MoviesList } from '../../components/MovieList';


export const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    
    const handleFormSubmit = query => {
        setQuery(query);
    };
    
    useEffect(() => {
        if (!query) {
        return;
        }
    
        searchMovies(query).then(movies => setMovies(movies));
    }, [query]);
    
    return (
        <div>
        <h1>MoviesPage</h1>
        <SearchForm onSubmit={handleFormSubmit} />
        {movies.length > 0 && <MoviesList movies={movies} />}
        </div>
    );
    }