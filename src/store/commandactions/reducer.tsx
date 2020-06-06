import { Reducer } from 'redux';
import * as actions from './actions';

const reducer: Reducer = (state = actions.commandNone, action) => {

    switch (action.type) {

        case actions.commandNone: return {
            current: action.type,
            civ: action.civ,
            open : action.open,
            params : action.params
        }

        default: return state;
    }
};

export default reducer;