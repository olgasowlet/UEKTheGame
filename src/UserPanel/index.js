import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { toQuests, toRanking, toRewards, toSettings, toUserProfile } from "./routes";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import DashboardContainer from "./DashboardContainer";

const UserPanel = () => {
    return (
        <>
            <HashRouter>
                <TopBar />
                <SideBar />
                <Switch>
                    <Route path={toUserProfile()}>
                        <DashboardContainer title="Profil" />
                    </Route>
                    <Route path={toQuests()}>
                        <DashboardContainer title="Questy" />
                    </Route>
                    <Route path={toRewards()}>
                        <DashboardContainer title="Nagrody" />
                    </Route>
                    <Route path={toRanking()}>
                        <DashboardContainer title="Ranking" />
                    </Route>
                    <Route path={toSettings()}>
                        <DashboardContainer title="Ustawienia" />
                    </Route>
                </Switch>
            </HashRouter>
        </>

    );
};

export default UserPanel;
