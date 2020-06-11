import { Reducer } from 'redux';

import * as command from './actions';

const startAction = {
    current: command.ITEMIZE_RESET
};

const reducer: Reducer = (state = startAction, action) => {

    switch (action.type) {
        case command.ITEMIZE_COMMAND: return {
            current: action.type, itemized: action.itemized, command: action.command
        };
        case command.ITEMIZE_RESET: return {
            current: action.type
        };
        case command.NOITEMIZE_COMMAND: return {
            current: action.type,
            command: action.command
        };

        default: return state;
    }
};

export default reducer;