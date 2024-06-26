import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api/themoviedb";
import { Loader } from "../Loader/Loader";
import css from './ReviewsMovieDetail.module.css';

export const ReviewsMovieDetail = () => {
    const { movieId } = useParams();
    const [movieReviews, setMovieReviews] = useState(null);

    useEffect(() => {
        const setReviews = async () => {
            try {
                const data = await getMovieReviews(movieId);
                setMovieReviews(data.results);
            }
            catch (error) {
                console.error(error);
            }
        }
        setReviews();
    }, [movieId]);

    return (
        (!movieReviews) ? <Loader /> :
        (movieReviews.length === 0) ? <p className={css.noReviews}>No reviews</p> :
        <ul className={css.list}>
            {movieReviews.map(review => (
                <li key={review.id} className={css.listItem}>
                    <p className={css.author}>{review.author}</p>
                    <p className={css.content}>{review.content}</p>
                </li>
            ))}
        </ul>
    );
}

export default ReviewsMovieDetail;