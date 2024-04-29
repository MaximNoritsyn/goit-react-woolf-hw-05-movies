import React from 'react';
import { Link } from 'react-router-dom';
import { getMovieImage } from '../../../api/themoviedb';
import css from './MovieItem.module.css';

export const MovieItem = ({ movie }) => {
    return (
        <Link to={`/movies/${movie.id}`} className={css.MovieItem}>
            <img src={getMovieImage(movie.poster_path)} alt={movie.title} className={css.image} />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
        </Link>
    );
}