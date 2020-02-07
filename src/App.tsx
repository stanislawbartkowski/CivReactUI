import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import * as actions from './store/actions'

import axios from './axios';

import ResponsiveDrawer from './UI/ResponsiveDrawer';
import MainPanel from './components/panel/MainPanel';
import CivLeftMenu from './components/panel/CivLeftMenu';
import * as civdataactions from './js/restapi';
import * as C from './js/C'

import Test1 from './test/Test1'
import Test2 from './test/Test2'

import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';


const theme: Theme = createMuiTheme()

const App: React.FC = () => {

  const dispatch = useDispatch();

  // read initial resource
  axios.get('/civdata?what=' + civdataactions.LISTOFRES).then(res => {
    C.log("Rest received")
    C.setGR(res.data);
    dispatch({ type: actions.RESOURCE_READY });
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <ResponsiveDrawer main={MainPanel} leftmenu={CivLeftMenu} />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const AppTest: React.FC = () => {
  return <ThemeProvider theme={theme}>
    <Test1 />
  </ThemeProvider>
}

export default App;
