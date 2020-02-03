export {}

// ===================================
// Some simple command procedures
// ===================================
export function log(s: string) {
    console.log(s);
}

export function trace(module: String, mess: String) {
    console.log("[" + module + "] " + mess);
}

export function erralert(mess: String) {
    alert(mess);
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
export function GRCivs() : Array<any> { return res.civ }

// misc
export function getCivShort(civ: string) {
    return civ[0] + civ[1];
}
