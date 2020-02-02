import React, { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';

import C from '../../../js/C'
import { useSelector } from "react-redux";

const NewGamePanel: FunctionComponent = () => {
    const current = useSelector((state: any) => state.current);
    C.trace('NewGamePanel', current);
    var content = 'NEW GAME PANEL';
    if (! C.readyGR()) content = 'Waiting';
    return (
        <Typography>{ content} </Typography>
    );
}

export default NewGamePanel;
