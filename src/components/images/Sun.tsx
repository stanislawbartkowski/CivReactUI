import React, { FunctionComponent } from 'react';

import { ReactComponent as SvgWheat } from '../../resources/images/icons/sun.svg'
import SvgIcon from '@material-ui/core/SvgIcon';
import * as I from '../../js/I';

const Sun : FunctionComponent<I.TSvgComponent> =  ({ className, props }) =>
    (<SvgIcon className={className} component={SvgWheat} viewBox="0 0 60 60" {...props} />)


export default Sun;
