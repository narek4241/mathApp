// Dialogs (Message Block)

// Timer 

window.addEventListener("scroll", markTimerControler);

// state 
let timerDialogAnimTime = 10000;

// getting same effect, when refreshing in at pos under scrollTop > ...
if (document.documentElement.scrollTop > 100){
    document.getElementById("timerDialog").style.display = "block";
    document.getElementById("timerDialog").style.animation = `timerDialog 10s linear 1`;
    setTimeout(function () { document.getElementById("timerDialog").style.display = "none"; }, timerDialogAnimTime);
}

// function

let doneTheStuff;

function markTimerControler() {
    if (document.documentElement.scrollTop > 100) {
        if (!doneTheStuff) {
            document.getElementById("timerDialog").style.display = "block";
            doneTheStuff = true;
        }
        // NOTE 'display' property doesn't work in animations
        document.getElementById("timerDialog").style.animation = `timerDialog 10s linear 1`;
        setTimeout(function () { document.getElementById("timerDialog").style.display = "none"; }, timerDialogAnimTime);
    }
}


