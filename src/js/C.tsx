const C = {

    // some common simple functions
    log (s : string ) {
        console.log(s);
    },

    trace(module : String, mess : String) {
        console.log("[" + module + "] " + mess);
    },

    erralert(mess : String) {
        alert(mess);
    },
        
    // main game resource
    res : null,
    setGR(res : any) { this.res = res; },
    
    readyGR() { return this.res != null},

    GR() { return this.res},

    // misc
    getCivShort(civ : string) {
        return civ[0] + civ[1];
    }
  
};

export default C
