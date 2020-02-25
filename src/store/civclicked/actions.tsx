export const CLICK_CIV: string = "CLICK_CIV";

export const civClicked = (civ : string) => {
    return {
        type: CLICK_CIV,
        civ : civ,
        open : true
    }
}

export const civNone = () => {
    return {
        type: CLICK_CIV,
        civ : null,
        open : false
    }
}
