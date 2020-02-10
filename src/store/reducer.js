import * as panelActions from './actions';

const startPanel = {
    current: panelActions.RESOURCE_WAITING,
    data: {},
    label : "newgame"
};

const reducer = (state = startPanel, action) => {

    switch (action.type) {
        case panelActions.RESOURCE_READY: return { current: action.type, label: "newgame" };
        case panelActions.RESUMEGAMES_WAITING: return { current: action.type, label : "resumegame" };

        case panelActions.RESUMEGAMES_READY: return {            
            current: action.type,
            data: action.data,
            label : "resumegame"
        }

        default: return state;
    }
};

export default reducer;