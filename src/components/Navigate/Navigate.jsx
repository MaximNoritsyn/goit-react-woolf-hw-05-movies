import { NavLink, Outlet } from "react-router-dom";
import React, { Suspense } from "react";
import { Loader } from "components/Loader/Loader";
import styled from "styled-components";
import css from "./Navigate.module.css";

const StyledLink = styled(NavLink)`
  &.active {
    text-decoration: underline;
  }
`;

export const Navigate = ({children}) => {
  return (
      <div className={css.mainBody}>
        <nav className={css.nav}>
          <div className={css.navBlock}>
            <StyledLink to="/" className={css.link}>Home</StyledLink>
            <StyledLink to="/movies" className={css.link}>Movies</StyledLink>
          </div>
        </nav>
        {children}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    );
}