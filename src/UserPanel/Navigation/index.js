import React from "react";
import { StyledNavedLink, Nav } from "./style";
import { toUserProfile } from "../routes";
import { useDispatch } from "react-redux";
import { removeToken } from "../../features/authorization/authSlice";

export default () => {

    const dispatch = useDispatch();

    return (
        <Nav>
            <ul>
                <li><StyledNavedLink to={toUserProfile()}>Profil</StyledNavedLink></li>
            </ul>
            <button onClick={() => dispatch(removeToken())}>Wyloguj się</button>
        </Nav>
    );
};