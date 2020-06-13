import React from 'react';

import Portal from '@material-ui/core/Portal';
import NewGameCiv from '../panel/frontpanel/panelcomp/panels/newgameciv/NewGameCiv';
import BuyUnitPopUp from '../../components/objects/board/command/popup/BuyUnitPopUp'


const PopUps: React.FC = () =>
    <Portal>
        <NewGameCiv />
        <BuyUnitPopUp />
    </Portal>

export default PopUps;