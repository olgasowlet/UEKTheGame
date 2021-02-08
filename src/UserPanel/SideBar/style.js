import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const StyledNavedLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    text-decoration: none;
    color: ${(({ theme }) => theme.color.green)};
    padding: 15px;

    &.${activeClassName} {
        font-weight: bold;
    }
`;

export const SideBar = styled.nav`
    background-color: ${(({ theme }) => theme.color.white)};
    height: calc(100% - 64px);
    width: 256px;
    left: 0;
    right: auto;
    top: 64px;
    position: fixed;
    z-index: 2;
    margin: 0;
    padding: 0;
    border-right: 1px solid rgba(0, 0, 0, 0.12); 
    box-shadow: 0 0 10px ${(({ theme }) => theme.color.outerspace)};
`;

export const Ul = styled.ul`
    margin: 0;
    width: 100%;
    padding-left: 0;
`;

export const Li = styled.li`
    list-style: none;
    font-size: 20px;
    margin: 30px 15px;

    &:hover {
        opacity: 0.7;
    }
`;