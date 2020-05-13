import React, { FunctionComponent } from 'react';

import { ReactComponent as SvgCoin } from '../../resources/images/resource/coin.svg'
import SvgIcon from '@material-ui/core/SvgIcon';
import * as I from '../../js/I';

const Coin : FunctionComponent<I.TSvgComponent> =  ({ className, props }) =>
    (<SvgIcon className={className} component={SvgCoin} viewBox="0 0 56 56" {...props} />)

export default Coin;
