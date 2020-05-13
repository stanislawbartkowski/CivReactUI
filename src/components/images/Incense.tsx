import React, { FunctionComponent } from 'react';

import { ReactComponent as SvgIncense } from '../../resources/images/resource/incense.svg'
import SvgIcon from '@material-ui/core/SvgIcon';
import * as I from '../../js/I';

const Incense : FunctionComponent<I.TSvgComponent> =  ({ className, props }) =>
    (<SvgIcon className={className} component={SvgIncense} viewBox="0 0 17.086 17.086" {...props} />)


export default Incense;
