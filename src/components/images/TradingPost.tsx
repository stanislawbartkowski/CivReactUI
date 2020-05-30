import React, { FunctionComponent } from 'react';

import { ReactComponent as SvgWheat } from '../../resources/images/buildings/tradingpost.svg'
import SvgIcon from '@material-ui/core/SvgIcon';
import * as I from '../../js/I';

const Tradingpost: FunctionComponent<I.TSvgComponent> = ({ className, props }) =>
    (<SvgIcon className={className} component={SvgWheat} viewBox="0 0 612.322 612.322" {...props} />)

export default Tradingpost;
