import { getMovieDetails } from "../../api/themoviedb";
import { NavLink, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CastMovieDetail } from "../../components/CastMovieDetail";
import { ReviewsMovieDetail } from "../../components/ReviewsMovieDetail";
import styled from "styled-components";
import css from './index.module.css';

const StyledLink = styled(NavLink)`
  &.active {
    background-color: var(--nav-bg-color);
    color: var(--nav-text-color);
  }
`;

export const MovieDetailsPage = () => {
    const [movie, setMovie] = useState(null);

    const { movieId } = useParams();

    const setMovieDetails = async () => {
        try {
            const data = await getMovieDetails(movieId);
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
        (!movie) ? <div>Loading...</div> :
        <div className={css.container}>
            <div className={css.mainBlock}>
                <div className={css.imageBlock}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={css.image} />
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
            </div >
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
            
        </div>
    );
}