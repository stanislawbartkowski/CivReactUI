import React from 'react';
import Civilization from '../components/objects/civilization/Civilization'
import Grid from '@material-ui/core/Grid';

const Test1: React.FC = () => {

    const civ : Object = {
        civ: "America",
        tech: "Currency",
        gover: "Despotism",
        desc: "The Americans start with a free, random great person. When Americans spend trade for production, they receive 2 production points instead of 1.",
        ni: null
    };

    return (
        <Grid container>
            <Civilization data={civ} /> 
            <Civilization data={civ} />
            <Civilization data={civ} /> 
            <Civilization data={civ} />
        </Grid>
    );
}

export default Test1;
