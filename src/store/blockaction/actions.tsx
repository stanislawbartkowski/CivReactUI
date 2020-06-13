import * as C from '../../js/C'

export const BLOCK_ACTION: string = "BLOCK_ACTION"
export const NORMAL_ACTION: string = "NORMAL_ACTION"

export const blockaction = () => {
    return {
        type: BLOCK_ACTION
    }
}

export const nonblockaction = () => {
    return {
        type: NORMAL_ACTION
    }
}
