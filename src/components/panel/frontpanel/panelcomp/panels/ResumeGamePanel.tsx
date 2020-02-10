import React, { FunctionComponent } from 'react';
import { useSelector } from "react-redux";
import Grid from '@material-ui/core/Grid';

import ResumeGame from '../../../../objects/resumegame/ResumeGame';

import * as C from '../../../../../js/C'
import * as actions from '../../../../../store/actions'

const ResumeGamePanel: FunctionComponent = () => {
    const current: string = useSelector((state: any) => state.current);
    const games: Array<any> = useSelector((state: any) => state.data);
    C.trace('ResumeGamePanel', current);

    var content: Object = 'Waiting';
    if (current == actions.RESUMEGAMES_READY) {
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
