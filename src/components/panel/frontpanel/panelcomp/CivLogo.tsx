import React, { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import civstring from '../../../../localize/locale';

const CivLogo : FunctionComponent = ()  => (
    <Typography variant="h6" noWrap>
        <br/>
        {civstring('civlogo')}
        <br/>
    </Typography>
)

export default CivLogo;