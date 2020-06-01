import React, { FunctionComponent } from 'react';

import { ReactComponent as SvgWheat } from '../../resources/images/cities/city.svg'
import SvgIcon from '@material-ui/core/SvgIcon';
import * as I from '../../js/I';

const City : FunctionComponent<I.TSvgComponent> =  ({ className, props }) =>
    (<SvgIcon className={className} component={SvgWheat} viewBox="0 0 480 480"  {...props} />)

export default City;
