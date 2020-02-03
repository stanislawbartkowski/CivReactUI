import React, { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import { borders } from '@material-ui/system';

import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import * as I from '../../../js/I';
import CivilizationName from './civilizationname/CivilizationName'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        CivBox: {
//            bgcolor: 'background.paper',
            bgcolor: 'red',
            m: 1,
            style: { width: '5rem', height: '5rem' },
            borderColor: 'text.primary',
        },
    })
);

const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    style: { width: '5rem', height: '5rem' },
    borderColor: 'text.primary',
  };


const Civilization: FunctionComponent<I.TCivilizationProps> = ({ data }) => {
    const classes = useStyles();
    return (
        <Box component="span" border={1} borderRadius={16} borderColor="grey.500" {...defaultProps} >
            <CivilizationName data={data.civ} />
            {data.civ}
        </Box>
    );
}

export default Civilization;
