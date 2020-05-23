import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';


import ResponsiveDrawer from '../../../UI/ResponsiveDrawer';
import MainPanel from './panelcomp/MainPanel';
import CivLeftMenu from './panelcomp/CivLeftMenu';
import TopLabel from './panelcomp/TopLabel';
import BoardGame from '../boardgame/BoardGame';

const FrontPanel: React.FC = () => {

  const main: ReactElement = <MainPanel />
  const leftmenu: ReactElement = <CivLeftMenu />
  const toplabel: ReactElement = <TopLabel />

  return (
    <Switch>
      <Route exact path='/boardgame'> <BoardGame /> </Route>
      <Route path="/"> <ResponsiveDrawer main={main} leftmenu={leftmenu} toplabel={toplabel} /> </Route>
    </Switch>
  );
}

export default FrontPanel;