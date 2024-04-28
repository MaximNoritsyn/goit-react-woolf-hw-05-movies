import { useMovies } from '../../context/Movies/index';
import css from './index.module.css'

export const SearchForm = () => {
    const { query, setQuery, handleSubmit } = useMovies();
    
    const handleChange = e => {
        setQuery(e.target.value);
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