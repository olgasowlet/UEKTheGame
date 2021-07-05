import { QuestsContainer, ViewDetails, StyledNavQuests } from "./QuestsList.style"
import { SingleQuest } from "../../molecules/SingleQuest/SingleQuest"
import { quests } from "../../../mocks/data"
import React, { useState, useEffect } from 'react';


export const QuestsList = () => {

const [renderComponent, setRenderComponent] = useState(false)  

function questIsClicked(e) {
      e.preventDefault();
      const currentQuest = e.currentTarget.id
      const setQuestView = renderComponent
      setRenderComponent(true)
};

    return (
      <QuestsContainer>
      
            {quests.map(( questsList ) =>
                  <>
                  
                        <SingleQuest id={questsList.id} questsList ={ questsList } />
                        <ViewDetails id={questsList.id} onClick = {questIsClicked} />
                  </>
               )}
               
      </QuestsContainer>

    );
};
