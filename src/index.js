import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider  } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reducerNG from './store/newgamepanel/reducer'
import reducerRG from './store/resumegamepanel/reducer'
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootStore = combineReducers( {
    newpanel : reducerNG,
    resumepanel : reducerRG
})

const store = createStore(rootStore, composeEnhancer(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
