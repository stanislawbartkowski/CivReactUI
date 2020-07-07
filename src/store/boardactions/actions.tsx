import axios from '../../axios';

import * as civdataactions from '../../js/restapi';
import * as C from '../../js/C'

export const NEW_BOARD: string = "NEW_BOARD"

const game_board = (board: object | null, token: string | null) => {
    return {
        type: NEW_BOARD,
        board: board,
        token: token
    }
}

export const refresh_board = (token: string) => {
    return (dispatch: any) => {
        axios.get('/civdata?what=' + civdataactions.GETBOARD, C.getAuthHeader()).then(res => {
            C.log("Game board read");
            const board = res.data
            // the empty string means that board has not changed since the previous call
            if (board != "")
                dispatch(game_board(board.board, token));
        });
    }
}

function kickoffgame(res: any) {
    const token: String = res.data;
    C.log("token=" + token);
    const t: string[] = token.split(",");
    C.setToken(t[0]);
}


export const start_board_training = (civ: String) => {
    return (dispatch: any) => {
        axios.get('/civdata?what=' + civdataactions.REGISTEROWNER + "&param=" + civ).then(res => {
            C.log("Game resumed");
            kickoffgame(res)
        });
    }
}

export const resume_board_training = (gameid: number, civ: string,) => {
    return (dispatch: any) => {
        axios.get('/resumegame?gameid=' + gameid + "&civ=" + civ).then(res => {
            C.log("Game resumed");
            kickoffgame(res)
        });
    }
}
