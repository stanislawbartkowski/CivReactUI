import React, { FunctionComponent } from 'react';

import { ReactComponent as SvgInfantry } from '../../resources/images/units/unit-aircraft.svg'
import SvgIcon from '@material-ui/core/SvgIcon';
import * as I from '../../js/I';

const AirCraft : FunctionComponent<I.TSvgComponent> =  ({ className, props }) =>
    (<SvgIcon className={className} component={SvgInfantry} viewBox="0 0 286.689 286.689"  {...props} />)

export default AirCraft;
