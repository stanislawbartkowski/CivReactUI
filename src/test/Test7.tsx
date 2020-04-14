import React from 'react';
import Button from '@material-ui/core/Button';
import { useConfirm, ConfirmProvider } from 'material-ui-confirm';
import Grid from '@material-ui/core/Grid';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';


import { ReactComponent as Wheat } from '../resources/images/resource/wheat.svg'
import { ReactComponent as Coin } from '../resources/images/resource/coin.svg'
import { ReactComponent as Incense } from '../resources/images/resource/incense.svg'
import { ReactComponent as Iron } from '../resources/images/resource/iron.svg'
import { ReactComponent as Silk } from '../resources/images/resource/silk.svg'
import { ReactComponent as Culture } from '../resources/images/tokens/culture.svg'


const styles = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    fontFamily: "sans-serif",
    justifyContent: "space-between"
  };

const defaultIProps = {
    style: { fontSize: 14 },
}


const Test7: React.FC = () => {


    return (
        <div >
           <SvgIcon component={Wheat} viewBox="0 0 163.575 163.575" {...defaultIProps} />
           <SvgIcon component={Coin} viewBox="0 0 56 56" {...defaultIProps} />
           <SvgIcon component={Incense} viewBox="0 0 17.086 17.086" {...defaultIProps} />
           <SvgIcon component={Culture} viewBox="0 0 58.3575 58.3575" {...defaultIProps} />

        </div>
    );
}

export default Test7;
