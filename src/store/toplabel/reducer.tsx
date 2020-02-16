import * as actions from './actions';
import { Reducer } from 'redux';

const startPanel = {
    current: actions.TOPLABEL_NAME,
    label : "newgame"
};

const reducer: Reducer = (state = startPanel, action) => {

    switch (action.type) {

        case actions.TOPLABEL_NAME: return {
            current: action.type,
            label: action.label
        }

        default: return state;
    }
};

export default reducer;