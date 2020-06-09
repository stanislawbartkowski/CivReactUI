import axios from '../../axios';

import * as C from '../../js/C'

export const ITEMIZE_COMMAND: string = "ITEMIZE_COMMAND";
export const ITEMIZE_NONE: string = "ITEMIZE_NONE";

const itemized_command = (command: string, itemized: any) => {
    return {
        type: ITEMIZE_COMMAND,
        command: command,
        itemized: itemized
    }
}

export const itemizedReset = () => {
    return {
        type: ITEMIZE_NONE
    }
}

export const itemizedCommand = (command: string) => {

    return (dispatch: any) => {
        axios.get('/itemize?command=' + command, C.getAuthHeader()).then(res => {
            C.log("Itemize command " + command)
            dispatch(itemized_command(command, res.data))
        });
    }
}
