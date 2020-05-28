import React, { FunctionComponent } from 'react';

import { ReactComponent as SvgCulture } from '../../resources/images/huts/hut.svg'
import SvgIcon from '@material-ui/core/SvgIcon';
import * as I from '../../js/I';

const Hut : FunctionComponent<I.TSvgComponent> =  ({ className, props }) =>
    (<SvgIcon className={className} component={SvgCulture} viewBox="0 0 439.48 439.48" {...props} />)

export default Hut;
