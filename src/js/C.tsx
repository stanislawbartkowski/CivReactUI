import civstring from '../localize/locale'
import * as comm from './comm'
import * as I from './I';
import red from '@material-ui/core/colors/red';
import axios from '../axios';

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

export function internalerrorlog(mess: string) {
    log("Internal error :" + mess)
}

// ================================
// confirm dialog
// ================================

var confirm: any = null

export function setConfirm(pconfirm: any) { confirm = pconfirm }

export function confirmAlert(question: string, title: string = civstring('areyousure')) {
    return confirm({
        description: question,
        confirmationText: civstring('ok'),
        cancellationText: civstring('cancel'),
        title: title
    })
}

export function infoAlert(mess: string, title: string) {
    return confirm({
        description: mess,
        confirmationText: civstring('ok'),
        cancellationText: null,
        title: title
    })
}

export function notimplementedAlert(mess: string) {
    infoAlert(mess, civstring("notimplemented"))
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

/** getBuilding */

function lookupByName(list: Array<any>, name: string, err: string): any {
    const f = list.find(e => e.name == name)
    if (f == null) {
        internalerrorlog(name + " " + err)
        return null
    }
    return f
}

export function getBuilding(building: string): any {
    const buildings: Array<any> = GR().buildings
    return lookupByName(buildings, building, "cannot find this building")
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
export function gtoB(pos: I.Pos, dim: I.Pos): I.Pos {

    return { row: dim.row - pos.row - 1, col: pos.col };
}

export function getSquare(map: any, pos: I.Pos) {
    const ma: Array<any> = map
    const row: Array<any> = ma[pos.row]
    const da: any = row[pos.col]
    return da
}

function eqP(p1: I.Pos, p2: I.Pos): boolean {
    return p1.row == p2.row && p1.col == p2.col
}

export function onhighlightList(pos: I.Pos, hightlight: Array<I.Pos>): boolean {

    if (hightlight == null) return false

    return hightlight.find(p => eqP(p, pos)) != null

}

/**
 * Get color for the player
 *   civ : civilization, the color should be different for you and opponent
 *   return : color
 */
export function getColor(civ: string): string {
    return red[600];
}

/**
 * Get color for city or capital for the player
 *   civ : civilization, the color should be different for you and opponent
 *   return : color
 */
export function getCityColor(civ: string): string {
    return red[100];
}


/** 
 * Get military strength for a branch
 * strenght : list of military branch and strength
 * branch : military branch to be looked for
 * return : military strength
 */
export function getStrength(strength: Array<any>, branch: string): number {
    const f = lookupByName(strength, branch, "cannot find this branch")
    if (f == null) return 0
    return f.militarystrength
}

/**
 * Extract itemize/highligth list of squares from itemize array
 * command : command 
 * itemized : itemized struxture specific to command
 * return : array of highlight squares
 */

function transformarmyitemized(itemized: Array<any>): Array<I.Pos> {
    return itemized.map(e => { return { "row": e.param.row, "col": e.param.col } })
}

function transformbuyunit(itemized: Array<any>): Array<I.Pos> {
    return itemized.map(e => { return { "row": e.p.row, "col": e.p.col } })
}

export function itemizetoHighlight(command: string, itemized: any): Array<I.Pos> {
    switch (command) {
        case "BUILDCAPITAL":
        case "BUILDCITY": break
        case "SETARMY":
        case "SETSCOUT":
        case "BUYRMY":
        case "BUYSCOUT": return transformarmyitemized(itemized);
        case comm.BUYINFANTRY:
        case comm.BUYMOUNTED:
        case comm.BUYARTILLERY: return transformbuyunit(itemized)

    }
    return itemized
}

export function commandPopUp(command: string): boolean {
    switch (command) {
        case comm.BUYARTILLERY:
        case comm.BUYINFANTRY:
        case comm.BUYMOUNTED: return true;
    }
    return false
}

/**
 * Get command name
 */
export function commandText(command: string): string {
    return civstring("button_" + command.toLowerCase())
}

/**
 * Create authorization header with token
 */

export function getAuthHeader(): object {
    return { 'headers': { 'Authorization': 'Token ' + getToken() } }
}

// --------------------------
// execute command
// --------------------------


/**
 * Execute command through REST/API
 * 
 * @param command Command id
 * @param pos square postition
 * @param o Addtional JSON parameter
 */

function callCommand(command: string, pos: I.Pos | null, o: object | null | string) {
    let q = ""
    if (pos == null) q = "row=-1&col=-1"
    else q = "row=" + pos.row + "&col=" + pos.col
    const url: string = '/command?action=' + command + "&" + q
    const encode = encodeURI(JSON.stringify(o))
    const jsparam = (o == null) ? "" : "&jsparam=" + encode
    axios.post(url + jsparam, null, getAuthHeader())
}

function findCity(square: I.Pos, itemize: Array<any>): I.Pos {
    const e = itemize.find(e => eqP(e.param, square))
    return e.p;
}

export function executeCommand(command: string, square: I.Pos, itemize: Array<any>) {
    let jspar: object | null = null
    let pos: I.Pos | null = square
    switch (command) {
        case "SETCAPITAL": break;

        case "SETARMY":
        case "SETSCOUT":
        case "BUYARMY":
        case "BUYSCOUT": jspar = square; pos = findCity(square, itemize); break;
    }
    callCommand(command, pos, jspar)
}

export function executeEndOfPhase(phase: string) {
    callCommand(comm.ENDOFPHASE, null, phase)
}

export function commandItemized(command: string): boolean {
    if (command == comm.ENDOFPHASE) return false
    return true
}

export function implementedCommand(command: string): boolean {
    switch (command) {
        case comm.ENDOFPHASE :
        case "BUYARMY":
        case "BUYSCOUT":
        case "SETCAPITAL":
        case "SETARMY":
        case "SETSCOUT":
        case comm.BUYARTILLERY:
        case comm.BUYMOUNTED:
        case comm.BUYINFANTRY:
            return true;
    }
    return false;
}