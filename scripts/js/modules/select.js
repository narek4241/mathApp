// Select

// sel year

let selYear = ["2012-13", "2013-14", "2014-15", "2015-16", "2016-17", "2017-18", "2018-19"];

let selYear_Select = document.getElementById("selectCheckSheetYear");

for(let i = 0; i < selYear.length; i++){
    let option = document.createElement("OPTION");

    option.text = `${selYear[i]}`;
    option.value = `${selYear[i]}`;
    selYear_Select.add(option);

    // if(i == 0){
    //     option.text = `2000 Demo`;
    //     option.value = i;
    // }
}

// sel subj

let selSubj = ["Math", "Physics"];

let selSubj_Select = document.getElementById("selectCheckSheetSubj");

for(let i = 0; i < selSubj.length; i++){
    let option = document.createElement("OPTION");

    option.text = `${selSubj[i]}`;
    option.value = `${selSubj[i]}`;
    selSubj_Select.add(option);
}

// sel rep

let selRep = ["1", "2"];

let selRep_Select = document.getElementById("selectCheckSheetRep");

for(let i = 0; i < selRep.length; i++){
    let option = document.createElement("OPTION");

    option.text = `${selRep[i]}`;
    option.value = `${selRep[i]}`;
    selRep_Select.add(option);
}

// sel chap

let selChap = ["1", "2", "3", "4", "5"];

let selChap_Select = document.getElementById("selectCheckSheetChap");

for(let i = 0; i < selChap.length; i++){
    let option = document.createElement("OPTION");

    option.text = `${selChap[i]}`;
    option.value = `${selChap[i]}`;
    selChap_Select.add(option);
}

// sel Sec

let selSec = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

let selSec_Select = document.getElementById("selectCheckSheetSec");

for(let i = 0; i < selSec.length; i++){
    let option = document.createElement("OPTION");

    option.text = `${selSec[i]}`;
    option.value = `${selSec[i]}`;
    selSec_Select.add(option);
}


// def side effect

function selectCheckSheetSec(){
    // console.log("def");
}


// <select>'s 'disabled' nuance (find shorter way to do this stuff, then distribute into whole code)

// getting selects
let subj = document.getElementById('selectCheckSheetSubj');
let year = document.getElementById('selectCheckSheetYear');
let rep = document.getElementById('selectCheckSheetRep');
let chap = document.getElementById('selectCheckSheetChap');
let sec = document.getElementById('selectCheckSheetSec');

// enabling 'disabled' attr
year.disabled = true;
rep.disabled = true;
chap.disabled = true;
sec.disabled = true;

// dismiss 'disabled' attr in case of 'change' evn
subj.addEventListener("change", () => {year.disabled = false;});
year.addEventListener("change", () => {rep.disabled = false;});
rep.addEventListener("change", () => {chap.disabled = false;});
chap.addEventListener("change", () => {sec.disabled = false;});

























