import React, { FunctionComponent } from 'react';

import { ReactComponent as SvgWheat } from '../../resources/images/buildings/harbor.svg'
import SvgIcon from '@material-ui/core/SvgIcon';
import * as I from '../../js/I';

const Harbor: FunctionComponent<I.TSvgComponent> = ({ className, props }) =>
    (<SvgIcon className={className} component={SvgWheat} viewBox="0 0 511 511" {...props} />)

export default Harbor;
