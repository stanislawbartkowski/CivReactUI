import axios from '../../axios';

import * as civdataactions from '../../js/restapi';
import * as C from '../../js/C'

export const ITEMIZE_COMMAND: string = "ITEMIZE_COMMAND";
export const ITEMIZE_NONE: string = "ITEMIZE_NONE";

export type ItemizedCommand = {
    type : string,
    command : string,
    itemized : any
}

const itemized_command = (command : string, itemized : any) : ItemizedCommand => {
    return {
        type : ITEMIZE_COMMAND,
        command : command,
        itemized : itemized
    }
}

export const itemizedCommand = (command : string) => {

    return (dispatch: any) => {
        axios.get('/itemize?command='+command,{ 'headers': { 'Authorization': 'Token ' + C.getToken() } }).then(res => {
            C.log("Itemize command " + command)
            dispatch(itemized_command(command,res.data))
        });
    }
}
