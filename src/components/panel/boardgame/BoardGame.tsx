import React from 'react';
import { Route, Switch } from 'react-router-dom';


import ResponsiveDrawer from '../../../UI/ResponsiveDrawer';
import PlayerControl from './playercontrol/PlayerControl';

import MainBoard from './mainboard/MainBoard';
import TopStatus from './topstatus/TopStatus';

const BoardGame: React.FC = () => {

  return (
    <ResponsiveDrawer main={MainBoard} leftmenu={PlayerControl} toplabel = {TopStatus} /> 
    );
}

export default BoardGame;