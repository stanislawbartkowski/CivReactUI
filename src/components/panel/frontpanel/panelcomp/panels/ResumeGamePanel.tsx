import React, { FunctionComponent } from 'react';
import { useSelector, useDispatch} from "react-redux";

import Grid from '@material-ui/core/Grid';

import ResumeGame from '../../../../objects/resumegame/ResumeGame';

import * as C from '../../../../../js/C'
import * as actions from '../../../../../store/resumegamepanel/actions'
import {toplabelName} from '../../../../../store/toplabel/actions';

const ResumeGamePanel: FunctionComponent = () => {
    const current: string = useSelector((state: any) => state.resumepanel.current);
    const games: Array<any> = useSelector((state: any) => state.resumepanel.data);
    C.trace('ResumeGamePanel', current);
    const dispatch = useDispatch();
    dispatch(toplabelName("resumegame"));

    var content: Object = 'Waiting';
    if (current === actions.RESUMEGAMES_READY) {
        content = games.map(game =>
            <span key={game.gameid}>
                <ResumeGame data={game}></ResumeGame>
            </span>
        )
    };
    return (
        <Grid container>
            {content}
        </Grid>
    );
}

export default ResumeGamePanel;
