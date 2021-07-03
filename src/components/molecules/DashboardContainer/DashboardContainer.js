import React, { useState, useEffect } from 'react';
import { getAllQuests } from '../../../hooks/fetchQuests';
import { MainContainer } from "./DashboardContainer.style";
import axios from 'axios';

const DashboardContainer = ({ title }) => {
    const [quests, setQuests] = useState([]);

    useEffect(() => {
        axios.get('/quests')
            .then(res => console.log(res))
    }, [])

    return (
        <MainContainer>
            {title}
        </MainContainer>
    )
};

export default DashboardContainer;