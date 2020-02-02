import LocalizedStrings from 'react-localization';


let strings = new LocalizedStrings ({
    en: {
        civlogo: "Civilization",
        newgame: "New game",
        resumegame : "Resume game",
        joingame : "Join game"
    }
});


const civstring  = (id) => { return strings[id]; }

export default civstring;