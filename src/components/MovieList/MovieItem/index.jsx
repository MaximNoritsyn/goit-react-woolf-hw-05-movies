import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../../api/themoviedb';
import css from './index.module.css';

export const MovieItem = ({ movie }) => {
    return (
        <Link to={`/movies/${movie.id}`} className={css.MovieItem}>
            <img src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title} className={css.image} />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
        </Link>
    );
}