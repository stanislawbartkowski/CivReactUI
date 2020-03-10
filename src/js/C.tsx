import civstring from "../localize/locale";

export {}

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

export function tstoDate(ts : number) : string {
    const date = new Date(ts);

    return date.toLocaleString()
}

// ================================
// confirm dialog
// ================================

var confirm : any = null

export function setConfirm(pconfirm : any) { confirm = pconfirm }

export function confirmAlert(question : string, title : String = civstring('areyousure')) {
    return confirm({ description: question, 
                     confirmationText :civstring('ok'), 
                     cancellationText : civstring('cancel'),
                     title : title
                     })
}

// ==================================
// main game resource
// ==================================
var res: any = null // private

/** Set common civilization resource */
export function setGR(pres: any) { res = pres; }

/** Common civilization resource already set */
export function readyGR() : Boolean { return res != null; }

/** returns command resource */
export function GR()  { return res }

/** return resource civilization list */
export function GRCivs() : Array<any> { return res.civ; }

var token : string = "" // private

/** Set token specific to current game */
export function setToken(ptoken : string) { token = ptoken; }

export function clearToken() { setToken(""); }

/** Get current token */
export function getToken() { return token; }

/** Game on board */
export function isToken() { return token != "";}

// misc
export function getCivShort(civ: string) {
    return civ[0] + civ[1];
}
