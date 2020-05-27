import React, { FunctionComponent } from 'react';

import { ReactComponent as SvgSoldier } from '../../resources/images/units/unit-level1.svg'
import SvgIcon from '@material-ui/core/SvgIcon';
import * as I from '../../js/I';

const UnitLevel1 : FunctionComponent<I.TSvgComponent> =  ({ className, props }) =>
    (<SvgIcon className={className} component={SvgSoldier} viewBox="0 0 512 512" {...props} />)

export default UnitLevel1;
