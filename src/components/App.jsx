import React, { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import { Navigate } from '../components/Navigate';
import { Loader } from "../components/Loader";
import css from './app.module.css';

const HomePage = lazy(() => import('../pages/HomePage/index'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/index'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage/index'));
const NonFoundPage = lazy(() => import('../pages/NonFoundPage/index'));


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
