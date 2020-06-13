import * as C from '../../js/C'

export const NO_POPUP: string = "NO_POPUP"
export const TRIGGER_POPUP: string = "TRIGGER_POPUP"

export const nopopup = () => {
    return {
        type: NO_POPUP
    }
}

export const popup = (command : string, itemized : Array<any>) => {
    return {
        type : TRIGGER_POPUP,
        command : command,
        itemized : itemized
    }
}
