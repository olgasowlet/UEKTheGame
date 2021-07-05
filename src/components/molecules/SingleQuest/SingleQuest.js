import React from "react";

export const SingleQuest = ( {questsList: {name, description, category} }) => {
    return (
        <li>
         <h2>{name}</h2>
            <div>
                <p>{description}</p>
                <p>{category}</p>
                </div>
        </li>
     

    );
};
