import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import { borders } from '@material-ui/system';


import * as I from '../../../js/I';


const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 0.5,
    style: { width: '3rem', height: '3rem' },
  };

const Square: FunctionComponent<I.TCivilizationProps> = ({ data }) => {

    return (
        <Box component="div" {...defaultProps}>
        </Box>
    );
}

export default Square;
