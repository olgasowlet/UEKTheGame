import React from "react";
import { StyledNavedLink } from "./style";
import { toUserProfile } from "../routes";

export default () => {
    return (
        <nav>
            <ul>
                <li><StyledNavedLink to={toUserProfile()}>Profil</StyledNavedLink></li>
            </ul>
        </nav>
    );
};