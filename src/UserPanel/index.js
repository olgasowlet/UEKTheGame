import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { toUserProfile } from "./routes";
import Navigation from "./Navigation";
import UserProfile from "./UserProfile";

const UserPanel = () => {
    return (
        <HashRouter>
            <Navigation />
            <Switch>
                <Route path={toUserProfile()}>
                    <UserProfile />
                </Route>
            </Switch>
        </HashRouter>
    );
};

export default UserPanel;
