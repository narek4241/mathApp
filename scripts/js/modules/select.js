// SELECT

// Set <SELECT> (sections) by dom

// Reps, Chapters, Sections
rep1_chap1_secNum = 10;

let selectSec = document.createElement("SELECT");
    selectSec.id = "selectCheckSheetSec";

    document.getElementById("selectSec").appendChild(selectSec);

    for(let i = 0; i < rep1_chap1_secNum + 1; i++){
        let option = document.createElement("OPTION");

        option.text = `Section ${i}`;
        option.value = i;
        selectSec.add(option);

        // console.log(`SecOptVal ${option.value}`);

        if(i == 0){
            option.text = `Section ${i} Demo`;
            option.value = i;
        }
    }

    

// Setting [checkSheet] -> Select [chechSheetSec]

// [checkSheetSec] "resource" is in 'database.js'

function selectCheckSheetSec(){
    
    checkSheet = [];
    // Find shorter way to execute code below
    if(document.getElementById("selectCheckSheetSec").value == 1){
        checkSheet = checkSheetSec1;
    }else if(document.getElementById("selectCheckSheetSec").value == 2){
        checkSheet = checkSheetSec2;
    }else if(document.getElementById("selectCheckSheetSec").value == 3){
        checkSheet = checkSheetSec3;
    }else if(document.getElementById("selectCheckSheetSec").value == 4){
        checkSheet = checkSheetSec4;
    }else if(document.getElementById("selectCheckSheetSec").value == 5){
        checkSheet = checkSheetSec5;
    }else if(document.getElementById("selectCheckSheetSec").value == 6){
        checkSheet = checkSheetSec6;
    }else if(document.getElementById("selectCheckSheetSec").value == 7){
        checkSheet = checkSheetSec7;
    }else if(document.getElementById("selectCheckSheetSec").value == 8){
        checkSheet = checkSheetSec8;
    }else if(document.getElementById("selectCheckSheetSec").value == 9){
        checkSheet = checkSheetSec9;
    }else if(document.getElementById("selectCheckSheetSec").value == 10){
        checkSheet = checkSheetSec10;
    }
    // demo [checkSheet], sec 0
    else if(document.getElementById("selectCheckSheetSec").value == 0){
        checkSheet = checkSheetSec0;
    }
    
    return checkSheet;
}