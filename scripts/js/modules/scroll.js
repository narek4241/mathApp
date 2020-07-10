// Setting overflow hidden 
// document.getElementById('mainBody').style.overflow = `hidden`;

// Scrolling page to the 0 point (while refreshing)
window.scrollTo(1, 0);



// receiveing any changes of screen size height => changes of elementScrollDown
// window.addEventListener('resize', refreshElemScrollNext);

// function refreshElemScrollNext() {
//     headerScrollNext = innerWidth;
//     timerScrollNext = innerWidth;
//     selectScrollNext = innerWidth;
//     takeCareScrollNext = innerWidth;
//     iframeScrollNext = innerWidth;
// }

// Scroll Header

let headerGetStartedBtn = document.getElementById('headerGetStartedBtn');

let headerScrollNext = innerWidth;



headerGetStartedBtn.addEventListener('click', function () {
    window.scrollTo(headerScrollNext, 0);
    window.scrollTo(100, 100);
});


// Scroll Timer

let startTimerBtn = document.getElementById('sub_startTimer');

let timerScrollNext = innerWidth;

startTimerBtn.addEventListener('click', function () {
    window.scrollTo(headerScrollNext + timerScrollNext, 0)
});


// Scroll Select

let selectBtn = document.getElementById('selectCheckSheetSec');

let selectScrollNext = innerWidth;

selectBtn.addEventListener('change', function () {
    window.scrollTo(headerScrollNext + timerScrollNext + selectScrollNext, 0)
});

scrollSelect.addEventListener('click', function () {
    window.scrollTo(headerScrollNext + timerScrollNext + selectScrollNext, 0)
});


// Scroll TakeCare

let takeCareBtn = document.getElementById('takeCare');

let takeCareScrollNext = innerWidth;

takeCareBtn.addEventListener('click', function () {
    window.scrollTo(headerScrollNext + timerScrollNext + selectScrollNext + takeCareScrollNext, 0)
});



// Scroll Iframe

let startIframeBtn = document.getElementById('loadIframe');

let iframeScrollNext = innerWidth;

let iframeBtnClicks = 0;

startIframeBtn.addEventListener('click', function () {
    if(iframeBtnClicks % 2 !== 0){
        window.scrollTo(headerScrollNext + timerScrollNext + selectScrollNext 
            + takeCareScrollNext + iframeScrollNext, 0)
    }
    iframeBtnClicks++;
});


// Scroll Insert Answers

document.getElementById("answerInputBtn").style.height = '50px';

let startInsAnswBtn = document.getElementById('answerInputBtn');

// later global use
let insAnswScrollDown = document.getElementById("answerInputBtn").style.height;
insAnswScrollDown = +(insAnswScrollDown.substring(0, insAnswScrollDown.length - 2));
// insAnswScrollDown += iframeScrollDown;

// let loaderInsAnswScroll;

// if(loaderInsAnswScroll == 1){
//     startInsAnswBtn.addEventListener('click', function(){setTimeout(scrollPageTo('answerInputBtn', 'insAnswScrollDown', iframeScrollDown), 250)});
// }























