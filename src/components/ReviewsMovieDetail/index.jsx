import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api/themoviedb";
import { Loader } from "../Loader";
import css from './index.module.css';

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