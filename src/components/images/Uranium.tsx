import React, { FunctionComponent } from 'react';

import { ReactComponent as SvgCoin } from '../../resources/images/resource/uranium.svg'
import SvgIcon from '@material-ui/core/SvgIcon';
import * as I from '../../js/I';

const Uranium : FunctionComponent<I.TSvgComponent> =  ({ className, props }) =>
    (<SvgIcon className={className} component={SvgCoin} viewBox="0 0 496 496" {...props} />)

export default Uranium;
