import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import { borders } from '@material-ui/system';


import * as I from '../../../js/I';


const defaultProps = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 0,
    border: 0.1,
    style: { width: 60, height: 45 },
  };

const Square: FunctionComponent<I.TCivilizationProps> = ({ data }) => {

    return (
        <Box component="div" {...defaultProps}>
            {data}
        </Box>
    );
}

export default Square;
