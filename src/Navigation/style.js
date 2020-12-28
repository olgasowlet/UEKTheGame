import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const Nav = styled.nav`
    display: flex;
    background-color: ${(({ theme }) => theme.color.green)};
    align-items: center;
`;

export const StyledNavedLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    text-decoration: none;
    color: ${(({ theme }) => theme.color.white)};
    padding: 15px;
    border-radius: 45px;

    &.${activeClassName} {
        background-color: ${(({ theme }) => theme.color.white)};
        color: ${(({ theme }) => theme.color.green)};
        opacity: 0.8;
    }
`;

export const Ul = styled.ul`
    margin: 0;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-left: 0;
`;

export const Li = styled.li`
    list-style: none;
    font-size: 24px;
    font-weight: bold;
    margin: 20px;
    transition: transform 1s;

    &:hover {
        transform: scale(1.1);
    }
`;

export const BackToHome = styled.span`
    margin-left: 20px;
    transition: transform 1s;

    &:hover {
        transform: scale(1.1);
    }
`;

