
let answersanswPushInputMethodod = [];

// #task turn into strict mode 
let answerNumberInSingleTask;
let answerRegexp;

// 4 x 1 in single form
function answPushInputMethod1() {
    let parent = document.getElementById('answInpContForm');

    let inp = document.createElement("INPUT");
    inp.setAttribute("type", "text");

    parent.appendChild(inp);

    parent.children[0].id = 'answerInput';
    parent.children[0].placeholder = 'Insert Answers:';
    parent.children[0].maxLength = '4';

    answerRegexp = /[1-4-]{4}/;
    // used in statTbl and resTbl
    answerNumberInSingleTask = 4;
}

// 4 x 1 in 4 forms
function answPushInputMethod2(answerNumberInSingleTask) {
    let parent = document.getElementById('answInpContForm');

    let index = ['1st', '2nd', '3rd', '4th'];

     // used in statTbl and resTbl
    //  answerNumberInSingleTask = 4;
     // answerNumberInSingleTask = 2;

    for (let i = 0; i < answerNumberInSingleTask; i++) {
        inp = document.createElement("INPUT");
        inp.setAttribute("type", "text");
        parent.appendChild(inp);

        parent.children[i].className = 'answInpContForm__input';
        parent.children[i].placeholder = `Ins ${index[i]}`;
        parent.children[i].maxLength = '3';

        parent.children[i].id = `answerInput${i + 1}`;
    }

    // 1. starts & ends 1.1 '0' only, 1.2 '-' only, 2. starts in any num except 0 then 0-2 times any num
    answerRegexp = /^[0]$|^-$|^[1-9]{1}[0-9]{0,2}$/;
   
}

// 6 x 1 in single form
function answPushInputMethod3() {
    let parent = document.getElementById('answInpContForm');

    let inp = document.createElement("INPUT");
    inp.setAttribute("type", "text");

    parent.appendChild(inp);

    parent.children[0].id = 'answerInput';
    parent.children[0].placeholder = 'Insert Answers: TrWr';
    parent.children[0].maxLength = '6';

    answerRegexp = /[0-1-]{6}/;
    // used in statTbl and resTbl
    answerNumberInSingleTask = 6;
}

function selectingMethodOfPushingAnswer() {
    if (document.getElementById('selectCheckSheetSubj').value == 'Math') {
        if (document.getElementById('selectCheckSheetChap').value == '1') {

            answPushInputMethod1();

            submitAnswerInput.addEventListener("click", getValueAnswerInput);

        } else if (document.getElementById('selectCheckSheetChap').value == '2') {
            
            answPushInputMethod2(4);

            submitAnswerInput.addEventListener("click", getValueMultiAnswerInput);
            
        } else if (document.getElementById('selectCheckSheetChap').value == '3') {
            
            answPushInputMethod3();
            
            submitAnswerInput.addEventListener("click", getValueAnswerInput);
        }
    } else {
        // def 4x1 method (multi answers)
        
        answPushInputMethod2(4);
        
        submitAnswerInput.addEventListener("click", getValueMultiAnswerInput);
    }
}