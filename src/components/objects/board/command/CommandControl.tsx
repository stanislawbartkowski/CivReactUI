import React, { FunctionComponent } from 'react';
import { useSelector, ReactReduxContext } from "react-redux";
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from 'react-redux';

import { itemizedReset } from '../../../../store/itemizeaction/actions'
import { commandReset } from '../../../../store/commandactions/actions'

import * as I from '../../../../js/I'
import * as C from '../../../../js/C'
import * as iactions from '../../../../store/itemizeaction/actions';
import * as cactions from '../../../../store/commandactions/actions';


const CommandControl: FunctionComponent<I.TCivilizationProps> = (props) => {

    const game = props.data
    const dispatch = useDispatch()
    const itemizecurrent = useSelector((state: any) => state.itemize.current);
    const command = useSelector((state: any) => state.itemize.command);
    const itemized = useSelector((state: any) => state.itemize.itemized);

    const clickedcurrent = useSelector((state: any) => state.command.current);
    const clickedP: I.Pos = useSelector((state: any) => state.command.square);

    if ((itemizecurrent == iactions.ITEMIZE_COMMAND && clickedcurrent == cactions.SQUARECLICKED) ||
        (itemizecurrent == iactions.NOITEMIZE_COMMAND)) {
        if (itemizecurrent == iactions.ITEMIZE_COMMAND) C.trace('CommandControl', "Clicked:" + command + " square:" + clickedP);
        else C.trace('CommandControl', "Command:" + command);
        dispatch(commandReset());
        dispatch(itemizedReset())
        if (command == "ENDOFPHASE") C.executeEndOfPhase(game.phase)
        else C.executeCommand(command, clickedP, itemized)
    }

    if (itemizecurrent == iactions.ITEMIZE_RESET) return null;
    return <Paper>{C.commandText(command)}</Paper>
}

export default CommandControl
