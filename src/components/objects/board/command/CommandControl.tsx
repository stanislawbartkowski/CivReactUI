import React, { FunctionComponent } from 'react';
import { useSelector } from "react-redux";
import Paper from '@material-ui/core/Paper';
import { useDispatch } from 'react-redux';


import { itemizedReset } from '../../../../store/itemizeaction/actions'
import { commandReset } from '../../../../store/commandactions/actions'
import { popup } from '../../../../store/popupaction/actions'
import * as comm from '../../../../js/comm'

import * as I from '../../../../js/I'
import * as C from '../../../../js/C'
import * as iactions from '../../../../store/itemizeaction/actions';
import * as cactions from '../../../../store/commandactions/actions';


const CommandControl: FunctionComponent<I.TCivilizationProps> = (props) => {

    const game = props.data
    const dispatch = useDispatch()
    const itemizecurrent : string = useSelector((state: any) => state.itemize.current);
    const command : string = useSelector((state: any) => state.itemize.command);
    const itemized : Array<any> = useSelector((state: any) => state.itemize.itemized);

    const clickedcurrent = useSelector((state: any) => state.command.current);
    const clickedP: I.Pos = useSelector((state: any) => state.command.square);

    if (itemizecurrent == iactions.ITEMIZE_COMMAND && C.commandPopUp(command)) {
        dispatch(popup(command, itemized))
    }
    else
        if ((itemizecurrent == iactions.ITEMIZE_COMMAND && clickedcurrent == cactions.SQUARECLICKED) ||
            (itemizecurrent == iactions.NOITEMIZE_COMMAND)) {
            if (itemizecurrent == iactions.ITEMIZE_COMMAND) C.trace('CommandControl', "Clicked:" + command + " square:" + clickedP);
            else C.trace('CommandControl', "Command:" + command);
            dispatch(commandReset());
            dispatch(itemizedReset())
            if (command == comm.ENDOFPHASE) C.executeEndOfPhase(game.phase)
            else C.executeCommand(command, clickedP, itemized)
        }

    if (itemizecurrent == iactions.ITEMIZE_RESET) return null;
    return <Paper>{C.commandText(command)}</Paper>
}

export default CommandControl
