import React, { FunctionComponent } from 'react';

import { ReactComponent as SvgWheat } from '../../resources/images/resource/wheat.svg'
import SvgIcon from '@material-ui/core/SvgIcon';
import * as I from '../../js/I';

const Wheat : FunctionComponent<I.TSvgComponent> =  ({ className, props }) =>
    (<SvgIcon className={className} component={SvgWheat} viewBox="0 0 163.575 163.575" {...props} />)


export default Wheat;
