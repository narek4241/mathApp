// NOTE : space to update code (to look well, reduce ...)

// Scrolling page to the 0 point (while refreshing)
window.scrollTo(1, 0);


// Scroll Header

let headerGetStartedBtn = document.getElementById('headerGetStartedBtn');
let header = document.getElementById('header');

headerGetStartedBtn.addEventListener('click', function () {
    header.style.animation = "page-slide-next 1s forwards 1";
});


// Scroll Timer

let startTimerBtn = document.getElementById('sub_startTimer');
let timer = document.getElementById('timer');

startTimerBtn.addEventListener('click', function () {
    timer.style.animation = "page-slide-next 1s forwards 1";
});


// Scroll Select

let selectBtn = document.getElementById('selectCheckSheetSec');
let select = document.getElementById('select');

selectBtn.addEventListener('change', function () {
    select.style.animation = "page-slide-next 1s forwards 1";
});

scrollSelect.addEventListener('click', function () {
    select.style.animation = "page-slide-next 1s forwards 1";
});


// Scroll TakeCare

let takeCareBtn = document.getElementById('takeCare');
let takeCare = document.getElementById('takeCare');

takeCareBtn.addEventListener('click', function () {
    takeCare.style.animation = "page-slide-next 1s forwards 1";
});


// Scroll Iframe

let startIframeBtn = document.getElementById('loadIframe');
let iframe0 = document.getElementById('iframe');
let iframeBtnClicks = 0;

startIframeBtn.addEventListener('click', function () {
    if(iframeBtnClicks % 2 !== 0){
        iframe0.style.animation = "page-slide-next 1s forwards 1";
    }
    iframeBtnClicks++;
});


// Answers

let answerInputBtn = document.getElementById('answerInputBtn');
let answers = document.getElementById('answers');
let answerInputBtnClicks = 0;

answerInputBtn.addEventListener('click', function () {
    if(answerInputBtnClicks % 2 !== 0){
        answers.style.animation = "page-slide-next 1s forwards 1";
    }
    answerInputBtnClicks++;
});



// Result Table

let resultTableBtn = document.getElementById('resultTableBtn');
let resultTable = document.getElementById('resultTable');
let resultTableBtnClicks = 0;

resultTableBtn.addEventListener('click', function () {
    if(resultTableBtnClicks % 2 !== 0){
        resultTable.style.animation = "page-slide-next 1s forwards 1";
    }
    resultTableBtnClicks++;
});


// Footer

let footerBtn = document.getElementById('footer');
let footer = document.getElementById('footer');

footerBtn.addEventListener('click', function () {
    header.style.animation = "page-slide-back 1s forwards 1";
    timer.style.animation = "page-slide-back 1s forwards 1";
    select.style.animation = "page-slide-back 1s forwards 1";
    takeCare.style.animation = "page-slide-back 1s forwards 1";
    iframe.style.animation = "page-slide-back 1s forwards 1";
    answers.style.animation = "page-slide-back 1s forwards 1";
    resultTable.style.animation = "page-slide-back 1s forwards 1";
});




















