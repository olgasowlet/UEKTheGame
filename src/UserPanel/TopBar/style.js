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
    min-height: 64px;
    display: flex;
    justify-content: flex-end;
    box-shadow: 0 0 10px ${(({ theme }) => theme.color.outerspace)}
`;

export const Button = styled.button`
    border: none;
    background-color: ${(({ theme }) => theme.color.green)};
    width: 64px;
    color: ${(({ theme }) => theme.color.white)};
    font-size: 2em;
    margin-right: 20px;
`;