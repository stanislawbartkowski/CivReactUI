import axios from '../../axios';

import * as civdataactions from '../../js/restapi';
import * as C from '../../js/C'

export const NEW_BOARD: string = "NEW_BOARD"

const game_board = (board: object) => {
    return {
        type: NEW_BOARD,
        board: board,
    }
}

export const refresh_board = (token: String) => {
    return (dispatch: any) => {
        axios.get('/civdata?what=' + civdataactions.GETBOARD, { 'headers': { 'Authorization': 'Token ' + token } }).then(res => {
            C.log("Game board read");
            const board = res.data
        });
    }
}


export const start_board_training = (civ: String) => {
    return (dispatch: any) => {
        dispatch(game_board({ a: "b" }));
    }
}

export const resume_board_game = (id: String, civ: string) => {
    return (dispatch: any) => {
        axios.get('/resumegame?gameid=' + id + "&civ=" + civ).then(res => {
            C.log("Game resumed");
            const token : String = res.data;
            C.log("token=" + token);
            const t : string[] = token.split(",");
            C.setToken(t[0]);
        });
    }
}

