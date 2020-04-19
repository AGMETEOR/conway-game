export function arrayClone(arr: Array<any>): Array<any> {
    return JSON.parse(JSON.stringify(arr));
}