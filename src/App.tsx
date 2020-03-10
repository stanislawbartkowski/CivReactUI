import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import FrontPanel from './components/panel/frontpanel/FrontPanel';
import PopUps from './components/panel/frontpanel/PopUps';

import * as actions from './store//newgamepanel/actions'
import * as C from './js/C'
import {refresh_board } from './store/boardactions/actions'


//import Test1 from './test/Test1'
//import Test2 from './test/Test2'
//import Test3 from './test/Test3'
//import Test4 from './test/Test4'
import Test5 from './test/Test5'

import { createMuiTheme } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles';
import { useConfirm } from 'material-ui-confirm';


const theme: Theme = createMuiTheme();

const App: React.FC = () => {

  const dispatch = useDispatch();

  dispatch(actions.resourceReady());

  const refreshboard = () => {
    if (C.isToken()) {
      dispatch(refresh_board(C.getToken()));
    }
  }

  setInterval(refreshboard, 5000);

  return (
    <BrowserRouter>
      <div className="App">
        <FrontPanel />
      </div>
      <PopUps />
    </BrowserRouter>
  );
}

const AppTest: React.FC = () => {

  const confirm = useConfirm();
  C.setConfirm(confirm);

  return <Test5 />
}

export default App;
