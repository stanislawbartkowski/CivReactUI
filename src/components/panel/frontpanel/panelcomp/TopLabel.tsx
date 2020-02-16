import React, { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import { useSelector } from "react-redux";
import * as C from '../../../../js/C'
import civstring from '../../../../localize/locale'

const TopLabel: FunctionComponent = () => {
    const current : string = useSelector((state: any) => state.toplabel.current);
    const label : string = useSelector((state: any) => state.toplabel.label);

    C.trace('TopLabel', current + " " + label);

    return (
        <Typography variant="h6" noWrap>
            <br />
            {civstring(label)}
        <br />
        </Typography>
    )
}


export default TopLabel;