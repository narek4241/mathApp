// Declaring arrays

// CheckSheet

let checkSheet = [];

// AnswerSheet

let answerSheet = [];

let answersOfFollowingTask = [];

// ResultSheet

let resultSheet = [];
// presenting [resultSheet] elems in [simpleResultSheet] (from 2d -> 1d)
let simpleResultSheet = [];
// getting statistics in {overallResultSheet}
let overallResultSheet = {};


// Declaring resultTable() function

// index, which makes '<>Generate Table<>' button toggle
let loaderIndexOfDisplayResultTable = 1;

function displayResultTable(){

    // Selecting [checkSheetSec] to be assigned to [checkSheet]

    // selectCheckSheetSec();

    // Pushing real solved variant numbers to -> [answerSheet]

    // empty function now (content moved into getValueAnswerInput())
    // setAnswerSheet(); 

    // checkAnswers, result pushed to -> [resultSheet]

    checkAnswers();

    // generating whole table by dom
    if(loaderIndexOfDisplayResultTable === 1){
        generateResultTable();
        document.getElementById("resultTable").innerHTML = "Close Table";
        // did for disloading next
        loaderIndexOfDisplayResultTable = 0;
    }else{
        document.getElementById("table_block").children[0].remove();
        document.getElementById("resultTable").innerHTML = "Generate Table";
        // did for loading next
        loaderIndexOfDisplayResultTable++;
    }

    // generateResultTable();

    
    // Stop Timer after generateTable();
    stopTimer();
    // timer animation
    // document.getElementById("showTimer").style.animation = "showTimerResult 1s linear infinite";
    
    
    // console.log(document.getElementById("table_block").children[0].parentElement.remove());
}

// getting element by dom, then calling function if clicked

let generateResultTableBtn = document.getElementById("resultTable");
generateResultTableBtn.addEventListener("click", displayResultTable);


// generateResultTable();

selectCheckSheetSec();

// generateAnswerStatusTable();





