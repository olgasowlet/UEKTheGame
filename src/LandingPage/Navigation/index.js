import React from "react";
import { toSignIn, toSignUp, toLandingPage } from "../routes";
import { StyledNavedLink, Nav, Li, Ul, BackToHome } from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export default () => {
    return (
        <Nav>
            <BackToHome><StyledNavedLink to={toLandingPage()}><FontAwesomeIcon icon={faHome}/></StyledNavedLink></BackToHome>
            <Ul>
                <Li><StyledNavedLink to={toSignIn()}>Zaloguj się</StyledNavedLink></Li>
                <Li><StyledNavedLink to={toSignUp()}>Zarejestruj się</StyledNavedLink></Li>
            </Ul>
        </Nav>
    );
};