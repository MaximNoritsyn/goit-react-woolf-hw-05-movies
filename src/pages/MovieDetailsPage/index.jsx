import { getMovieDetails } from "../../api/themoviedb";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import css from './index.module.css';

export const MovieDetailsPage = () => {
    const [movie, setMovie] = useState(null);

    const { movieId } = useParams();

    const setMovieDetails = async () => {
        try {
            const data = await getMovieDetails(movieId);
            console.log(data);
            setMovie(data);
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        setMovieDetails();
    }, []);

    return (
        <div className={css.container}>
            <div className={css.mainBlock}>
                <div className={css.imageBlock}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />    
                </div>
                <div className={css.description}>
                    <h1>{movie.title}</h1>
                    <p>{movie.release_date}</p>
                </div>
            </div >
            <div className={css.details}>


            </div>
            <p>{movie.overview}</p>
        </div>
    );
}