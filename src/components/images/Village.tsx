import React, { FunctionComponent } from 'react';

import { ReactComponent as SvgCulture } from '../../resources/images/huts/village.svg'
import SvgIcon from '@material-ui/core/SvgIcon';
import * as I from '../../js/I';

const Village : FunctionComponent<I.TSvgComponent> =  ({ className, props }) =>
    (<SvgIcon className={className} component={SvgCulture} viewBox="0 0 512 512"  {...props} />)

export default Village;
