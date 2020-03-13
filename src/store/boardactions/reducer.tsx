import { Reducer } from 'redux';

import * as actions from './actions';

const startAction = {
    current: actions.NEW_BOARD,
    board : null,
    token : null
};

const reducer: Reducer = (state = startAction, action) => {

    switch (action.type) {
        case actions.NEW_BOARD: 
            return { current: action.type, board : action.board, token : action.token };

        default: return state;
    }
};

export default reducer;