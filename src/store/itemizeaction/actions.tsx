import axios from '../../axios';

import * as C from '../../js/C'

export const ITEMIZE_COMMAND: string = "ITEMIZE_COMMAND";
export const ITEMIZE_RESET: string = "ITEMIZE_RESET";
export const NOITEMIZE_COMMAND: string = "NOITEMIZE_COMMAND"

const itemized_command = (command: string, itemized: any) => {
    return {
        type: ITEMIZE_COMMAND,
        command: command,
        itemized: itemized
    }
}

export const itemizedReset = () => {
    return {
        type: ITEMIZE_RESET
    }
}

export const noitemizeCommand = (command: string) => {
    return {
        type: NOITEMIZE_COMMAND,
        command: command
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
