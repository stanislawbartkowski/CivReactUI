import { Reducer } from 'redux';

import * as actions from './actions';

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
            open : action.open,
            params : action.params
        }

        default: return state;
    }
};

export default reducer;