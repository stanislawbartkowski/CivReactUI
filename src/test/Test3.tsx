import React from 'react';
import Grid from '@material-ui/core/Grid';
import ResumeGame from '../components/objects/resumegame/ResumeGame'

const Test3: React.FC = () => {

    const games = [
        {"gameid":15,"civ":["China","Rome"],"createtime":1578832530775,"accesstime":1578833170421,"phase":"StartOfTurn","round":0,"endofgame":null},

        {"gameid":14,"civ":["China","Rome"],"createtime":1578832423848,"accesstime":1578832519249,"phase":"StartOfTurn","round":0,"endofgame":null}
    
        ];

    return (
        <Grid container>
            <ResumeGame data={games[0]} /> 
        </Grid>
    );
}

export default Test3;
