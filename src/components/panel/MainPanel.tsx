import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import NewGamePanel from './panels/NewGamePanel';
import ResumeGamePanel from './panels/ResumeGamePanel';
import JoinGamePanel from './panels/JoinGamePanel';


const MainPanel: FunctionComponent = (props) => {
    return (
        <Switch>
            <Route path='/resumegame' component={ResumeGamePanel} />
            <Route path='/joingame' component={JoinGamePanel} />
            <Route path='/' component={NewGamePanel} />
        </Switch>
    );
}

export default MainPanel;
