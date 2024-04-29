import React, { useEffect, useState } from "react";
import { getMovieCredits, getMovieImage } from "../../api/themoviedb";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import css from './CastMovieDetail.module.css';

export const CastMovieDetail = () => {

    const { movieId } = useParams();
    const [movieCast, setMovieCast] = useState(null);

    

    useEffect(() => {
        const setMovieCredits = async () => {
            try {
                const data = await getMovieCredits(movieId);
                setMovieCast(data.cast);
            }
            catch (error) {
                alert("Sorry, something went wrong. Please try again later.");
            }
        }
        setMovieCredits();
    }, [movieId]);

    return (
        <div>
            {(!movieCast) ? <Loader /> :
            <ul className={css.list}>
                {movieCast.map(actor => (
                    <li key={actor.id} className={css.listItem}>
                        <img src={getMovieImage(actor.profile_path)} alt={actor.name} className={css.image} />
                        <p className={css.name}>{actor.name}</p>
                        <p className={css.character}>Character: {actor.character}</p>
                    </li>
                ))}
            </ul>}
        </div>
    );
}

export default CastMovieDetail;