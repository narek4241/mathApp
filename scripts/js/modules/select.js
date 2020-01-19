// Select

// Sel subj

let selSubj_Select = document.getElementById("selectCheckSheetSubj");

selSubj = selSubjObj;

// generating subj options
genSelectOption(selSubj_Select, selSubj);

selSubj_Select.addEventListener("change", genYearBySubj);

// set [selYear] depending on [selSubj]
function genYearBySubj(){
    for(let subj = 0; subj < selSubj.length; subj++){
        if(selSubj_Select.value == selSubj[subj]){
            selYear = selYearObj[subj];
            break;
        }
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
    // Setting selRep
    for(let subj = 0; subj < selSubj.length; subj++){
        if(selSubj_Select.value == selSubj[subj]){
            for(let year = 0; year < selYear.length; year++){
                if(selYear_Select.value == selYear[year]){
                    selRep = selRepObj[subj][year];
                    break;
                }
            }
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
    // Setting selChap
    // Setting subjYearRep depending on (Subj>Year>Rep)
    for(let subj = 0; subj < selSubj.length; subj++){
        if(selSubj_Select.value == selSubj[subj]){
            for(let year = 0; year < selYear.length; year++){
                if(selYear_Select.value == selYear[year]){
                    for(let rep = 0; rep < selRep.length; rep++){
                        if(selRep_Select.value == selRep[rep]){
                            selChap = selChapObj[subj][year][rep];
                            subjYearRep = repKeys[subj][year][rep];
                            break;
                        }
                    }
                }
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

// #task add shift nuance in phys secs

function genSecByChap(){
    selSec = selSecObj;

    // Setting selSec
    for(let subj = 0; subj < selSubj.length; subj++){
        if(selSubj_Select.value == selSubj[subj]){
            for(let year = 0; year < selYear.length; year++){
                if(selYear_Select.value == selYear[year]){
                    for(let rep = 0; rep < selRep.length; rep++){
                        if(selRep_Select.value == selRep[rep]){
                            for(let chap = 0; chap < selChap.length; chap++){
                                if(selChap_Select.value == selChap[chap]){
                                    selSec = selSecObj[subj][year][rep][chap];
                                }
                            }
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

selSec_Select.addEventListener("change", genCheckSheetBySec);

function genCheckSheetBySec(){
    // Setting selAnswersheet
    // Setting pageNumber
    for(let subj = 0; subj < selSubj.length; subj++){
        if(selSubj_Select.value == selSubj[subj]){
            for(let year = 0; year < selYear.length; year++){
                if(selYear_Select.value == selYear[year]){
                    for(let rep = 0; rep < selRep.length; rep++){
                        if(selRep_Select.value == selRep[rep]){
                            for(let chap = 0; chap < selChap.length; chap++){
                                if(selChap_Select.value == selChap[chap]){
                                    for(let sec = 0; sec < selSec.length; sec++){
                                        if(selSec_Select.value == selSec[sec]){
                                            pageNumber = secPageNumbers[subj][year][rep][chap][sec];
                                            // console.log('checking overload times');
                                            checkSheet = secChecksheets[subj][year][rep][chap][sec];
                                            // console.log(`sel-ed checkSheet ${checkSheet}`);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

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


// clear select
let clearBtn = document.getElementById("clearSelect");

// clearBtn.disabled = true;

clearBtn.addEventListener("dblclick", clearSelect);

function clearSelect(){
    
    selSubj_Select.value = "";
    selYear_Select.value = "";
    selYear_Select.disabled = true;

    selRep_Select.value = "";
    selRep_Select.disabled = true;

    selChap_Select.value = "";
    selChap_Select.disabled = true;
    
    selSec_Select.value = "";
    selSec_Select.disabled = true;

    // repKeys = "";
    // secPageNumbers = "";
}





















































