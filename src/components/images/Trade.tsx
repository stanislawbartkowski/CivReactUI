import React, { FunctionComponent } from 'react';

import { ReactComponent as SvgInfantry } from '../../resources/images/tokens/trade.svg'
import SvgIcon from '@material-ui/core/SvgIcon';
import * as I from '../../js/I';

const Trade : FunctionComponent<I.TSvgComponent> =  ({ className, props }) =>
    (<SvgIcon className={className} component={SvgInfantry} viewBox="0 0 212.755 212.755" {...props} />)

export default Trade;
