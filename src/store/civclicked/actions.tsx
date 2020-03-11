export const CLICK_CIV: string = "CLICK_CIV";

export type StartGamePars = {
    titlestart : string,
    doyouwanttostart : string,
    action : () => void
}

export const civClicked = (civ : string, params: StartGamePars) => {
    return {
        type: CLICK_CIV,
        civ : civ,
        open : true,
        params : params
    }
}

export const civNone = () => {
    return {
        type: CLICK_CIV,
        civ : null,
        open : false,
        params : null
    }
}
