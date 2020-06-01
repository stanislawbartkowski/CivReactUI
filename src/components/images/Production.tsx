import React, { FunctionComponent } from 'react';

import { ReactComponent as SvgInfantry } from '../../resources/images/tokens/production.svg'
import SvgIcon from '@material-ui/core/SvgIcon';
import * as I from '../../js/I';

const Production : FunctionComponent<I.TSvgComponent> =  ({ className, props }) =>
    (<SvgIcon className={className} component={SvgInfantry} viewBox="0 0 511.559 511.559" {...props} />)

export default Production;
