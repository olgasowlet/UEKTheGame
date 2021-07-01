import React from 'react';
import { getAllQuests } from '../../../hooks/fetchQuests';
import { MainContainer } from "./DashboardContainer.style";

const DashboardContainer = ({ title }) => {
    return (
        <MainContainer>
            {title}
        </MainContainer>
    )
};

export default DashboardContainer;