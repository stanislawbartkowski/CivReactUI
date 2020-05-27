import React from 'react';

import Portal from '@material-ui/core/Portal';
import NewGameCiv from '../panel/frontpanel/panelcomp/panels/newgameciv/NewGameCiv';


const PopUps: React.FC = () => 
    <Portal>
        <NewGameCiv/>
    </Portal>

export default PopUps;