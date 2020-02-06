// INSERT ANSWERS, ANSWER STATUS TABLE

// <table> nuance comm-ed the del-ed (find on github)

// trial place

// declaring arr +trial assign
let checkSheet0 = [
    [2, 2, 3, 1],
    [4, 2, 1, 1],
    [2, 3, 2, 2],
    [3, 4, 2, 4],
];

let checkSheet = [
    [1, 1, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 0],
    [1, 0, 1, 1, 1, 0],
    [1, 1, 0, 1, 1, 0],
];


// Answers__input

// answerInputBtn

let loadInsertAnswersBtn = document.getElementById("answerInputBtn");
loadInsertAnswersBtn.addEventListener("click", loadInsertAnswers);

let loaderIndexOf_setEmptyArrs_selInpMeth = 0;

function loadInsertAnswers(checkSheet) {
    // (#task df none anim)
    if (document.getElementById("answerInputCont").style.height != "60px") {
        // document.getElementById("answerInputCont").style.display = "flex";
        // setTimeout(function(){document.getElementById("answerInputCont").style.height = "60px";}, 1);
        document.getElementById("answerInputCont").style.height = "60px";
        loadInsertAnswersBtn.innerHTML = "<i>Close</i>";

    } else {
        // loaderInsAnswScroll = 1;
        document.getElementById("answerInputCont").style.height = "0px";
        loadInsertAnswersBtn.innerHTML = "<i>Insert</i> Answers";
        // setTimeout(function(){document.getElementById("answerInputCont").style.display = "none";}, 755);
    }

    if (loaderIndexOf_setEmptyArrs_selInpMeth == 0) {
        // calls only once (which was needed)

        selectingMethodOfPushingAnswer();

        setAnswerSheetEmptyArrays(checkSheet);

        loaderIndexOf_setEmptyArrs_selInpMeth++;
    }
}

function setAnswerSheetEmptyArrays() {
    // pushing empty arrays to [answerSheet]
    for (let i in checkSheet) {
        answerSheet.push([]);
        for (let j in checkSheet[i]) {
            answersOfFollowingTask.push([]);
        }
    }
}



// answInpCont__form--submit

let submitAnswerInput = document.getElementById("answerSubmit");
// addEvnList is in func 'selectingMethodOfPushingAnswer()' > 'if else' stat.

function getValueAnswerInput() {
    // getting value from <input> then spliting it
    for (let i in checkSheet) {
        // answerRegexp
        if (answerRegexp.test(document.getElementById("answerInput").value)) {
            submitInputValue = document.getElementById("answerInput").value;
        } else {
            break;
        }

        if (answerSheet[i] == "") {
            for (let c in submitInputValue) {
                answersOfFollowingTask.push(+submitInputValue[c]);
                answerSheet[i].push(+submitInputValue[c]);
            }
        } else {
            // if answerSheet[i] is not empty 'continue;' ...
            // ... for omitting from assigning value to ' "" ' nothing
            continue;
        }
        document.getElementById("answerInput").value = "";
    }

    // auto refresh statTbl (esp. needed when statTbl 'loaded')(live changes)
    if (loaderIndexAnswerStatusTable == 0) {
        generateAnswerStatusTable();
        for (let ch = 0; ch < document.getElementById("answStatusTableCont").children.length; ch++) {
            document.getElementById("answStatusTableCont").children[0].remove();
        }
    }
}


function getValueMultiAnswerInput() {
    // getting value from <input> and directly pushing it 
    for (let i in checkSheet) {
        if (answerSheet[i] == '') {
            // checks whether all 4 inputs are matching regex or not
            if (answerRegexp.test(document.getElementById(`answerInput${1}`).value)
                && answerRegexp.test(document.getElementById(`answerInput${2}`).value)
                && answerRegexp.test(document.getElementById(`answerInput${3}`).value)
                && answerRegexp.test(document.getElementById(`answerInput${4}`).value)) {

                answerSheet[i].push(document.getElementById(`answerInput${1}`).value);
                answerSheet[i].push(document.getElementById(`answerInput${2}`).value);
                answerSheet[i].push(document.getElementById(`answerInput${3}`).value);
                answerSheet[i].push(document.getElementById(`answerInput${4}`).value);

                document.getElementById(`answerInput${1}`).value = "";
                document.getElementById(`answerInput${2}`).value = "";
                document.getElementById(`answerInput${3}`).value = "";
                document.getElementById(`answerInput${4}`).value = "";
            } else {
                break;
            }
        } else {
            continue;
        }
    }
    // auto refresh statTbl (esp. needed when statTbl 'loaded')(live changes)
    if (loaderIndexAnswerStatusTable == 0) {
        generateAnswerStatusTable();
        for (let ch = 0; ch < document.getElementById("answStatusTableCont").children.length; ch++) {
            document.getElementById("answStatusTableCont").children[0].remove();
        }
    }
}












