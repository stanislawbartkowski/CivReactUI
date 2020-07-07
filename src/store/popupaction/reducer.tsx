import { Reducer } from 'redux';

import * as actions from './actions';

const startAction = {
    current: actions.NO_POPUP
};

const reducer: Reducer = (state = startAction, action) => {

    switch (action.type) {
        case actions.NO_POPUP:
        case actions.CLOSE_POPUP:
            return { current: action.type };
        case actions.TRIGGER_POPUP:
            return { current: action.type, command: action.command, itemized: action.itemized, map: action.map };

        default: return state;
    }
};

export default reducer;