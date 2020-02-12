
import { Reducer } from 'redux';

import * as panelActions from './actions';

const startPanel = {
    current: panelActions.RESOURCE_WAITING
};

const reducer: Reducer = (state = startPanel, action) => {

    switch (action.type) {
        case panelActions.RESOURCE_READY: return { current: action.type };

        default: return state;
    }
};

export default reducer;