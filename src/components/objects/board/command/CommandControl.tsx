import React, { FunctionComponent } from 'react';
import { useSelector, ReactReduxContext } from "react-redux";
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from 'react-redux';

import { itemizedCommand, itemizedReset } from '../../../../store/itemizeaction/actions'
import { commandReset } from '../../../../store/commandactions/actions'

import * as I from '../../../../js/I'
import * as C from '../../../../js/C'
import * as iactions from '../../../../store/itemizeaction/actions';
import * as cactions from '../../../../store/commandactions/actions';


const CommandControl: FunctionComponent = () => {

    const dispatch = useDispatch()
    const itemizecurrent = useSelector((state: any) => state.itemize.current);
    const command = useSelector((state: any) => state.itemize.command);
    const itemized = useSelector((state: any) => state.itemize.itemized);

    const clickedcurrent = useSelector((state: any) => state.command.current);
    const clickedP: I.Pos = useSelector((state: any) => state.command.square);

    if (itemizecurrent == iactions.ITEMIZE_COMMAND && clickedcurrent == cactions.SQUARECLICKED) {
        C.log("Clicked:" + command + " square:" + clickedP);
        dispatch(commandReset());
        dispatch(itemizedReset())
        C.executeCommand(command, clickedP, null)
    }

    if (itemizecurrent == iactions.ITEMIZE_NONE) return null;
    return <Paper>{C.commandText(command)}</Paper>
}

export default CommandControl
