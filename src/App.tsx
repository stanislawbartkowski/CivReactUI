import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import FrontPanel from './components/panel/frontpanel/FrontPanel';

import * as actions from './store//newgamepanel/actions'


//import Test1 from './test/Test1'
//import Test2 from './test/Test2'
//import Test3 from './test/Test3'

import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles';

const theme: Theme = createMuiTheme();

const App: React.FC = () => {

  const dispatch = useDispatch();

  // read initial resource
  //axios.get('/civdata?what=' + civdataactions.LISTOFRES).then(res => {
  //  C.log("Rest received")
  //  C.setGR(res.data);
  //  dispatch(actions.resourceReady());
  //});

  dispatch(actions.resourceReady());

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <FrontPanel />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

//const TestApp: React.FC = () => {
//  return <ThemeProvider theme={theme}>
//    <Test3 />
//  </ThemeProvider>
//}

export default App;
