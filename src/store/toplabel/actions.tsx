export const TOPLABEL_NAME: string = "TOPLABEL_NAME";

export const toplabelName = (label : string) => {
    return {
        type: TOPLABEL_NAME,
        label : label
    }
}