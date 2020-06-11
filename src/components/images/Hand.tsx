import React, { FunctionComponent } from 'react';

import { ReactComponent as SvgWheat } from '../../resources/images/icons/hand.svg'
import SvgIcon from '@material-ui/core/SvgIcon';
import * as I from '../../js/I';

const Hand : FunctionComponent<I.TSvgComponent> =  ({ className, props }) =>
    (<SvgIcon className={className} component={SvgWheat} viewBox="0 0 57.066 57.066"  {...props} />)

export default Hand;
