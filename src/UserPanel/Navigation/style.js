import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const StyledNavedLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    text-decoration: none;
    color: ${(({ theme }) => theme.color.white)};
    padding: 15px;

    &.${activeClassName} {
        font-weight: bold;
    }
`;

export const Nav = styled.nav`
    background-color: ${(({ theme }) => theme.color.green)};
`;