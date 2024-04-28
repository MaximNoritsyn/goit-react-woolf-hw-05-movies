import { useEffect, useState, Suspense } from "react";
import { getMovieCredits, IMAGE_URL } from "../../api/themoviedb";
import { useParams, Outlet } from "react-router-dom";
import { Loader } from "../Loader";
import css from './index.module.css';

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
                        <img src={`${IMAGE_URL}${actor.profile_path}`} alt={actor.name} className={css.image} />
                        <p className={css.name}>{actor.name}</p>
                        <p className={css.character}>Character: {actor.character}</p>
                    </li>
                ))}
            </ul>}
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </div>
    );
}

export default CastMovieDetail;