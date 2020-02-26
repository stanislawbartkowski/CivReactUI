import { Reducer } from 'redux';

import * as actions from './actions';

const startAction = {
    current: actions.NEW_BOARD,
    board : null
};

const reducer: Reducer = (state = startAction, action) => {

    switch (action.type) {
        case actions.NEW_BOARD: 
            return { current: action.type, board : action.board };

        default: return state;
    }
};

export default reducer;