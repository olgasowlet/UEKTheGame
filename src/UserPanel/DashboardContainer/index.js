import React from 'react';
import { getAllQuests } from '../Quests/fetchQuests';
import { MainContainer } from "./style";

const DashboardContainer = ({ title }) => {
    return (
        <MainContainer>
            {title}
        </MainContainer>
    )
};

export default DashboardContainer;