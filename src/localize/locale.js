import LocalizedStrings from 'react-localization';


let strings = new LocalizedStrings ({
    en: {
        civlogo: "Civilization",
        newgame: "New game",
        resumegame : "Resume game",
        joingame : "Join game",
        training : "Training",
        twoplayers : "Two players game",
        created : "Created",
        lastplayed : "Last played",
        phase : "Phase",
        round : "Round"
    }
});


const civstring  = (id) => { return strings[id]; }

export default civstring;