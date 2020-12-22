import React from "react";
import { toSignIn, toSignUp } from "../routes";
import { StyledNavedLink, Li, Ul } from "./style";

export default () => {
    return (
        <nav>
            <Ul>
                <Li><StyledNavedLink to={toSignIn()}>Zaloguj się</StyledNavedLink></Li>
                <Li><StyledNavedLink to={toSignUp()}>Zarejestruj się</StyledNavedLink></Li>
            </Ul>
        </nav>
    );
};