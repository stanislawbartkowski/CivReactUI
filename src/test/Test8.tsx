import React from 'react';

import Board from '../components/objects/board/Board'
import { getBoard } from './getBoard'

const Test8: React.FC = () => {

    const board = getBoard()
    
    return (
        <div >
            <Board data={board} />
        </div>
    );
}

export default Test8;
