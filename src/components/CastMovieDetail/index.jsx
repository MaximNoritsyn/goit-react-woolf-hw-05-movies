import { useEffect, useState } from "react";
import { getMovieCredits } from "../../api/themoviedb";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader";
import css from './index.module.css';

export const CastMovieDetail = () => {

    const { movieId } = useParams();
    const [movieCast, setMovieCast] = useState(null);

    const setMovieCredits = async () => {
        try {
            const data = await getMovieCredits(movieId);
            setMovieCast(data.cast);
        }
        catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        setMovieCredits();
    }, []);

    return (
        (!movieCast) ? <Loader /> :
        <ul className={css.list}>
            {movieCast.map(actor => (
                <li key={actor.id} className={css.listItem}>
                    <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} className={css.image} />
                    <p className={css.name}>{actor.name}</p>
                    <p className={css.character}>Character: {actor.character}</p>
                </li>
            ))}
        </ul>
    );
}