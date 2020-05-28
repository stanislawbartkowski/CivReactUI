import React, { FunctionComponent } from 'react';

import { ReactComponent as SvgCoin } from '../../resources/images/resource/spy.svg'
import SvgIcon from '@material-ui/core/SvgIcon';
import * as I from '../../js/I';

const Spy : FunctionComponent<I.TSvgComponent> =  ({ className, props }) =>
    (<SvgIcon className={className} component={SvgCoin} viewBox="0 0 488.767 488.767" {...props} />)

export default Spy;
