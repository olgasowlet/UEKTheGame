import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const StyledNavedLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    text-decoration: none;
    color: ${(({theme}) => theme.color.white)};
    padding: 15px;
    border: 2px solid ${(({theme}) => theme.color.green)};
    border-radius: 45px;

    &:hover {
        border: 2px solid ${(({theme}) => theme.color.white)};
    }

    &.${activeClassName} {
        background-color: ${(({theme}) => theme.color.white)};
        color: ${(({theme}) => theme.color.green)};
    }
`;

export const Li = styled.li`
    list-style: none;
    font-size: 24px;
    font-weight: bold;
    margin: 20px;
`;

export const Ul = styled.ul`
    background-color: ${(({theme}) => theme.color.green)};
    margin: 0;
    display: flex;
    justify-content: flex-end;
`;

