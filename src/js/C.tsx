import civstring from "../localize/locale";
import * as I from './I';
import red from '@material-ui/core/colors/red';

export { }

// ===================================
// Some simple command procedures
// ===================================
export function log(s: string) {
    console.log(s);
}

export function trace(module: string, mess: string) {
    console.log("[" + module + "] " + mess);
}

export function erralert(mess: string) {
    alert(mess);
}

export function tstoDate(ts: number): string {
    const date = new Date(ts);

    return date.toLocaleString()
}

// ================================
// confirm dialog
// ================================

var confirm: any = null

export function setConfirm(pconfirm: any) { confirm = pconfirm }

export function confirmAlert(question: string, title: String = civstring('areyousure')) {
    return confirm({
        description: question,
        confirmationText: civstring('ok'),
        cancellationText: civstring('cancel'),
        title: title
    })
}

// ==================================
// main game resource
// ==================================
var res: any = null // private

/** Set common civilization resource */
export function setGR(pres: any) { res = pres; }

/** Common civilization resource already set */
export function readyGR(): boolean { return res != null; }

/** returns command resource */
export function GR() { return res }

/** return resource civilization list */
export function GRCivs(): Array<any> { return res.civ; }

var token: string = "" // private

/** Set token specific to current game */
export function setToken(ptoken: string) { token = ptoken; }

export function clearToken() { setToken(""); }

/** Get current token */
export function getToken(): string { return token; }

/** Game on board */
export function isToken() { return token != ""; }

// misc
export function getCivShort(civ: string): string {
    return civ[0] + civ[1];
}

// game board related functions

/** calculates the dimension of the board */
export function calculatedim(map: any): I.Pos {
    const lines: Array<any> = map;
    let cols = 0;
    const rows = lines.length;
    // max number of columns
    lines.forEach(row => {
        const r: Array<any> = row;
        cols = Math.max(cols, r.length);
    });
    return { row: rows, col: cols };
}

export function range(size: number): ReadonlyArray<number> {
    return Array.from({ length: size }, (value, key) => key);
}

/** transforms grid coordinates on board to board coordinates 
 * pos: grid coordinates, (top,left) = (0,0)
 * dim : dimension of the board, numer of rows and columns
 * return: gameboard coordinates
*/
export function gtoB(pos : I.Pos, dim : I.Pos) : I.Pos {

    return { row : dim.row - pos.row - 1, col: pos.col};
}

export function getSquare(map : any, pos : I.Pos) {
    const ma : Array<any>  = map
    const row : Array<any> = ma[pos.row]
    const da : any = row[pos.col]
    return da
}

/**
 * Get color for the player
 */
export function getColor(civ : string) : string {
    return red[600];
}