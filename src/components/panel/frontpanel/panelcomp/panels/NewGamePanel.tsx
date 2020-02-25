import React, { FunctionComponent } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Grid from '@material-ui/core/Grid';

import * as C from '../../../../../js/C'

import Civilization from '../../../../objects/civilization/Civilization'
import { toplabelName } from '../../../../../store/toplabel/actions';
import { civNone } from '../../../../../store/civclicked/actions';

const NewGamePanel: FunctionComponent = () => {
    const current = useSelector((state: any) => state.newpanel.current);
    C.trace('NewGamePanel', current);
    const dispatch = useDispatch();
    dispatch(toplabelName("newgame"));
    dispatch(civNone());
    var content: Object = 'Waiting';
    if (C.readyGR()) {
        const civs: Array<any> = C.GRCivs()
        content = civs.map(civ =>
            <span key={civ.civ}>
                <Civilization data={civ}></Civilization>
            </span>
        )
    };
    return <Grid container>
        {content}
    </Grid>;
}

export default NewGamePanel;
