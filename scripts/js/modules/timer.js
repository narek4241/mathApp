// TIMER

// Setting Timer (Stopwatch) 

let showTimer = document.getElementById('sub_timer_time'),
    start = document.getElementById('startTimer'),
    stop = document.getElementById('stopTimer'),
    clear = document.getElementById('clearTimer'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function setTimer() {


    function add() {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }

        showTimer.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

        startTimer();
    }

    startTimer = function () {
        t = setTimeout(add, 1000);
    }

    stopTimer = function () {
        clearTimeout(t);
    }

    clearTimer = function () {
        showTimer.textContent = "00:00:00";
        seconds = 0; minutes = 0; hours = 0;
        stopTimer();

        let startBtn = document.getElementById("startTimer");
        if(startBtn.style.display == ""){
            stopBtn.style.display = "";
            startBtn.style.display = "block";
        }
    }

    let startBtn = document.getElementById("startTimer");
    let stopBtn = document.getElementById("stopTimer");

    // toggle btn (start/stop)
    function startStopTimer() {
        if (stopBtn.style.display == "") {

            startBtn.style.animation = "btn_appear 1s linear .1";
            stopBtn.style.animation = "btn_disappear 1s linear .1";

            setTimeout(function () { startBtn.style.display = "none"; }, 100);
            setTimeout(function () { stopBtn.style.display = "block"; }, 100);

            // when start btn clicked, dialog disappears
            document.getElementById("timerDialog").style.animation = "timerDialog2 10s linear 1";
            setTimeout(function () { document.getElementById("timerDialog").style.display = "none"; }, 500);
        } else{
            startBtn.style.animation = "btn_disappear 1s linear .1";
            stopBtn.style.animation = "btn_appear 1s linear .1";

            setTimeout(function () { stopBtn.style.display = ""; }, 100);
            setTimeout(function () { startBtn.style.display = "block"; }, 100);
        }
    }
    function setStartStopDefBtn(){
        // when clear btn clicked, pause button avatar clears
        if (startBtn.style.display == "none") {
            stopBtn.style.display = "";
            startBtn.style.display = "block";
        }
    }

    start.addEventListener("click", startStopTimer);
    start.addEventListener("click", startTimer);

    stop.addEventListener("click", startStopTimer);
    stop.addEventListener("click", stopTimer);

    clear.addEventListener("click", setStartStopDefBtn);
    clear.addEventListener("click", clearTimer);

}

setTimer();


// Dialog (Message Block)

window.addEventListener("scroll", markTimerControler);

// state 

// getting same effect, when refreshing in at pos under scrollTop > ...
if (document.documentElement.scrollTop > 100){
    document.getElementById("timerDialog").style.display = "block";
    document.getElementById("timerDialog").style.animation = "timerDialog 10s linear 1";
    setTimeout(function () { document.getElementById("timerDialog").style.display = "none"; }, 10000);
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
        document.getElementById("timerDialog").style.animation = "timerDialog 10s linear 1";
        setTimeout(function () { document.getElementById("timerDialog").style.display = "none"; }, 10000);
    }
}

