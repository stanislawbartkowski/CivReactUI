import React from 'react';

import ResponsiveDrawer from '../../../UI/ResponsiveDrawer';
import MainPanel from './panelcomp/MainPanel';
import CivLeftMenu from './panelcomp/CivLeftMenu';
import TopLabel from './panelcomp/TopLabel';

const FrontPanel: React.FC = () => {

  return (
          <ResponsiveDrawer main={MainPanel} leftmenu={CivLeftMenu} toplabel = {TopLabel} />
  );
}

export default FrontPanel;