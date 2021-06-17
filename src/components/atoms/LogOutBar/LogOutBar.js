import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Nav, Button } from "./LogOutBar.style";
import { removeToken } from "../../../hooks/authorization/authSlice";

export default () => {

    const dispatch = useDispatch();

    return (
        <Nav>
            <Button onClick={() => dispatch(removeToken())}><FontAwesomeIcon icon={faSignOutAlt}/></Button>
        </Nav>
    );
};