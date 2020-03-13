import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import NewGamePanel from './panels/NewGamePanel';
import ResumeGamePanel from './panels/ResumeGamePanel';
import JoinGamePanel from './panels/JoinGamePanel';

import * as C from '../../../../js/C'
import * as civdataactions from '../../../../js/restapi'
import axios from '../../../../axios'

const MainPanel: FunctionComponent = () => {

    if (C.isToken()) {
        // dispose token
        axios.get('/civdata?what=' + civdataactions.UNREGISTERTOKEN, { 'headers': { 'Authorization': 'Token ' + C.getToken() } });
        C.clearToken();
    }
    return (
        <Switch>
            <Route exact path='/resumegame' component={ResumeGamePanel} />
            <Route exact path='/joingame' component={JoinGamePanel} />
            <Route exact path='/' component={NewGamePanel} />
        </Switch>
    );
}

export default MainPanel;
