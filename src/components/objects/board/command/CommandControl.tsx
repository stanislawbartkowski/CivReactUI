import React, { FunctionComponent } from 'react';
import { useSelector } from "react-redux";
import Paper from '@material-ui/core/Paper';
import { useDispatch } from 'react-redux';


import * as comm from '../../../../js/comm'

import * as I from '../../../../js/I'
import * as C from '../../../../js/C'
import * as iactions from '../../../../store/itemizeaction/actions';
import * as cactions from '../../../../store/commandactions/actions';
import * as bactions from '../../../../store/blockaction/actions'
import * as pactions from '../../../../store/popupaction/actions'

interface ICommandControl extends I.TCivilizationProps {
    map: Array<any>
}

const CommandControl: FunctionComponent<ICommandControl> = (props) => {

    const game = props.data
    const map = props.map
    const dispatch = useDispatch()
    const itemizecurrent: string = useSelector((state: any) => state.itemize.current);
    const command: string = useSelector((state: any) => state.itemize.command);
    const itemized: Array<any> = useSelector((state: any) => state.itemize.itemized);

    const clickedcurrent = useSelector((state: any) => state.command.current);
    const clickedP: I.Pos = useSelector((state: any) => state.command.square);

    const popupcurrent: string = useSelector((state: any) => state.popup.current)


    if (popupcurrent == pactions.CLOSE_POPUP) {
        dispatch(cactions.commandReset());
        dispatch(iactions.itemizedReset())
        dispatch(pactions.nopopup());
        dispatch(bactions.nonblockaction());
    }
    else
        if (itemizecurrent == iactions.ITEMIZE_COMMAND && C.commandPopUp(command)) {
            dispatch(bactions.blockaction())
            dispatch(pactions.popup(command, itemized, map))
        }
        else
            if ((itemizecurrent == iactions.ITEMIZE_COMMAND && clickedcurrent == cactions.SQUARECLICKED) ||
                (itemizecurrent == iactions.NOITEMIZE_COMMAND)) {
                if (itemizecurrent == iactions.ITEMIZE_COMMAND) C.trace('CommandControl', "Clicked:" + command + " square:" + clickedP);
                else C.trace('CommandControl', "Command:" + command);
                dispatch(cactions.commandReset());
                dispatch(iactions.itemizedReset())
                if (command == comm.ENDOFPHASE) C.executeEndOfPhase(game.phase)
                else C.executeCommand(command, clickedP, itemized)
            }
            else if (itemizecurrent == iactions.ITEMIZE_RESET) {
                dispatch(iactions.itemizedReset())
            }


    if (itemizecurrent == iactions.ITEMIZE_RESET) return null;
    return <Paper>{C.commandText(command)}</Paper>
}

export default CommandControl
