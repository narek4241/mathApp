// Select

// Sel Object

let selSubjObj = ["Math", "Phys"];
let selYearObj = [["2012-13", "2013-14", "2014-15", "2015-16", "2016-17", "2017-18", "2018-19"], ["2013-14", "2014-15", "2015-16", "2016-17", "2017-18", "2018-19"]];
let selRepObj = [["1", "2"], ["1", "2", "3"]];
// let selChapObj = ["1", "2", "3"];
let selChapObj = [["1"], ["1", "2"], ["1", "2", "3"], ["1", "2", "3", "4"], ["1", "2", "3", "4", "5"], ];
let selSecObj = [["1"], ["1", "2"], ["1", "2", "3"], ["1", "2", "3", "4"], ["1", "2", "3", "4", "5"], ["1", "2", "3", "4", "5", "6"],
["1", "2", "3", "4", "5", "6", "7"], ["1", "2", "3", "4", "5", "6", "7", "8"], ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"], ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"], 
["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"], 
["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"], ];

// Sel subj

let selSubj_Select = document.getElementById("selectCheckSheetSubj");

selSubj = selSubjObj;

// generating subj options
genSelectOption(selSubj_Select, selSubj);

selSubj_Select.addEventListener("change", genYearBySubj);

// set [selYear] depending on [selSubj]
function genYearBySubj(){
    if(selSubj_Select.value == selSubj[0]){
        selYear = selYearObj[0];
    }else if(selSubj_Select.value == selSubj[1]){
        selYear = selYearObj[1];
    }
    // generating year options
    genSelectOption(selYear_Select, selYear);
}



// Sel year 

let selYear_Select = document.getElementById("selectCheckSheetYear");

selYear_Select.disabled = true;

selYear_Select.addEventListener("change", genRepByYear);

// set [selRep] depending on [selYear]
function genRepByYear(){
    if(selYear == selYearObj[0]){
        if(selYear_Select.value == selYear[0]){
            selRep = selRepObj[1]; // rep 3
        }else if(selYear_Select.value == selYear[1]){
            selRep = selRepObj[1]; // rep 3
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
    // generating rep options
    genSelectOption(selRep_Select, selRep);
}



// Sel rep

let selRep_Select = document.getElementById("selectCheckSheetRep");

selRep_Select.disabled = true;

selRep_Select.addEventListener("change", genChapByRep);

function genChapByRep(){
    // setting default (3 chap)
    selChap = selChapObj[2];
    // exception (phys *year *3rdRep has 5 chap)
    if(selSubj_Select.value == selSubjObj[1]){
        if(selYear_Select.value == selYearObj[1][0]){
            if(selRep_Select.value == selRepObj[1][2]){
                selChap = selChapObj[4];
            }
        }else if(selYear_Select.value == selYearObj[1][1]){
            if(selRep_Select.value == selRepObj[1][2]){
                selChap = selChapObj[4];
            }
        }else if(selYear_Select.value == selYearObj[1][2]){
            if(selRep_Select.value == selRepObj[1][2]){
                selChap = selChapObj[4];
            }
        }else if(selYear_Select.value == selYearObj[1][3]){
            if(selRep_Select.value == selRepObj[1][2]){
                selChap = selChapObj[4];
            }
        }else if(selYear_Select.value == selYearObj[1][4]){
            if(selRep_Select.value == selRepObj[1][2]){
                selChap = selChapObj[4];
            }
        }else if(selYear_Select.value == selYearObj[1][5]){
            if(selRep_Select.value == selRepObj[1][2]){
                selChap = selChapObj[4];
            }
        }
    }
    // generating rep options
    genSelectOption(selChap_Select, selChap);
}



// sel chap

let selChap_Select = document.getElementById("selectCheckSheetChap");

selChap_Select.disabled = true;

selChap_Select.addEventListener("change", genSecByChap);

function genSecByChap(){
    selSec = selSecObj;
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
    // generating rep options
    genSelectOption(selSec_Select, selSec);
}



// Sel sec

let selSec_Select = document.getElementById("selectCheckSheetSec");

let selSec;

selSec_Select.disabled = true;

selSec_Select.addEventListener("change", genAnswersheetBySec);

function genAnswersheetBySec(){
    // #task add answersheet nuance
}






// function declarations

function genSelectOption(selFilter_Select, selFilter){
    // avoiding from overgen options
    selFilter_Select.options.length = 1;
    // gen options
    for(let i = 0; i < selFilter.length; i++){
        let option = document.createElement("OPTION");
        option.text = `${selFilter[i]}`;
        option.value = `${selFilter[i]}`;
        selFilter_Select.add(option);
    }
    selFilter_Select.disabled = false;
}






























