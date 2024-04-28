import { NavLink, Routes, Route, useParams, Outlet } from "react-router-dom";
import { useEffect, useState, Suspense, lazy } from "react";
import styled from "styled-components";
import { getMovieDetails, IMAGE_URL } from "../../api/themoviedb";
import { Loader } from "../../components/Loader";
import { NonFoundPage } from "../NonFoundPage";
import css from './index.module.css';

const CastMovieDetail = lazy(() => import('../../components/CastMovieDetail/index'));
const ReviewsMovieDetail = lazy(() => import('../../components/ReviewsMovieDetail/index'));

const StyledLink = styled(NavLink)`
  &.active {
    background-color: var(--nav-bg-color);
    color: var(--nav-text-color);
  }
`;

export const MovieDetailsPage = () => {
    const [movie, setMovie] = useState(null);
    const [isError, setIsError] = useState(false);

    const { movieId } = useParams();

    const setMovieDetails = async () => {
        try {
            const data = await getMovieDetails(movieId);
            setMovie(data);
            setIsError(false);
        }
        catch (error) {
            setIsError(true);
        }
    }

    useEffect(() => {
        setMovieDetails();
    }, []);

    return (
        <div>
            {(!movie) ? (isError ? <NonFoundPage /> : <Loader />) :
            <div className={css.container}>
                <div className={css.mainBlock}>
                    <div className={css.imageBlock}>
                        <img src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title} className={css.image} />
                    </div>
                    <div className={css.descriptionBlock}>
                        <h1 className={css.title}>{movie.title}</h1>
                        <p className={css.decriptionItem}>Date of release: {movie.release_date}</p>
                        <p className={css.decriptionItem}>Rating: {movie.vote_average}</p>
                        <p className={css.decriptionItem}>Runtime: {movie.runtime} min</p>
                        <p className={css.decriptionItem}>Budget: {movie.budget}$</p>
                        <p className={css.decriptionItem}>Revenue: {movie.revenue}$</p>
                        <p className={css.decriptionItem}>Status: {movie.status}</p>
                        <p className={css.decriptionItem}>{movie.overview}</p>
                    </div>
                </div>
                <div className={css.details}>
                    <div className={css.detailNavs}>
                        <StyledLink to="cast" className={css.detailNavItem}>
                            Cast
                        </StyledLink>
                        <StyledLink to="reviews" className={css.detailNavItem}>
                            Reviews
                        </StyledLink>
                    </div>
                    <div className={css.detailContent}>
                            <Routes path="/movies/:movieId">
                                <Route path="cast" element={<CastMovieDetail/>} />
                                <Route path="reviews" element={<ReviewsMovieDetail/>} />
                            </Routes>
                    </div>
                </div>
            </div>}
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </div>
    );
}

export default MovieDetailsPage;