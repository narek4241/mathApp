// Result Tabel (button, content)

// resultTable__Btn

let loaderIndexOfDisplayResultTable = 1;

function displayResultTable(){

    checkAnswers();

    if(loaderIndexOfDisplayResultTable === 1){
        generateResultTable();
        document.getElementById("resultTableBtn").innerHTML = "Close Table";
        loaderIndexOfDisplayResultTable = 0;
    }else{
        document.getElementById("resTblContTable").children[0].remove();
        document.getElementById("resultTableBtn").innerHTML = "Generate Table";
        loaderIndexOfDisplayResultTable++;
    }
    // add timer animation #task
    stopTimer();
}

let generateResultTableBtn = document.getElementById("resultTableBtn");
generateResultTableBtn.addEventListener("click", displayResultTable);



// resultTable__Content

// let answerNumberInSingleTask = 4;

function generateResultTable(){

    // let body = document.getElementsByTagName("body")[0];
    
    let tbl = document.createElement("table");

    // tbl.classList.add("tbl");

    let tblBody = document.createElement("tbody");
    // top side (N, 1 2 3 answerNumberInSingleTask)
    for(let i = 0; i < 1; i++){
        let row = document.createElement("tr");
        for(let j = 0; j < 1; j++){
            let head = document.createElement("th");
            let headText = document.createTextNode("N");

            head.appendChild(headText);
            row.appendChild(head);
        }
        for(let j = 0; j < answerNumberInSingleTask; j++){
            let cell = document.createElement("th");
            let cellText  = document.createTextNode(`${j+1}`);
            // my 1 check (note)
            if(j == 0){
                cellText  = document.createTextNode(`(my) ${j+1} (check)`);
            }

            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    
    // table main content
    for(let n = 0; n < checkSheet.length; n++){
        // table height
        for(let i = 0; i < 1; i++){
            let row = document.createElement("tr");
            
            // lf side (1,2,3...9,10)
            for(let j = 0; j < 1; j++){
                let head = document.createElement("th");
                // table number of task
                let headText = document.createTextNode(`${n+1}`);
    
                head.appendChild(headText);
                row.appendChild(head);
            }
            // table width (task values 3in1)
            for(let j = 0; j < answerNumberInSingleTask; j++){
                let cell = document.createElement("td");

                // div of AnserSheetValue and CheckSheetValue (2 of 3)
                let valueAnswerSheetCheckSheet = document.createElement("div");
                
                valueAnswerSheetCheckSheet.style.display = "flex";
                valueAnswerSheetCheckSheet.style.justifyContent = "space-evenly";

                    let answerSheetValue  = document.createElement("p");
                    // checks whether "undefined", 'NaN'('-') or not
                    if(typeof answerSheet[n][j] == "undefined"){
                        answerSheetValue.innerHTML = `–`;
                    }else if(isNaN(answerSheet[n][j])){
                        answerSheetValue.innerHTML = `-`;
                    }else{
                        answerSheetValue.innerHTML = `${answerSheet[n][j]}`;
                    }

                    let checkSheetValue  = document.createElement("p");
                    checkSheetValue.innerHTML = `${checkSheet[n][j]}`;

                    valueAnswerSheetCheckSheet.appendChild(answerSheetValue);
                    valueAnswerSheetCheckSheet.appendChild(checkSheetValue);

                // h3 of resultSheetValue (1 of 3 (last))
                let resultSheetValue  = document.createElement("h3");
                resultSheetValue.innerHTML = `${resultSheet[n][j]}`;

                    // coloring resultSheetValue backgrounds (true, false, - => to green, red, #ebecec)
                    if(resultSheetValue.innerHTML == "true"){
                        resultSheetValue.style.backgroundColor = "green";

                    }else if(resultSheetValue.innerHTML == "false"){
                        resultSheetValue.style.backgroundColor = "red";
                    }else{
                        resultSheetValue.style.backgroundColor = "#ebecec";
                    }

                cell.appendChild(valueAnswerSheetCheckSheet);
                cell.appendChild(resultSheetValue);
                row.appendChild(cell);
            }
            tblBody.appendChild(row);
        }
    }

    // bottom side 1 (Stat, trueAnswers falseAnswers emptyAnswers All)
    for(let i = 0; i < 1; i++){
        let row = document.createElement("tr");
        // Stat.
        for(let j = 0; j < 1; j++){
            let head = document.createElement("th");
            let headText = document.createTextNode("Stat.");

            head.appendChild(headText);
            row.appendChild(head);
        }
        let keysOverallResultSheet = Object.getOwnPropertyNames(overallResultSheet);
        // console.log(`keys`);
        // console.log(keysOverallResultSheet);

        // {overallResultSheets} keys presented by [keysOverallResultSheet]
        for(let j = 0; j < 3; j++){
            let head = document.createElement("th");

            let headText = document.createElement("hanswerNumberInSingleTask");
            headText.innerHTML = `${keysOverallResultSheet[j]}`;

                if(headText.innerHTML == "trueAnswers"){
                    headText.innerHTML = 'True Answers';
                    headText.style.color = "green";
                    headText.style.border = "1px solid green";
                }else if(headText.innerHTML == "falseAnswers"){
                    headText.innerHTML = 'False Answers';
                    headText.style.color = "red";
                    headText.style.border = "1px solid red";
                }else{
                    headText.innerHTML = 'Empty Answers';
                    headText.style.color = "#990000";
                    headText.style.border = "1px solid #990000";
                }

            head.appendChild(headText);
            row.appendChild(head);
        }
        // bottom side "All"
        for(let j = 0; j < 1; j++){
            let head = document.createElement("th");
            let headText = document.createTextNode(`All`);

            head.appendChild(headText);
            row.appendChild(head);
        }
        tblBody.appendChild(row);
    }
    // bottom side 2 (answers)
    for(let i = 0; i < 1; i++){
        let row = document.createElement("tr");
        // -
        for(let j = 0; j < 1; j++){
            let head = document.createElement("th");
            let headText = document.createTextNode("");

            head.appendChild(headText);
            row.appendChild(head);
        }
        // value of trueAnswers
        for(let j = 0; j < 1; j++){
            let cell = document.createElement("td");
            let cellText1  = document.createTextNode(`${overallResultSheet["trueAnswers"]}`);

            cell.appendChild(cellText1);
            row.appendChild(cell);
        }
        // value of falseAnswers
        for(let j = 0; j < 1; j++){
            let cell = document.createElement("td");
            let cellText1  = document.createTextNode(`${overallResultSheet["falseAnswers"]}`);

            cell.appendChild(cellText1);
            row.appendChild(cell);
        }
        // value of emptyAnswers
        for(let j = 0; j < 1; j++){
            let cell = document.createElement("td");
            let cellText1  = document.createTextNode(`${overallResultSheet["emptyAnswers"]}`);

            cell.appendChild(cellText1);
            row.appendChild(cell);
        }
        // number of all tasks
        for(let j = 0; j < 1; j++){
            let cell = document.createElement("td");
            let cellText1  = document.createTextNode(`${simpleResultSheet.length}`);

            cell.appendChild(cellText1);
            row.appendChild(cell);
        }

        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    
    let table = document.getElementById("resTblContTable");
    
    table.appendChild(tbl);
}










