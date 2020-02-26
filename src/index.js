import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ConfirmProvider } from 'material-ui-confirm';

import reducerNG from './store/newgamepanel/reducer'
import reducerRG from './store/resumegamepanel/reducer'
import reducerTL from './store/toplabel/reducer'
import reducerCV from './store/civclicked/reducer'
import reducerBO from './store/boardactions/reducer'

const theme = createMuiTheme();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootStore = combineReducers({
    newpanel: reducerNG,
    resumepanel: reducerRG,
    toplabel: reducerTL,
    clickciv : reducerCV,
    gameboard : reducerBO
})

const store = createStore(rootStore, composeEnhancer(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <ConfirmProvider>
                <App />
            </ConfirmProvider>
        </ThemeProvider>
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
