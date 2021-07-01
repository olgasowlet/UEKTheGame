import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { toQuests, toRanking, toRewards, toSettings, toUserProfile } from "../../../helpers/routes";
import SideBar from "../../molecules/SideBar/SideBar";
import LogOutBar from "../../atoms/LogOutBar/LogOutBar";
import DashboardContainer from "../../molecules/DashboardContainer/DashboardContainer";

export const UserPanel = () => {
    return (
        <>
            <HashRouter>
                <LogOutBar />
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

