import React, { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';

import * as I from '../../../../js/I';

const propCityIcon = {
    style: { fontSize: 12 },
}

const CityProd: FunctionComponent<I.ITradeProd> = (props) => {
    const num = props.num
    const TradeProd: FunctionComponent<I.TSvgComponent> = props.tradeprod
    return <Box className={props.className}> <TradeProd props={propCityIcon} />{props.num} </Box>
}

export default CityProd
