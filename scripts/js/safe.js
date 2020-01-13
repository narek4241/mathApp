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


// selectObject.js content

// Root (~ to subj)

// let rootObj = [mathObj, physObj];

// Subj (year to rep)

let mathObj = {
    'math_y1213' : [math_y1213_rep1, math_y1213_rep1],
    'math_y1314' : [math_y1314_rep1, math_y1314_rep1],
    'math_y1415' : [math_y1415_rep1, math_y1415_rep1],
    'math_y1516' : [math_y1516_rep1, math_y1516_rep1],
    'math_y1617' : [math_y1617_rep1, math_y1617_rep1],
    'math_y1718' : [math_y1718_rep1, math_y1718_rep1],
    'math_y1819' : [math_y1819_rep1, math_y1819_rep1],
};

// let mathObj = [math_y1213, math_y1314, math_y1516, math_y1617, math_y1718, math_y1819];
// let m = [ab, math_y1314, math_y1516, math_y1617, math_y1718, math_y1819];

console.log("1");

// Rep1



// Tasks is below

////////////////////////////////////////////////////////////////////////////////

// source is mathApp0, use if needed

// <!-- Tasks -->
// <!-- 
 ///// 1. every time when pushing "push button" it generates table 'again'DONE
 // 2. validate prompt form unwanted values (wscwsc, 587696 ...) (REGEX)
 // 3. selectCheckSheetSec's   if(.value = 1)...make shorter  use eval() (WARNING)
 ///// 4. build <select> by dom  -> DONE
 ///// 5. embed pdf file in html (youtube) -> DONE
 // 6. add timer animation after generatingTable(); (after stop();) 
 // 7. add quote (text) 'SLIDER' in footer bar (about math, machineLearning)
 // 8. after generating table ...<audio> record 10s ...then after 5s play it (fun!!!) 
 ///// 9. make pdf iframe work on mobile* -> DONE
 ///// 10. make loadIframe to work on many sections at once ...not after refreshing (pageNumbers) -> DONE
 ///// 11. make loadIframe button toggle (load & disload by "one" button) -> DONE
 // 12. make loadIframe animatable toggle crushes sometimes (transition: 2s;) ...now css line is commented
 /// 13. add indexes of answerInput, preferable to add also table which shows which done which not -> half done
 /////14. pushAnswers button "Push Answers" -> "Generate Table" (text changed, id stayed the same) -> DONE
 // 15. add new chapters
 /// 16. numeric keyboard for input (type answers) -> solution (type=number)
 // 17. turn multi-language (arm, eng)
 // 18. timer adjustments (reminder to play, +print result)
 // 19. #answerSubmit review 'visited' (or smth like clicked), in mobile clicked btn remains yellow (like active)
 // 20. take care of fucntionality's working flow without enabling (click) or disabling btns *
 // standard -> build table 
// -->

//////////////////////////////////////////////////////////////////////////////////////

// Iframe ads


// trying to remove (by dom (display:none)) 

// but I can't. XSS protection. Cross site contents can not be read by javascript.

// document.getElementsByClassName('fh5---banner---container')[0];

// document.getElementById('iframe_flip').childNodes;

// document.getElementById('tmpContainer').childNodes;

// document.getElementById('bookContainer');

// #tmpContainer

// document.getElementById('tmpContainer').nextElementSibling.style.display = 'none';

// document.querySelector('#iframe_flip');

// document.getElementById("iframe_flip").contentWindow.document.getElementsByTagName("body");

// setTimeout(function(){setInterval(function(){btn.click; console.log("btn clicked")}, 1000)}, 5000);
// setInterval(function(){btn.click(); console.log("btn clicked")}, 1000);


function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    // document.getElementById("demo").innerHTML = coords;
    console.log(coords);
    // setInterval(function(){console.log(coords)}, 100);
  }

window.addEventListener('click', showCoords);  
// var x = event.clientX;     // Get the horizontal coordinate
// var y = event.clientY;     // Get the vertical coordinate
// var coor = "X coords: " + x + ", Y coords: " + y;

///////////////////////////////////////////////////
// cancel ads

let btn = document.getElementById('cancelIframeAd_Btn');

// setInterval(function(){btn.click(); console.log("btn clicked")});

// $('#cancelIframeAd_Btn').on('click', function() {
//     alert('You clicked: ' + $(this).text());
// });

// x btn has x 590 y 490 cords
let x = 590;
let y = 490;

// document.elementFromPoint(x, y).click();

function click(x,y) {
    var element = document.elementFromPoint(x,y);
    $(element).click();
    console.log("clicked");
 }

//  window.onload = click(590,490);
//  window.onload = setTimeout(function(){click(590,490)}, 10000);

//  

function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    // document.getElementById("demo").innerHTML = coords;
    console.log(coords);
    // setInterval(function(){console.log(coords)}, 100);
  }

window.addEventListener('click', showCoords); 


// cancel ad  ----->>>>> MAIN

// css

/* #cancelIframeAd{
    width: 100%;
    height: 100%;
    background-color: rgba(10,10,10, 0.8);
    position: absolute;
    top: 0%;
    left: 0%;
    overflow: hidden;
}
    #cancelIframeAd_Btn{
        position: absolute;
        border: 1px solid rgb(24, 24, 24);
        background-color: transparent;
        background-color: rgba(100,10,10, 0.8);
        width: 22px;
        height: 22px;
        left: 81.5%;
        top: 78%;
    } */

/* <div id="cancelIframeAd">
    <div id="cancelIframeAd_Btn"></div>
</div>  */

// another options to link pdf file

// let link = `https://cdn.flipsnack.com/widget/v2/widget.html?hash=fz9qdfsmz&p=${pageNumber}`; // up to 30 answerInputBtn
// let link = `pdf/mathRep1.pdf#page=${pageNumber}`; // simple pdf


// Task iframe pageNumber nuance

// let valueSec = document.getElementById("selectCheckSheetSec").value;
    // if(valueSec == 0){pageNumber = 6;}
    // if(valueSec == 1){pageNumber = 6;}
    // else if(valueSec == 2){pageNumber = 14;}
    // else if(valueSec == 3){pageNumber = 36;}
    // else if(valueSec == 4){pageNumber = 53;}
    // else if(valueSec == 5){pageNumber = 67;}
    // else if(valueSec == 6){pageNumber = 80;}
    // else if(valueSec == 7){pageNumber = 93;}
    // else if(valueSec == 8){pageNumber = 104;}
    // else if(valueSec == 9){pageNumber = 122;}
    // else if(valueSec == 10){pageNumber = 134;}


// safe for getting rep keys 

if(selYear == selYearObj[0]){
    if(selYear_Select.value == selYear[0]){
        if(selRep_Select.value == selRepObj[1][0]){
            subjYearRep = mathRepKeys[0][0];
        }else if(selRep_Select.value == selRepObj[1][1]){
            subjYearRep = mathRepKeys[0][1];
        }else if(selRep_Select.value == selRepObj[1][2]){
            subjYearRep = mathRepKeys[0][2];
        }
    }else if(selYear_Select.value == selYear[1]){
        if(selRep_Select.value == selRepObj[1][0]){
            subjYearRep = mathRepKeys[1][0];
        }else if(selRep_Select.value == selRepObj[1][1]){
            subjYearRep = mathRepKeys[1][1];
        }else if(selRep_Select.value == selRepObj[1][2]){
            subjYearRep = mathRepKeys[1][2];
        }
    }else if(selYear_Select.value == selYear[2]){
        selRep = selRepObj[1]; // rep 3
    }else if(selYear_Select.value == selYear[3]){
        selRep = selRepObj[0]; // rep 2
    }else if(selYear_Select.value == selYear[4]){
        selRep = selRepObj[0]; // rep 2
    }else if(selYear_Select.value == selYear[5]){
        selRep = selRepObj[0]; // rep 2
    }else if(selYear_Select.value == selYear[6]){
        selRep = selRepObj[0]; // rep 2
    }
}else if(selYear == selYearObj[1]){
    if(selYear_Select.value == selYear[0]){
        selRep = selRepObj[1]; // rep 3
    }else if(selYear_Select.value == selYear[1]){
        selRep = selRepObj[1]; // rep 3
    }else if(selYear_Select.value == selYear[2]){
        selRep = selRepObj[1]; // rep 3
    }else if(selYear_Select.value == selYear[3]){
        selRep = selRepObj[1]; // rep 3
    }else if(selYear_Select.value == selYear[4]){
        selRep = selRepObj[1]; // rep 3
    }else if(selYear_Select.value == selYear[5]){
        selRep = selRepObj[1]; // rep 3
    }
}


// sel chap nuance looong code

if(selSubj_Select.value == selSubjObj[1]){
    if(selYear_Select.value == selYearObj[1][0]){
        if(selRep_Select.value == selRepObj[1][2][2]){
            selChap = selChapObj[4];
        }
    }else if(selYear_Select.value == selYearObj[1][1]){
        if(selRep_Select.value == selRepObj[1][2][2]){
            selChap = selChapObj[4];
        }
    }else if(selYear_Select.value == selYearObj[1][2]){
        if(selRep_Select.value == selRepObj[1][2][2]){
            selChap = selChapObj[4];
        }
    }else if(selYear_Select.value == selYearObj[1][3]){
        if(selRep_Select.value == selRepObj[1][2][2]){
            selChap = selChapObj[4];
        }
    }else if(selYear_Select.value == selYearObj[1][4]){
        if(selRep_Select.value == selRepObj[1][2][2]){
            selChap = selChapObj[4];
        }
    }else if(selYear_Select.value == selYearObj[1][5]){
        if(selRep_Select.value == selRepObj[1][2][2]){
            selChap = selChapObj[4];
        }
    }
}

// sel sec nuance toooooo loooongg code

if(selSubj_Select.value == selSubjObj[0]){
    if(selYear_Select.value == selYear[0]){
        if(selRep_Select.value == selRep[0]){
            if(selChap_Select.value == selChapObj[2][0]){
                selSec = selSecObj[9];
            }else if(selChap_Select.value == selChapObj[2][1]){
                selSec = selSecObj[7];
            }else if(selChap_Select.value == selChapObj[2][2]){
                selSec = selSecObj[3];
            }
        }else if(selRep_Select.value == selRep[1]){
            if(selChap_Select.value == selChapObj[2][0]){
                selSec = selSecObj[9];
            }else if(selChap_Select.value == selChapObj[2][1]){
                selSec = selSecObj[8];
            }else if(selChap_Select.value == selChapObj[2][2]){
                selSec = selSecObj[4];
            }
        }else if(selRep_Select.value == selRep[2]){
            if(selChap_Select.value == selChapObj[2][0]){
                selSec = selSecObj[9];
            }else if(selChap_Select.value == selChapObj[2][1]){
                selSec = selSecObj[7];
            }else if(selChap_Select.value == selChapObj[2][2]){
                selSec = selSecObj[4];
            }
        }
    }else if(selYear_Select.value == selYear[1]){
        if(selRep_Select.value == selRep[0]){
            if(selChap_Select.value == selChapObj[2][0]){
                selSec = selSecObj[9];
            }else if(selChap_Select.value == selChapObj[2][1]){
                selSec = selSecObj[7];
            }else if(selChap_Select.value == selChapObj[2][2]){
                selSec = selSecObj[3];
            }
        }else if(selRep_Select.value == selRep[1]){
            if(selChap_Select.value == selChapObj[2][0]){
                selSec = selSecObj[9];
            }else if(selChap_Select.value == selChapObj[2][1]){
                selSec = selSecObj[8];
            }else if(selChap_Select.value == selChapObj[2][2]){
                selSec = selSecObj[4];
            }
        }else if(selRep_Select.value == selRep[2]){
            if(selChap_Select.value == selChapObj[2][0]){
                selSec = selSecObj[9];
            }else if(selChap_Select.value == selChapObj[2][1]){
                selSec = selSecObj[7];
            }else if(selChap_Select.value == selChapObj[2][2]){
                selSec = selSecObj[4];
            }
        }
    }else if(selYear_Select.value == selYear[2]){
        if(selRep_Select.value == selRep[0]){
            if(selChap_Select.value == selChapObj[2][0]){
                selSec = selSecObj[9];
            }else if(selChap_Select.value == selChapObj[2][1]){
                selSec = selSecObj[7];
            }else if(selChap_Select.value == selChapObj[2][2]){
                selSec = selSecObj[3];
            }
        }else if(selRep_Select.value == selRep[1]){
            if(selChap_Select.value == selChapObj[0]){
                selSec = selSecObj[9];
            }else if(selChap_Select.value == selChapObj[2][1]){
                selSec = selSecObj[8];
            }else if(selChap_Select.value == selChapObj[2][2]){
                selSec = selSecObj[4];
            }
        }else if(selRep_Select.value == selRep[2]){
            if(selChap_Select.value == selChapObj[2][0]){
                selSec = selSecObj[9];
            }else if(selChap_Select.value == selChapObj[2][1]){
                selSec = selSecObj[7];
            }else if(selChap_Select.value == selChapObj[2][2]){
                selSec = selSecObj[4];
            }
        }
    }else if(selYear_Select.value == selYear[3]){
        if(selRep_Select.value == selRep[0]){
            if(selChap_Select.value == selChapObj[2][0]){
                selSec = selSecObj[9];
            }else if(selChap_Select.value == selChapObj[2][1]){
                selSec = selSecObj[7];
            }else if(selChap_Select.value == selChapObj[2][2]){
                selSec = selSecObj[3];
            }
        }else if(selRep_Select.value == selRep[1]){
            if(selChap_Select.value == selChapObj[2][0]){
                selSec = selSecObj[9];
            }else if(selChap_Select.value == selChapObj[2][1]){
                selSec = selSecObj[7];
            }else if(selChap_Select.value == selChapObj[2][2]){
                selSec = selSecObj[5];
            }
        }
    }else if(selYear_Select.value == selYear[4]){
        if(selRep_Select.value == selRep[0]){
            if(selChap_Select.value == selChapObj[2][0]){
                selSec = selSecObj[9];
            }else if(selChap_Select.value == selChapObj[2][1]){
                selSec = selSecObj[7];
            }else if(selChap_Select.value == selChapObj[2][2]){
                selSec = selSecObj[3];
            }
        }else if(selRep_Select.value == selRep[1]){
            if(selChap_Select.value == selChapObj[2][0]){
                selSec = selSecObj[9];
            }else if(selChap_Select.value == selChapObj[2][1]){
                selSec = selSecObj[7];
            }else if(selChap_Select.value == selChapObj[2][2]){
                selSec = selSecObj[5];
            }
        }
    }else if(selYear_Select.value == selYear[5]){
        if(selRep_Select.value == selRep[0]){
            if(selChap_Select.value == selChapObj[2][0]){
                selSec = selSecObj[9];
            }else if(selChap_Select.value == selChapObj[2][1]){
                selSec = selSecObj[7];
            }else if(selChap_Select.value == selChapObj[2][2]){
                selSec = selSecObj[3];
            }
        }else if(selRep_Select.value == selRep[1]){
            if(selChap_Select.value == selChapObj[2][0]){
                selSec = selSecObj[9];
            }else if(selChap_Select.value == selChapObj[2][1]){
                selSec = selSecObj[7];
            }else if(selChap_Select.value == selChapObj[2][2]){
                selSec = selSecObj[5];
            }
        }
    }else if(selYear_Select.value == selYear[6]){
        if(selRep_Select.value == selRep[0]){
            if(selChap_Select.value == selChapObj[2][0]){
                selSec = selSecObj[9];
            }else if(selChap_Select.value == selChapObj[2][1]){
                selSec = selSecObj[7];
            }else if(selChap_Select.value == selChapObj[2][2]){
                selSec = selSecObj[3];
            }
        }else if(selRep_Select.value == selRep[1]){
            if(selChap_Select.value == selChapObj[2][0]){
                selSec = selSecObj[9];
            }else if(selChap_Select.value == selChapObj[2][1]){
                selSec = selSecObj[7];
            }else if(selChap_Select.value == selChapObj[2][2]){
                selSec = selSecObj[5];
            }
        }
    }
}else if(selSubj_Select.value == selSubjObj[1]){
    if(selYear_Select.value == selYear[0]){
        if(selRep_Select.value == selRep[0]){
            if(selChap_Select.value == selChapObj[2][0]){
                selSec = selSecObj[5];
            }else if(selChap_Select.value == selChapObj[2][1]){
                selSec = selSecObj[7];
                if(selSec.length == 8){
                    for(let i=0; i<6; i++){
                        selSec.shift();
                    }
                }
            }else if(selChap_Select.value == selChapObj[2][2]){
                selSec = selSecObj[12];
                if(selSec.length == 13){
                    for(let i=0; i<8; i++){
                        selSec.shift();
                    }
                }
            }
        }else if(selRep_Select.value == selRep[1]){
            if(selChap_Select.value == selChapObj[2][0]){
                selSec = selSecObj[5];
            }else if(selChap_Select.value == selChapObj[2][1]){
                selSec = selSecObj[7];
                if(selSec.length == 8){
                    for(let i=0; i<6; i++){
                        selSec.shift();
                    }
                }
            }else if(selChap_Select.value == selChapObj[2][2]){
                selSec = selSecObj[12];
                if(selSec.length == 13){
                    for(let i=0; i<8; i++){
                        selSec.shift();
                    }
                }
            }
        }else if(selRep_Select.value == selRep[2]){
            if(selChap_Select.value == selChapObj[4][0]){
                selSec = selSecObj[5];
            }else if(selChap_Select.value == selChapObj[4][1]){
                selSec = selSecObj[7];
                if(selSec.length == 8){
                    for(let i=0; i<6; i++){
                        selSec.shift();
                    }
                }
            }else if(selChap_Select.value == selChapObj[4][2]){
                selSec = selSecObj[10];
                if(selSec.length == 11){
                    for(let i=0; i<8; i++){
                        selSec.shift();
                    }
                }
            }else if(selChap_Select.value == selChapObj[4][3]){
                selSec = selSecObj[11];
                if(selSec.length == 12){
                    for(let i=0; i<11; i++){
                        selSec.shift();
                    }
                }
            }else if(selChap_Select.value == selChapObj[4][4]){
                selSec = selSecObj[12];
                if(selSec.length == 13){
                    for(let i=0; i<12; i++){
                        selSec.shift();
                    }
                }
            }
        }
    }else if(selYear_Select.value == selYear[1]){
        if(selRep_Select.value == selRep[0]){
            if(selChap_Select.value == selChapObj[2][0]){
                selSec = selSecObj[5];
            }else if(selChap_Select.value == selChapObj[2][1]){
                selSec = selSecObj[7];
                if(selSec.length == 8){
                    for(let i=0; i<6; i++){
                        selSec.shift();
                    }
                }
            }else if(selChap_Select.value == selChapObj[2][2]){
                selSec = selSecObj[12];
                if(selSec.length == 13){
                    for(let i=0; i<8; i++){
                        selSec.shift();
                    }
                }
            }
        }else if(selRep_Select.value == selRep[1]){
            if(selChap_Select.value == selChapObj[2][0]){
                selSec = selSecObj[5];
            }else if(selChap_Select.value == selChapObj[2][1]){
                selSec = selSecObj[7];
                if(selSec.length == 8){
                    for(let i=0; i<6; i++){
                        selSec.shift();
                    }
                }
            }else if(selChap_Select.value == selChapObj[2][2]){
                selSec = selSecObj[12];
                if(selSec.length == 13){
                    for(let i=0; i<8; i++){
                        selSec.shift();
                    }
                }
            }
        }else if(selRep_Select.value == selRep[2]){
            if(selChap_Select.value == selChapObj[4][0]){
                selSec = selSecObj[5];
            }else if(selChap_Select.value == selChapObj[4][1]){
                selSec = selSecObj[7];
                if(selSec.length == 8){
                    for(let i=0; i<6; i++){
                        selSec.shift();
                    }
                }
            }else if(selChap_Select.value == selChapObj[4][2]){
                selSec = selSecObj[10];
                if(selSec.length == 11){
                    for(let i=0; i<8; i++){
                        selSec.shift();
                    }
                }
            }else if(selChap_Select.value == selChapObj[4][3]){
                selSec = selSecObj[11];
                if(selSec.length == 12){
                    for(let i=0; i<11; i++){
                        selSec.shift();
                    }
                }
            }else if(selChap_Select.value == selChapObj[4][4]){
                selSec = selSecObj[12];
                if(selSec.length == 13){
                    for(let i=0; i<12; i++){
                        selSec.shift();
                    }
                }
            }
        }
    }else if(selYear_Select.value == selYear[2]){
        if(selRep_Select.value == selRep[0]){
            if(selChap_Select.value == selChapObj[2][0]){
                selSec = selSecObj[5];
            }else if(selChap_Select.value == selChapObj[2][1]){
                selSec = selSecObj[7];
                if(selSec.length == 8){
                    for(let i=0; i<6; i++){
                        selSec.shift();
                    }
                }
            }else if(selChap_Select.value == selChapObj[2][2]){
                selSec = selSecObj[12];
                if(selSec.length == 13){
                    for(let i=0; i<8; i++){
                        selSec.shift();
                    }
                }
            }
        }else if(selRep_Select.value == selRep[1]){
            if(selChap_Select.value == selChapObj[2][0]){
                selSec = selSecObj[5];
            }else if(selChap_Select.value == selChapObj[2][1]){
                selSec = selSecObj[7];
                if(selSec.length == 8){
                    for(let i=0; i<6; i++){
                        selSec.shift();
                    }
                }
            }else if(selChap_Select.value == selChapObj[2][2]){
                selSec = selSecObj[12];
                if(selSec.length == 13){
                    for(let i=0; i<8; i++){
                        selSec.shift();
                    }
                }
            }
        }else if(selRep_Select.value == selRep[2]){
            if(selChap_Select.value == selChapObj[4][0]){
                selSec = selSecObj[5];
            }else if(selChap_Select.value == selChapObj[4][1]){
                selSec = selSecObj[7];
                if(selSec.length == 8){
                    for(let i=0; i<6; i++){
                        selSec.shift();
                    }
                }
            }else if(selChap_Select.value == selChapObj[4][2]){
                selSec = selSecObj[10];
                if(selSec.length == 11){
                    for(let i=0; i<8; i++){
                        selSec.shift();
                    }
                }
            }else if(selChap_Select.value == selChapObj[4][3]){
                selSec = selSecObj[11];
                if(selSec.length == 12){
                    for(let i=0; i<11; i++){
                        selSec.shift();
                    }
                }
            }else if(selChap_Select.value == selChapObj[4][4]){
                selSec = selSecObj[12];
                if(selSec.length == 13){
                    for(let i=0; i<12; i++){
                        selSec.shift();
                    }
                }
            }
        }
    }else if(selYear_Select.value == selYear[3]){
        if(selRep_Select.value == selRep[0]){
            if(selChap_Select.value == selChapObj[2][0]){
                selSec = selSecObj[5];
            }else if(selChap_Select.value == selChapObj[2][1]){
                selSec = selSecObj[7];
                if(selSec.length == 8){
                    for(let i=0; i<6; i++){
                        selSec.shift();
                    }
                }
            }else if(selChap_Select.value == selChapObj[2][2]){
                selSec = selSecObj[12];
                if(selSec.length == 13){
                    for(let i=0; i<8; i++){
                        selSec.shift();
                    }
                }
            }
        }else if(selRep_Select.value == selRep[1]){
            if(selChap_Select.value == selChapObj[2][0]){
                selSec = selSecObj[5];
            }else if(selChap_Select.value == selChapObj[2][1]){
                selSec = selSecObj[7];
                if(selSec.length == 8){
                    for(let i=0; i<6; i++){
                        selSec.shift();
                    }
                }
            }else if(selChap_Select.value == selChapObj[2][2]){
                selSec = selSecObj[12];
                if(selSec.length == 13){
                    for(let i=0; i<8; i++){
                        selSec.shift();
                    }
                }
            }
        }else if(selRep_Select.value == selRep[2]){
            if(selChap_Select.value == selChapObj[4][0]){
                selSec = selSecObj[5];
            }else if(selChap_Select.value == selChapObj[4][1]){
                selSec = selSecObj[7];
                if(selSec.length == 8){
                    for(let i=0; i<6; i++){
                        selSec.shift();
                    }
                }
            }else if(selChap_Select.value == selChapObj[4][2]){
                selSec = selSecObj[10];
                if(selSec.length == 11){
                    for(let i=0; i<8; i++){
                        selSec.shift();
                    }
                }
            }else if(selChap_Select.value == selChapObj[4][3]){
                selSec = selSecObj[11];
                if(selSec.length == 12){
                    for(let i=0; i<11; i++){
                        selSec.shift();
                    }
                }
            }else if(selChap_Select.value == selChapObj[4][4]){
                selSec = selSecObj[12];
                if(selSec.length == 13){
                    for(let i=0; i<12; i++){
                        selSec.shift();
                    }
                }
            }
        }
    }else if(selYear_Select.value == selYear[4]){
        if(selRep_Select.value == selRep[0]){
            if(selChap_Select.value == selChapObj[2][0]){
                selSec = selSecObj[5];
            }else if(selChap_Select.value == selChapObj[2][1]){
                selSec = selSecObj[7];
                if(selSec.length == 8){
                    for(let i=0; i<6; i++){
                        selSec.shift();
                    }
                }
            }else if(selChap_Select.value == selChapObj[2][2]){
                selSec = selSecObj[12];
                if(selSec.length == 13){
                    for(let i=0; i<8; i++){
                        selSec.shift();
                    }
                }
            }
        }else if(selRep_Select.value == selRep[1]){
            if(selChap_Select.value == selChapObj[2][0]){
                selSec = selSecObj[5];
            }else if(selChap_Select.value == selChapObj[2][1]){
                selSec = selSecObj[7];
                if(selSec.length == 8){
                    for(let i=0; i<6; i++){
                        selSec.shift();
                    }
                }
            }else if(selChap_Select.value == selChapObj[2][2]){
                selSec = selSecObj[12];
                if(selSec.length == 13){
                    for(let i=0; i<8; i++){
                        selSec.shift();
                    }
                }
            }
        }else if(selRep_Select.value == selRep[2]){
            if(selChap_Select.value == selChapObj[4][0]){
                selSec = selSecObj[5];
            }else if(selChap_Select.value == selChapObj[4][1]){
                selSec = selSecObj[7];
                if(selSec.length == 8){
                    for(let i=0; i<6; i++){
                        selSec.shift();
                    }
                }
            }else if(selChap_Select.value == selChapObj[4][2]){
                selSec = selSecObj[10];
                if(selSec.length == 11){
                    for(let i=0; i<8; i++){
                        selSec.shift();
                    }
                }
            }else if(selChap_Select.value == selChapObj[4][3]){
                selSec = selSecObj[11];
                if(selSec.length == 12){
                    for(let i=0; i<11; i++){
                        selSec.shift();
                    }
                }
            }else if(selChap_Select.value == selChapObj[4][4]){
                selSec = selSecObj[12];
                if(selSec.length == 13){
                    for(let i=0; i<12; i++){
                        selSec.shift();
                    }
                }
            }
        }
    }else if(selYear_Select.value == selYear[5]){
        if(selRep_Select.value == selRep[0]){
            if(selChap_Select.value == selChapObj[2][0]){
                selSec = selSecObj[5];
            }else if(selChap_Select.value == selChapObj[2][1]){
                selSec = selSecObj[7];
                if(selSec.length == 8){
                    for(let i=0; i<6; i++){
                        selSec.shift();
                    }
                }
            }else if(selChap_Select.value == selChapObj[2][2]){
                selSec = selSecObj[12];
                if(selSec.length == 13){
                    for(let i=0; i<8; i++){
                        selSec.shift();
                    }
                }
            }
        }else if(selRep_Select.value == selRep[1]){
            if(selChap_Select.value == selChapObj[2][0]){
                selSec = selSecObj[5];
            }else if(selChap_Select.value == selChapObj[2][1]){
                selSec = selSecObj[7];
                if(selSec.length == 8){
                    for(let i=0; i<6; i++){
                        selSec.shift();
                    }
                }
            }else if(selChap_Select.value == selChapObj[2][2]){
                selSec = selSecObj[12];
                if(selSec.length == 13){
                    for(let i=0; i<8; i++){
                        selSec.shift();
                    }
                }
            }
        }else if(selRep_Select.value == selRep[2]){
            if(selChap_Select.value == selChapObj[4][0]){
                selSec = selSecObj[5];
            }else if(selChap_Select.value == selChapObj[4][1]){
                selSec = selSecObj[7];
                if(selSec.length == 8){
                    for(let i=0; i<6; i++){
                        selSec.shift();
                    }
                }
            }else if(selChap_Select.value == selChapObj[4][2]){
                selSec = selSecObj[10];
                if(selSec.length == 11){
                    for(let i=0; i<8; i++){
                        selSec.shift();
                    }
                }
            }else if(selChap_Select.value == selChapObj[4][3]){
                selSec = selSecObj[11];
                if(selSec.length == 12){
                    for(let i=0; i<11; i++){
                        selSec.shift();
                    }
                }
            }else if(selChap_Select.value == selChapObj[4][4]){
                selSec = selSecObj[12];
                if(selSec.length == 13){
                    for(let i=0; i<12; i++){
                        selSec.shift();
                    }
                }
            }
        }
    }
}


// selSec shift nuance

// if(selSubj_Select.value == selSubj[1]){
    console.log("mdav if2");

    selSec = selSecObj[subj][year][rep][chap];
    // if(selSec.length == chap){
        console.log("mdav if3");
        for(let i=0; i < 5; i++){
            selSec.shift();
        }
    // }
// }

// Manual scroll elem by elem poor code but works correctly

// Scroll Header 

// function scrollHeader(){
//     document.getElementById('mainBody').style.overflow = 'visible';
//     let scrollDown = `${document.getElementById("header").style.height}`;

//     scrollDown = scrollDown.substring(0, scrollDown.length - 2);
//     scrollDown = +scrollDown + +headerScrollDown
//     window.scrollTo(0, scrollDown);

//     headerScrollDown = scrollDown;
// }


// Scroll Timer

// function scrollTimer(){
//     let scrollDown = `${document.getElementById("timer").style.height}`;

//     scrollDown = scrollDown.substring(0, scrollDown.length - 2);
//     scrollDown = +scrollDown + +headerScrollDown
//     window.scrollTo(0, scrollDown);

//     timerScrollDown = scrollDown;
// }


// Scroll Select

// function scrollSelect(){
//     let scrollDown = `${document.getElementById("selectCheckSheet").style.height}`;

//     scrollDown = scrollDown.substring(0, scrollDown.length - 2);
//     scrollDown = +scrollDown + +timerScrollDown
//     window.scrollTo(0, scrollDown);

//     selectScrollDown = scrollDown;
// }


// Scroll Iframe

// function scrollIframe(){
//     let scrollDown = `${document.getElementById('loadIframe').style.height}`;

//     scrollDown = scrollDown.substring(0, scrollDown.length - 2);
//     // scrollDown += +`50`;
//     scrollDown = +scrollDown + +selectScrollDown;
//     window.scrollTo(0, scrollDown);

//     iframeScrollDown = scrollDown;
// }


// Def

// function scrollPageTo(selector, prevElemScrollDown, selectorScrollDown){
//     let scrollDown = `${document.getElementById(`${selector}`).style.height}`;

//     scrollDown = scrollDown.substring(0, scrollDown.length - 2);
//     scrollDown = +scrollDown + +`${prevElemScrollDown}`;
//     window.scrollTo(0, scrollDown);

//     selectorScrollDown = scrollDown;
// }










