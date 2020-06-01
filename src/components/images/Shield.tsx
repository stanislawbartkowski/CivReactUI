import React, { FunctionComponent } from 'react';

import { ReactComponent as SvgWheat } from '../../resources/images/cities/shield.svg'
import SvgIcon from '@material-ui/core/SvgIcon';
import * as I from '../../js/I';

const Shield: FunctionComponent<I.TSvgComponent> = ({ className, props }) =>
    (<SvgIcon className={className} component={SvgWheat} viewBox="0 0 512.001 512.001"  {...props} />)

export default Shield;
