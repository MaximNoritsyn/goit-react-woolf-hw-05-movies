import { NavLink, Routes, Route, Outlet } from "react-router-dom";
import React, { Suspense } from "react";
import { SearchForm } from "components/SearchForm";
import { Loader } from "components/Loader";
import styled from "styled-components";
import css from "./index.module.css";

const StyledLink = styled(NavLink)`
  &.active {
    text-decoration: underline;
  }
`;

export const Navigate = () => {
    return (
      <nav className={css.nav}>
        <div className={css.navBlock}>
          <StyledLink to="/" className={css.link}>Home</StyledLink>
          <StyledLink to="/movies" className={css.link}>Movies</StyledLink>
        </div>
        <Routes>
          <Route path="*" element={<div></div>} />  
          <Route path="/movies" element={<SearchForm />} />  
        </Routes>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </nav>
    );
}