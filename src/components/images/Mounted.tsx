import React, { FunctionComponent } from 'react';

import { ReactComponent as SvgInfantry } from '../../resources/images/units/unit-mounted.svg'
import SvgIcon from '@material-ui/core/SvgIcon';
import * as I from '../../js/I';

const Mounted : FunctionComponent<I.TSvgComponent> =  ({ className, props }) =>
    (<SvgIcon className={className} component={SvgInfantry} viewBox="0 0 426.306 426.306" {...props} />)

export default Mounted;
