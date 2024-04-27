import { Routes, Route } from "react-router-dom";
import { Navigate } from '../components/Navigate';
import { HomePage } from '../pages/HomePage';
import { MoviesPage } from '../pages/MoviesPage';
import { MovieDetailsPage } from '../pages/MovieDetailsPage';
import css from './app.module.css';


export const App = () => {
  return (
    <div className={css.main}>
      <Navigate />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
      </Routes>
    </div>
  );
};
