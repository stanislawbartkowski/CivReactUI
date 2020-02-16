import * as actions from './actions';
import { Reducer } from 'redux';

const startPanel = {
    current: actions.CLICK_CIV,
    civ: null
};

const reducer: Reducer = (state = startPanel, action) => {

    switch (action.type) {

        case actions.CLICK_CIV: return {
            current: action.type,
            civ: action.civ
        }

        default: return state;
    }
};

export default reducer;