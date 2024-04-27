import { NavLink } from "react-router-dom";
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
            <StyledLink to="/" className={css.link}>Home</StyledLink>
            <StyledLink to="/movies" className={css.link}>Movies</StyledLink>
        </nav>
    );
}