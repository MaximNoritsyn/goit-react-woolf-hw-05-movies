import React, { lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import { Navigate } from './Navigate/Navigate';
import css from './app.module.css';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'));
const NonFoundPage = lazy(() => import('../pages/NonFoundPage/NonFoundPage'));


export const App = () => {
  return (
    <div className={css.main}>
      <Routes>
        <Route path="/" element={<Navigate />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="/*" element={<NonFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};
