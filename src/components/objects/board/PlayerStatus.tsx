import React, { FunctionComponent } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


import * as I from '../../../js/I'
import * as C from '../../../js/C'
import PlayerInfo from './playercontrols/PlayerInfo'

const PlayerStatus: FunctionComponent<I.TCivilizationProps> = (props) => {

    const you = props.data;

    return <Grid container>
        
        <PlayerInfo label="trade" info={you.trade}></PlayerInfo>
        <PlayerInfo label="citylimit" info={you.citylimit}></PlayerInfo>
        <PlayerInfo label="armieslimit" info={you.armieslimit}></PlayerInfo>
        <PlayerInfo label="scoutslimit" info={you.scoutslimit}></PlayerInfo>
        <PlayerInfo label="tradeforprod" info={you.tradeforprod}></PlayerInfo>
        <PlayerInfo label="handsize" info={you.handsize}></PlayerInfo>
        <PlayerInfo label="travelspeed" info={you.travelspeed}></PlayerInfo>
        <PlayerInfo label="stacklimit" info={you.stacklimit}></PlayerInfo>
        <PlayerInfo label="combatbonus" info={you.combatbonus}></PlayerInfo>
        
    </Grid>

}

export default PlayerStatus