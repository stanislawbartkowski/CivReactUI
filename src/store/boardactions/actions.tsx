export const NEW_BOARD : string = "NEW_BOARD"

export const new_board = (board: object) => {
    return {
        type: NEW_BOARD,
        board: board,
    }
}


export const start_board_training = (civ : String) => {
    return (dispatch: any) => {
        dispatch(new_board({ a : "b"}));
    }
}

