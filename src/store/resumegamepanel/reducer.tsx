import * as panelActions from './actions';
import { Reducer } from 'redux';

const startPanel = {
    current: panelActions.RESUMEGAMES_WAITING,
    data: {},
};

const reducer: Reducer = (state = startPanel, action) => {

    switch (action.type) {

        case panelActions.RESUMEGAMES_READY: return {
            current: action.type,
            data: action.data,
        }

        case panelActions.RESUMEGAMES_WAITING: return {
            current: action.type
        }

        default: return state;
    }
};

export default reducer;