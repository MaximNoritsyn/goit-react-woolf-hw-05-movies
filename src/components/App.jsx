import React, { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import { Navigate } from './Navigate/Navigate';
import { Loader } from "./Loader/Loader";
import css from './app.module.css';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviePage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/MovieDetailsPage'));
const NonFoundPage = lazy(() => import('../pages/NonFoundPage/NonFoundPage'));


export const App = () => {
  return (
    <div className={css.main}>
      <Navigate />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="/test" element={<NonFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
