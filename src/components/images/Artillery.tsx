import React, { FunctionComponent } from 'react';

import { ReactComponent as SvgInfantry } from '../../resources/images/units/unit-artillery.svg'
import SvgIcon from '@material-ui/core/SvgIcon';
import * as I from '../../js/I';

const Artillery : FunctionComponent<I.TSvgComponent> =  ({ className, props }) =>
    (<SvgIcon className={className} component={SvgInfantry} viewBox="0 0 512.013 512.013" {...props} />)

export default Artillery;
