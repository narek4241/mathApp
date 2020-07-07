// Setting overflow hidden 
// document.getElementById('mainBody').style.overflow = `hidden`;

// Scrolling page to the 0 point (while refreshing)
window.scrollTo(0, 1);



// receiveing any changes of screen size height => changes of elementScrollDown
window.addEventListener('resize', refreshElemScrollDown);

function refreshElemScrollDown() {
    headerScrollDown = innerHeight + 35;
    timerScrollDown = innerHeight + 35;
    selectScrollDown = innerHeight + 35;
    takeCareScrollDown = innerHeight + 35;
    iframeScrollDown = innerHeight + 35;
}

// Scroll Header

let headerGetStartedBtn = document.getElementById('headerGetStartedBtn');

let headerScrollDown = innerHeight + 35;


headerGetStartedBtn.addEventListener('click', function () {
    window.scrollTo(0, headerScrollDown)
});


// Scroll Timer

let startTimerBtn = document.getElementById('sub_startTimer');

let timerScrollDown = innerHeight + 35;

startTimerBtn.addEventListener('click', function () {
    window.scrollTo(0, headerScrollDown + timerScrollDown)
});


// Scroll Select

let selectBtn = document.getElementById('selectCheckSheetSec');

let selectScrollDown = innerHeight + 35;

selectBtn.addEventListener('change', function () {
    window.scrollTo(0, headerScrollDown + timerScrollDown + selectScrollDown)
});

scrollSelect.addEventListener('click', function () {
    window.scrollTo(0, headerScrollDown + timerScrollDown + selectScrollDown)
});


// Scroll TakeCare

let takeCareBtn = document.getElementById('takeCare');

let takeCareScrollDown = innerHeight + 35;

takeCareBtn.addEventListener('click', function () {
    window.scrollTo(0, headerScrollDown + timerScrollDown + selectScrollDown + takeCareScrollDown)
});



// Scroll Iframe

let startIframeBtn = document.getElementById('loadIframe');

let iframeScrollDown = innerHeight + 35;

let iframeBtnClicks = 0;

startIframeBtn.addEventListener('click', function () {
    if(iframeBtnClicks % 2 !== 0){
        window.scrollTo(0, headerScrollDown + timerScrollDown + selectScrollDown 
            + takeCareScrollDown + iframeScrollDown)
    }
    iframeBtnClicks++;
});


// Scroll Insert Answers

document.getElementById("answerInputBtn").style.height = '50px';

let startInsAnswBtn = document.getElementById('answerInputBtn');

// later global use
let insAnswScrollDown = document.getElementById("answerInputBtn").style.height;
insAnswScrollDown = +(insAnswScrollDown.substring(0, insAnswScrollDown.length - 2));
insAnswScrollDown += iframeScrollDown;

// let loaderInsAnswScroll;

// if(loaderInsAnswScroll == 1){
//     startInsAnswBtn.addEventListener('click', function(){setTimeout(scrollPageTo('answerInputBtn', 'insAnswScrollDown', iframeScrollDown), 250)});
// }























