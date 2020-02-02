import React, { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import C from '../../../js/C'
import * as I from '../../../js/I';
import CivilizationName from './civilizationname/CivilizationName'

const Civilization: FunctionComponent<I.TCivilizationProps> = ({data} ) => {
    return (
            <CivilizationName data={data.civ}>
                JOIN GAME PANEL
                {data.civ}
             </CivilizationName>
    );
}

export default Civilization;
