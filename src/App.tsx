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


const AppMain: React.FC = () => {

  const dispatch = useDispatch();

  // read initial resource
  axios.get('/civdata?what=' + civdataactions.LISTOFRES).then(res => {
    C.log("Rest received")
    C.setGR(res.data);
    dispatch({ type : actions.RESOURCE_READY});
  });
  
  return (
    <BrowserRouter>
      <div className="App">
        <ResponsiveDrawer main={MainPanel} leftmenu={CivLeftMenu} />
      </div>
    </BrowserRouter>
  );
}

const App: React.FC = () => {
  return <div>
    <Test1 />
  </div>
}

export default App;
