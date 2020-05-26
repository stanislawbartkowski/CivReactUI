import React, { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import civstring from '../../../../localize/locale';
import Paper from '@material-ui/core/Paper';

const CivLogo: FunctionComponent = () => (
    <Paper>
        <Typography variant="h6" noWrap align="center">
            {civstring('civlogo')}
        </Typography>
    </Paper>
)

export default CivLogo;