export const EMPTYCOMMAND: string = "EMPTY_COMMAND";
export const PLAYCOMMAND: string = "PLAYER_COMMAND"

import * as I from '../../js/I'

export type PlayerCommand = {
    command : string,
    square : I.Pos
}

export const commandNone  = () : PlayerCommand  => {
    return {
        command : "",
        square : {
            row: -1,
            col: -1,
        }
    }
}

export const command = (command: string) : PlayerCommand => {
    return {
        command : command,
        square : {
            row: -1,
            col: -1,
        }
    }
}
