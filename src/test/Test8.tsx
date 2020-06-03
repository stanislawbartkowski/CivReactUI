import React from 'react';

import Board from '../components/objects/board/Board'
//import { getBoard } from './getBoard'
import { getBoard } from './getBoard1'
import { setResource } from './testInit'

const Test8: React.FC = () => {

    setResource()
    const board = getBoard()
    
    return (
        <div >
            <Board data={board} />
        </div>
    );
}

export default Test8;
