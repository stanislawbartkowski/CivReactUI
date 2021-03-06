import * as I from '../../js/I'

export const EMPTYCOMMAND: string = "EMPTY_COMMAND";
export const SQUARECLICKED: string = "SQUARE_CLICKED"

export const commandReset = () => {
    return {
        type: EMPTYCOMMAND,
        square: {
            row: -1,
            col: -1,
        }
    }
}

export const commandClicked = (square: I.Pos) => {
    return {
        type: SQUARECLICKED,
        square: { ...square },
    }
}
