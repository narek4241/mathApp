// INSERT ANSWERS, ANSWER STATUS TABLE

// Setting [answerSheet] via <input> (button, content, table)

// setting table (button, content)

// button

let generateAnswerStatusTableBtn = document.getElementById("answerInputTableBtn");
generateAnswerStatusTableBtn.addEventListener("click", answerStatusTable);

let loaderIndexAnswerStatusTable = 1;

// set answerStatusTable
function answerStatusTable(){
    if(loaderIndexAnswerStatusTable === 1){
        generateAnswerStatusTable();
        document.getElementById("answerInputTableBtn").innerHTML = "<i>Close</i>";
        loaderIndexAnswerStatusTable = 0;
    }else{
        document.getElementsByClassName("answerInputTableContent")[0].childNodes[0].remove();
        document.getElementById("answerInputTableBtn").innerHTML = "Answer Status Table";
        loaderIndexAnswerStatusTable++;
    }
}

// answer status table
function generateAnswerStatusTable(){
    
    let answerInputTable = document.getElementsByClassName("answerInputTableContent")[0];
    let answerStatusTable = document.createElement("table");
    let answerStatusTableBody = document.createElement("tbody");
    // top side (N, 1 2 3 4)
    for(let i=0; i<1; i++){
        let raw = document.createElement("tr");
        for(let n=0; n<1; n++){
            let head = document.createElement("th");
            let headText = document.createElement("div");
            headText.innerHTML = "N";

            head.appendChild(headText);
            raw.appendChild(head);
        }
        for(let j=0; j<4; j++){
            let head = document.createElement("th");
            let headText = document.createElement("div");
            headText.innerHTML = `${j+1}`;

            head.appendChild(headText);
            raw.appendChild(head);
        }
        answerStatusTableBody.appendChild(raw);
    }
    // main content 
    for(let i=0; i<checkSheet.length; i++){
        let raw = document.createElement("tr");
        for(let n=0; n<1; n++){
            let head = document.createElement("th");
            let headText = document.createElement("div");
            headText.innerHTML = `${i+1}`;

            head.appendChild(headText);
            raw.appendChild(head);
        }
        for(let j=0; j<4; j++){
            let head = document.createElement("td");
            let headText = document.createElement("div");
            // headText.innerHTML = `${j+1}`;
            if(answerSheet[i]){
                headText.innerHTML = `${answerSheet[i][j]}`;
                // get rid of printing 'undefined'
                if(answerSheet[i] == ""){
                    head.style.backgroundColor = "#f0eadd";
                    headText.innerHTML = "";
                }
            }else{
                // headText.innerHTML = `empty`;
                head.style.backgroundColor = "#f0eadd";
            }
            // console.log(`${answerSheet[i]}`)

            head.appendChild(headText);
            raw.appendChild(head);
        }
        answerStatusTableBody.appendChild(raw);
    }

    answerStatusTable.appendChild(answerStatusTableBody);
    answerInputTable.appendChild(answerStatusTable);
    // return "loaded";
}


//////////////////////////////////////////////////////////////////////////////////////////
// setting button (Insert Answers)

let loadInsertAnswersBtn = document.getElementById("answerInputBtn");
loadInsertAnswersBtn.addEventListener("click", loadInsertAnswers);

function loadInsertAnswers(){
    // evaluate checkSheet's sectionValue to be assigned 
    // WARNING ${valueSec} is local variable (another local use in another function)
    let valueSec = document.getElementById("selectCheckSheetSec").value;

    // console.log(`ValueSec ${valueSec}`);
    
    checkSheet = eval(`checkSheetSec${valueSec}`);
    
    // btn  on / off
    if(window.innerWidth > 500){
        if(document.getElementsByClassName("answerInput_content")[0].style.height == "60px"){
            document.getElementsByClassName("answerInput_content")[0].style.height = "0px";
            loadInsertAnswersBtn.innerHTML = "<i>Insert</i> Answers";
        }else{
            document.getElementsByClassName("answerInput_content")[0].style.height = "60px";
            loadInsertAnswersBtn.innerHTML = "<i>Close</i>";
            // loadInsertAnswersBtn.innerHTML = "<div><div>Close</div><div>(Note Type '0' if answer absents)</div></div>";
        }
    }else{
        if(document.getElementsByClassName("answerInput_content")[0].style.height == "100px"){
            document.getElementsByClassName("answerInput_content")[0].style.height = "0px";
            loadInsertAnswersBtn.innerHTML = "<i>Insert</i> Answers";
        }else{
            document.getElementsByClassName("answerInput_content")[0].style.height = "100px";
            loadInsertAnswersBtn.innerHTML = "<i>Close</i>";
        }
    }
    
    // calling here for setting needed 'checkSheetSec' to [checkSheet]
    setAnswerSheetEmptyArrays();

    setTaskIndex();
}


// setting content
function setAnswerSheetEmptyArrays(){
    // pushing empty arrays to [answerSheet]
    for(let i in checkSheet){
        answerSheet.push([]);
        // answersOfFollowingTask.push([]);
    }
    // console.log(`func exec. ${checkSheet}`);
}


// Setting selectAnswerInputNumber btn (to choose the index of the task)


// getting instant value by event

//declaring dom event of <SELECT> TaskIndex 
let selectTaskIndex = document.getElementById("selectAnswerInputNumber");
selectTaskIndex.addEventListener("change", getTaskIndexValue);

// dom event's function of <SELECT> TaskIndex

// default value
let valueOfSelectTaskIndex = 1;

function getTaskIndexValue(){
    valueOfSelectTaskIndex = document.getElementById("selectAnswerInputNumber").value;
    // console.log(`TaskIndex ${valueOfSelectTaskIndex}`);
}


// declaring outside for using in another
let optionTaskIndex;

// setTaskIndex fucnton
function setTaskIndex(){
    for(let i in checkSheet){
        let selectTaskIndex = document.getElementById("selectAnswerInputNumber");
        optionTaskIndex = document.createElement("OPTION");

        optionTaskIndex.text = `${+i+1} Task`;
        optionTaskIndex.value = i;
        selectTaskIndex.appendChild(optionTaskIndex);
        // console.log(`optVal ${optionTaskIndex.value}`);
    }
}

// submitAnswerInput

// document.getElementById("answerInput").placeholder = `Insert the answer: ${valueOfSelectTaskIndex}`;

let submitAnswerInput = document.getElementById("answerSubmit");
submitAnswerInput.addEventListener("click", getValueAnswerInput);

function getValueAnswerInput(){
    // getting value from <input> then spliting it


    for(let i in checkSheet){

        // answer's input validation (regexp)
        let answerRegexp = /[1-4-]{4}/;

        if(answerRegexp.test(document.getElementById("answerInput").value)){
            submitInputValue = document.getElementById("answerInput").value;
            // console.log(`if`);
        }else{
            // console.log(`else`);
            break;
        }


        if(answerSheet[i] == ""){
            for(let c in submitInputValue){
                answersOfFollowingTask.push(+submitInputValue[c]);
                // console.log(`vs ${optionTaskIndex.value}`);
                answerSheet[i].push(+submitInputValue[c]);
                // console.log(`i ${i}`);
            }
            }else{
                // if answerSheet[i] is not empty 'continue;' ...
                // ... for omitting from assigning value to ' "" ' nothing
                continue;
            }

        document.getElementById("answerInput").value = "";
    }
    // doesn't differ which one to choose [answerSheet] or [checkSheet]
    for(let i in checkSheet){
        // console.log(`a ${i}`);
    }

    // increments inner index's value of answerInput form
    // valueOfSelectTaskIndex++;
    document.getElementById("answerInput").placeholder = `Insert the answer:`;
    // document.getElementById("answerInput").placeholder = `Insert the answer: ${valueOfSelectTaskIndex}`;
}
 

