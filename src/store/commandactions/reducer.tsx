import { Reducer } from 'redux';
import * as actions from './actions';

const reducer: Reducer = (state = actions.commandReset, action) => {
    switch (action.type) {
        case actions.SQUARECLICKED: return {
            current: action.type,
            square: action.square
        }
        case actions.EMPTYCOMMAND: return {
            current: action.type,
            square: null
        }
        default: return state;
    }
};

export default reducer;