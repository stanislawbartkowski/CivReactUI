import LocalizedStrings from 'react-localization';


let strings = new LocalizedStrings({
    en: {
        civlogo: "Civilization Board Game",
        newgame: "New game",
        resumegame: "Resume game",
        joingame: "Join game",
        training: "Training",
        twoplayers: "Two players game",
        created: "Created",
        lastplayed: "Last played",
        phase: "Phase",
        round: "Round",
        confirmdefaultdialog: "Answer the question, please",
        cancel: "Cancel",
        ok: "Ok",
        areyousure: 'Are you sure?',
        titlestarttraining: "Start training game",
        doyouwanttostarttrainig: "Do you want to start training game as {0} ?",
        titleresumetraining: "Resume training game",
        doyouwanttoresumetrainig: "Do you want to resume training game as {0} ?",
        activeciv: "Active",
        gamephase: "Phase",
        roundno : "Round no",
        trade : "Trade",
        citylimit : "City limit",
        armieslimit : "Armies limit",
        scoutslimit : "Scouts limit",
        tradeforprod : "Trade prod",
        handsize : "Hand size",
        travelspeed : "Travel speed",
        stacklimit : "Stack limit",
        combatbonus : "Combat bonus"
    }
});


const civstring = (id, ...args) => {
    let s = strings[id];
    for (let i = 0; i < args.length; i++) {
        s = s.replace("{" + i + "}", args[i])
    }
    return s;
}

export default civstring;