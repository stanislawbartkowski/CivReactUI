import React, { FunctionComponent } from 'react';

import { ReactComponent as SvgWheat } from '../../resources/images/icons/buybuilding.svg'
import SvgIcon from '@material-ui/core/SvgIcon';
import * as I from '../../js/I';

const BuyBuilding : FunctionComponent<I.TSvgComponent> =  ({ className, props }) =>
    (<SvgIcon className={className} component={SvgWheat} viewBox="0 0 337.2 337.2" {...props} />)

export default BuyBuilding;
