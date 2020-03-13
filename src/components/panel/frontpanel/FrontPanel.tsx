import React from 'react';
import { Route, Switch } from 'react-router-dom';


import ResponsiveDrawer from '../../../UI/ResponsiveDrawer';
import MainPanel from './panelcomp/MainPanel';
import CivLeftMenu from './panelcomp/CivLeftMenu';
import TopLabel from './panelcomp/TopLabel';
import BoardGame from '../boardgame/BoardGame';

const FrontPanel: React.FC = () => {

  return (
    <Switch>
      <Route exact path='/boardgame'> <BoardGame/> </Route>
      <Route exact path="/"> <ResponsiveDrawer main={MainPanel} leftmenu={CivLeftMenu} toplabel = {TopLabel} /> </Route>
    </Switch>
  );
}

export default FrontPanel;