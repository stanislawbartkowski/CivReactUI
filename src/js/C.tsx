import { Grid } from "@material-ui/core";

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

    GR() { return this.res}

};

export default C
