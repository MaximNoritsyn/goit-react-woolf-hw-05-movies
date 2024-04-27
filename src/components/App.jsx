import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import { Navigate } from '../components/Navigate';
import css from './app.module.css';

const HomePage = lazy(() => import('../pages/HomePage/index'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/index'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/index'));


export const App = () => {
  return (
    <div className={css.main}>
      <Navigate />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
