import { Reducer } from 'redux';

import * as actions from './actions';

const startAction = {
    current: actions.NORMAL_ACTION
};

const reducer: Reducer = (state = startAction, action) => {

    switch (action.type) {
        case actions.BLOCK_ACTION:
        case actions.NORMAL_ACTION:
            return { current: action.type };

        default: return state;
    }
};

export default reducer;