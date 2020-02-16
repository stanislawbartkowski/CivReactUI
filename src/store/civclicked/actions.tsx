export const CLICK_CIV: string = "CLICK_CIV";

export const civClicked = (civ : string) => {
    return {
        type: CLICK_CIV,
        civ : civ
    }
}

export const civNone = () => {
    return {
        type: CLICK_CIV,
        civ : null
    }
}
