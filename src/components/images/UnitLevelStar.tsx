import React, { FunctionComponent } from 'react';

import { ReactComponent as SvgSoldier } from '../../resources/images/units/unit-star.svg'
import SvgIcon from '@material-ui/core/SvgIcon';
import * as I from '../../js/I';

const UnitLevelStar : FunctionComponent<I.TSvgComponent> =  ({ className, props }) =>
    (<SvgIcon className={className} component={SvgSoldier} viewBox="0 0 37.286 37.287" {...props} />)

export default UnitLevelStar;
