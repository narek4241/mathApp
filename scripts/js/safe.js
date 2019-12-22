// Randomly pushes elements from 1 to 4 range to array. 

let arr0 = [];
for (let i = 0; i < 10; i++) {
  arr0.push(Math.ceil((Math.random(0, 1) / 3) * 10));
}
console.log(arr0);


// Push elements element by element in array

for(let i = 0; i < checkSheet.length; i++){
    let answer = prompt(`Please insert the answer of ${i+1} task`, 1);
    answerSheet.push(+answer);
}

// Push elements element by element in array (from master)

for(let i in checkSheet){
    let answer = prompt(`Please insert the answer of ${+i + 1} task`, 1);
    if(answer === null) return;
    answerSheet.push(+answer);
}

// Iterate over array elements 

for(let i in checkSheet){
    console.log(checkSheet[i]);
}

// Random Elements in 2d Array  (n*4) 

let arr = [];

for (let i = 0; i < 10; i++){
    arr.push([]);
    for(let j = 0; j < 4; j++){
        arr[i].push(Math.ceil((Math.random(0, 1) / 3) * 10));
    }
}

// Push elements elem by elem to 2d Array (n*4)

let arr = [];

for(let i in checkSheet){
    arr.push([]);
    for(let j = 0; j < 4; j++){
        let ans = prompt(`Please insert the answer of ${+i+1} / ${j+1} task`, 1);
        arr[i].push(ans);
        // if(ans === null) return;
    }
}

// Checks answers btw two 1d Arrays

let checkAnswers = function(){
    for(let i = 0; i < checkSheet.length; i++){
        if(answerSheet[i] == checkSheet[i]){
            resultSheet.push("true");
        }
        else if(isNaN(answerSheet[i])){
            resultSheet.push("-");
        }
        else{
            resultSheet.push("false");
        }
    }
}


// Generating Table

function generateTable(){

    let body = document.getElementsByTagName("body")[0];
    
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");
    
    
    for(let i = 0; i <= checkSheet.length; i++){
        let row = document.createElement("tr");
    
        for(let h = 0; h < 1; h++){
            let head = document.createElement("th");

            // let headText = document.createTextNode("number");
            // head.appendChild(headText);

            row.appendChild(head);
        }
        for(let j = 0; j < 4; j++){
           
            let cell = document.createElement("td");
            var cellText1 = document.createTextNode("solved" + i);
            var cellText2 = document.createTextNode("answer"+ j);
    
            cell.appendChild(cellText1);
            cell.appendChild(cellText2);
            row.appendChild(cell);

        }
        tblBody.appendChild(row);
    }
    
    tbl.appendChild(tblBody);
    
    body.appendChild(tbl);
    
    tbl.setAttribute("border", "1");

    // Filling Table fields

    let th = document.getElementsByTagName("th");
    let td = document.getElementsByTagName("td");

    for(let i = 0; i <= 10; i++){
        // left side N 1 2 3 ... 9 10 
        th[0].innerHTML = "N";
        th[i].innerHTML = i;
    }

    for(let i = 0; i <= 3; i++){
        // top side 1 2 3 4 
        td[i].innerHTML = i + 1; 
    }

    //////////////////////////////////////

    for(let i = 4; i <= 43; i++){
        for(let i in checkSheet){
            // console.log(checkSheet[i]);
            // td[i].innerHTML = `I-rd ${i} - Answ is ${checkSheet[i]}`;
        }
    }

    for(let i = 4; i <= checkSheet.length; i++){
        for(let j = 0; j <= checkSheet[0].length; j++){
            // td[i].innerHTML = "1";
        }
    }
}


// Generate Table (v1.0) slightly working (safe)

function generateTable___(){

    let body = document.getElementsByTagName("body")[0];
    
    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");
    
    
    for(let i = 0; i <= checkSheet.length; i++){
        let row = document.createElement("tr");
    
        for(let h = 0; h < 1; h++){
            let head = document.createElement("th");

            // let headText = document.createTextNode("number");
            // head.appendChild(headText);

            row.appendChild(head);
        }
        for(let j = 0; j < 4; j++){
           
            let cell = document.createElement("td");
            var cellText1 = document.createTextNode("solved" + i);
            var cellText2 = document.createTextNode("answer"+ j);
    
            cell.appendChild(cellText1);
            cell.appendChild(cellText2);
            row.appendChild(cell);

        }
        tblBody.appendChild(row);
    }
    
    tbl.appendChild(tblBody);
    
    body.appendChild(tbl);
    
    tbl.setAttribute("border", "1");

    // Filling Table fields

    let th = document.getElementsByTagName("th");
    let td = document.getElementsByTagName("td");

    for(let i = 0; i <= 10; i++){
        // left side N 1 2 3 ... 9 10 
        th[0].innerHTML = "N";
        th[i].innerHTML = i;
    }

    for(let i = 0; i <= 3; i++){
        // top side 1 2 3 4 
        td[i].innerHTML = i + 1; 
    }

    //////////////////////////////////////

    for(let i = 4; i <= 43; i++){
        for(let i in checkSheet){
            // console.log(checkSheet[i]);
            // td[i].innerHTML = `I-rd ${i} - Answ is ${checkSheet[i]}`;
        }
    }

    for(let i = 4; i <= checkSheet.length; i++){
        for(let j = 0; j <= checkSheet[0].length; j++){
            // td[i].innerHTML = "1";
        }
    }
}

// generateTable();

// ~~~

for(let i = 0; i < 1; i++){
        let row = document.createElement("tr");
        for(let j = 0; j < 1; j++){
            let head = document.createElement("th");
            let headText = document.createTextNode("Stat.");

            head.appendChild(headText);
            row.appendChild(head);
        }

            let cell = document.createElement("td");
            let cellText1  = document.createTextNode(`${overallResultSheet["trueAnswers"]}`);
            let cellText2  = document.createTextNode(`${overallResultSheet["falseAnswers"]}`);

            cell.appendChild(cellText1);
            cell.appendChild(cellText2);
            row.appendChild(cell);
        

        tblBody.appendChild(row);
    }


// AnswerSheet Random Generated Array

let answerSheet = [[2, 4, 1, 3]
,[2, 2, "-", 2]
,[4, 3, 1, 3]
,[1, 1, 1, 4]
,[2, 3, 3, 1]
,[1, 1, 3, 4]
,[2, 2, 2, 2]
,[4, 2, "-", 3]
,[2, 3, 1, 2]
,[3, 2, 1, 4]];

// Getting AnswerSheet values in the New way (1234 x 10)

let answerSheet = [];

let answersOfFollowingTask = [];

for(let i in checkSheet){
    // pushing empty arrays to [answerSheet]
    answerSheet.push([]);

    // getting 1 2 3 4 answers of the following task
    let answer = prompt(`Please insert the answers of 1 2 3 4 / ${+i+1} task`, 1234);
    
    // spliting strings into chars then pushing them into "empty arrays" of [answerSheet]
    for(let c in answer){
        answersOfFollowingTask.push(+answer[c]);
        answerSheet[i].push(+answer[c]);
    }
}
 
// Checking Selected Value of <select>

let check = document.getElementById("check");

check.addEventListener("click", function(){
    console.log(document.getElementById("selectCheckSheetSec").value);
});

// Select CheckSheetSec

let selectCheckSheetSec = function(){
    checkSheet = [];

    if(document.getElementById("selectCheckSheet").value == 1){
        checkSheet = checkSheetSec1;
    }else if(document.getElementById("selectCheckSheet").value == 2){
        checkSheet = checkSheetSec2;
    }else if(document.getElementById("selectCheckSheet").value == 3){
        checkSheet = checkSheetSec1;
    }else if(document.getElementById("selectCheckSheet").value == 4){
        checkSheet = checkSheetSec1;
    }

    return checkSheet;
}


// Iframe pdf version

    // setting pageNumber in <IFRAME> 'src'

    // pdf version 

    //1 part
    let link = `pdf/mathRep1.pdf#page=${pageNumber}`;
    document.getElementById("iframe_pdf").src = link; 

    //2 part
    if(document.getElementsByClassName("loadFrameCont")[0].style.height == "100%"){
            document.getElementsByClassName("loadFrameCont")[0].style.height = "0%";
            document.getElementById("iframe_pdf").style.height = "0px";
            document.getElementById("loadIframe").innerHTML = "Load Iframe";
    }else{
        document.getElementsByClassName("loadFrameCont")[0].style.height = "100%";
        document.getElementById("iframe_pdf").style.height = "540px";
        document.getElementById("loadIframe").innerHTML = "Disload Iframe";
    }


// Setting [answerSheet] by prompt, code is from (master)

let setAnswerSheet = function(){
        
    // generating [answerSheet] manually

    for(let i in checkSheet){
        // pushing empty arrays to [answerSheet]
        answerSheet.push([]);
    
        // getting 1 2 3 4 answers of the following task
        let answer = prompt(`Please insert the answers of 1 2 3 4 / ${+i+1} task (Section ${selectSec.value})`, 1234) ;
        // let answer = prompt(`Please insert the answers of 1 2 3 4 / ${+i+1} task`, 1234);
        // let answer = setTimeout(prompt(`Please insert the answers of 1 2 3 4 / ${+i+1} task`, 1234), 5000);
        
        // spliting strings into chars then pushing them into "empty arrays" of [answerSheet]
        for(let c in answer){
            answersOfFollowingTask.push(+answer[c]);
            answerSheet[i].push(+answer[c]);
        }
    }

    // generating [answerSheet] automatically
    
    // answerSheet = [[2, 4, 1, 3]
    //     ,[2, 2, "-", 2]
    //     ,[4, 3, 1, 3]
    //     ,[1, 1, 1, 4]
    //     ,[2, 3, 3, 1]
    //     ,[1, 1, 3, 4]
    //     ,[2, 2, 2, 2]
    //     ,[4, 2, "-", 3]
    //     ,[2, 3, 1, 2]
    //     ,[3, 2, 1, 4]];

    // return answerSheet;
}    

// answerStatusTable

function generateAnswerStatusTable(){
    let answerInputTable = document.getElementsByClassName("answerInput_table")[0];
    
        let answerStatusTable = document.createElement("table");
    
        let answerStatusTableBody = document.createElement("tbody");
        // top side (N, 1 2 3 4)
        for(let i = 0; i < 1; i++){
            let row = document.createElement("tr");
            for(let j = 0; j < 1; j++){
                let head = document.createElement("th");
                let headText = document.createTextNode("N");
    
                head.appendChild(headText);
                row.appendChild(head);
            }
            for(let j = 0; j < 4; j++){
                let cell = document.createElement("th");
                let cellText  = document.createTextNode(`${j+1}`);
    
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            answerStatusTableBody.appendChild(row);
        }
        answerStatusTable.appendChild(answerStatusTableBody);
        answerInputTable.appendChild(answerStatusTable);
    
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
                for(let j = 0; j < 4; j++){
                    let cell = document.createElement("td");
                    let cellText = document.createElement("div");
                    cellText.innerHTML = "text";
        
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                }
                answerStatusTableBody.appendChild(row);
            }
        }
}

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// After spliting module.js into modules/filenames.js

// function setAnswerSheet(){
//     // generating [answerSheet] manually // active code 
//     // return answerSheet;
// }        

// else content (when both if and else working together)

// alert("Type valid answer (e.g. 1234, 1---)");
// else{
    // document.getElementById("answerInput").style.color = "red";
    if(document.getElementById("answerInput").value){
        console.log("if2 / string is present");
        console.log(document.getElementById("answerInput").value);
        // document.getElementById("answerInput").value.style.color = "red";
    }else{
        console.log("else2");
    }
// }


////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


// Content (Scroll Effect)

// window.addEventListener("scroll", loadSelectCheckSheet);

// function loadSelectCheckSheet(){
//     if(document.documentElement.scrollTop > 200){
//         document.getElementById("selectCheckSheet").style.animation = "selectCheckSheet 1s linear 1;";
//         // document.getElementById("selectCheckSheet").style.height = "200px";
//         console.log("content");
//     }
// }























