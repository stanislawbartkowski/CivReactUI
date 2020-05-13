import React, { FunctionComponent } from 'react';

import { ReactComponent as SvgIron } from '../../resources/images/resource/iron.svg'
import SvgIcon from '@material-ui/core/SvgIcon';
import * as I from '../../js/I';

const Iron : FunctionComponent<I.TSvgComponent> =  ({ className, props }) =>
    (<SvgIcon className={className} component={SvgIron} viewBox="0 0 512 512" {...props} />)


export default Iron;
