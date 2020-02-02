import React from 'react';
import './App.css';
import ResponsiveDrawer from './UI/ResponsiveDrawer';
import TestContent from './components/panel/TestContent'
import MainPanel from './components/panel/MainPanel';
import CivLeftMenu from './components/panel/CivLeftMenu';
import * as civdataactions from './js/restapi';
import C from './js/C'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import * as actions from './store/actions'
import { useSelector } from "react-redux";

import axios from './axios';

const App: React.FC = () => {

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

export default App;
