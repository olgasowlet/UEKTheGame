import React from "react";
import { StyledNavedLink, SideBar, Li, Ul } from "./SideBar.style";
import { toSettings, toUserProfile, toQuests, toRewards, toRanking } from "../../../helpers/routes";

export default () => {

    return (
        <SideBar>
            <Ul>
                <Li><StyledNavedLink to={toUserProfile()}>Profil</StyledNavedLink></Li>
                <Li><StyledNavedLink to={toQuests()}>Questy</StyledNavedLink></Li>
                <Li><StyledNavedLink to={toRewards()}>Nagrody</StyledNavedLink></Li>
                <Li><StyledNavedLink to={toRanking()}>Ranking</StyledNavedLink></Li>
                <Li><StyledNavedLink to={toSettings()}>Ustawienia</StyledNavedLink></Li>
            </Ul>
        </SideBar>
    );
};