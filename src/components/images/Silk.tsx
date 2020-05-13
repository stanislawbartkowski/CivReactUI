import React, { FunctionComponent } from 'react';

import { ReactComponent as SvgCoin } from '../../resources/images/resource/silk.svg'
import SvgIcon from '@material-ui/core/SvgIcon';
import * as I from '../../js/I';

const Silk : FunctionComponent<I.TSvgComponent> =  ({ className, props }) =>
    (<SvgIcon className={className} component={SvgCoin} viewBox="0 0 512 512" {...props} />)

export default Silk;
