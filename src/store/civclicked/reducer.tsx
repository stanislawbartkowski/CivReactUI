import * as actions from './actions';
import { Reducer } from 'redux';

const startPanel = {
    current: actions.CLICK_CIV,
    civ: null,
    open : false
};

const reducer: Reducer = (state = startPanel, action) => {

    switch (action.type) {

        case actions.CLICK_CIV: return {
            current: action.type,
            civ: action.civ,
            open : action.open
        }

        default: return state;
    }
};

export default reducer;