import { Link } from 'react-router-dom';
import css from './index.module.css';

export const MovieItem = ({ movie }) => {
    return (
        <Link to={`/movies/${movie.id}`} className={css.MovieItem}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={css.image} />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
        </Link>
    );
}