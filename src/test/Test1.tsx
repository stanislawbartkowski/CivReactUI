import React from 'react';
import Civilization from '../components/objects/civilization/Civilization'


const Test1: React.FC = () => {

    const civ : Object = {
        civ: "America",
        tech: "Currency",
        gover: "Despotism",
        desc: "The Americans start with a free, random great person. When Americans spend trade for production, they receive 2 production points instead of 1.",
        ni: null
    };

    return (
        <div>
            <Civilization data={civ} />

        </div>
    );
}

export default Test1;
