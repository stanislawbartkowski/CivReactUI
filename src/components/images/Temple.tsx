import React, { FunctionComponent } from 'react';

import { ReactComponent as SvgWheat } from '../../resources/images/buildings/temple.svg'
import SvgIcon from '@material-ui/core/SvgIcon';
import * as I from '../../js/I';

const Temple: FunctionComponent<I.TSvgComponent> = ({ className, props }) =>
    (<SvgIcon className={className} component={SvgWheat} viewBox="0 0 512 512" {...props} />)

export default Temple;
