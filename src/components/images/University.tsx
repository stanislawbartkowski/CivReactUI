import React, { FunctionComponent } from 'react';

import { ReactComponent as SvgWheat } from '../../resources/images/buildings/university.svg'
import SvgIcon from '@material-ui/core/SvgIcon';
import * as I from '../../js/I';

const University: FunctionComponent<I.TSvgComponent> = ({ className, props }) =>
    (<SvgIcon className={className} component={SvgWheat} viewBox="0 0 511.984 511.984" {...props} />)

export default University;
