// Setting overflow hidden 
// document.getElementById('mainBody').style.overflow = `hidden`;

// Scrolling page to the 0 point (while refreshing)
window.scrollTo(0, 1);



// Scroll Header

let headerGetStartedBtn = document.getElementById('headerGetStartedBtn');

// later global use
// let headerScrollDown = document.getElementById("header").style.height;
let headerScrollDown = innerHeight + 35;
console.log(`headerScrollDown ${headerScrollDown}`);


// headerScrollDown = +(headerScrollDown.substring(0, headerScrollDown.length - 2));

// headerGetStartedBtn.addEventListener('click', function(){
//     setTimeout(scrollPageTo('header', 'headerScrollDown', 0),
//     document.getElementById('mainBody').style.overflow = 'visible', 250)});


headerGetStartedBtn.addEventListener('click', function(){
    window.scrollTo(0, headerScrollDown)});

        // setTimeout(scrollPageTo('header', 'headerScrollDown', 0),
        // document.getElementById('mainBody').style.overflow = 'visible', 250)});





// Scroll Timer

// was set in timer js (screen heigth)
// document.getElementById("timer").style.height = '420px';

let startTimerBtn = document.getElementById('sub_startTimer');

// later global use
let timerScrollDown = document.getElementById("timer").style.height;
timerScrollDown = +(timerScrollDown.substring(0, timerScrollDown.length - 2));
timerScrollDown += headerScrollDown;

startTimerBtn.addEventListener('click', function(){setTimeout(scrollPageTo('timer', 'timerScrollDown', headerScrollDown), 250)});





// Scroll Select

document.getElementById("selectCheckSheet").style.height = '560px';

let selectBtn = document.getElementById('selectCheckSheetSec');

// later global use
let selectScrollDown = document.getElementById("selectCheckSheet").style.height;
selectScrollDown = +(selectScrollDown.substring(0, selectScrollDown.length - 2));
selectScrollDown += timerScrollDown;

selectBtn.addEventListener('change', function(){setTimeout(scrollPageTo('selectCheckSheet', 'selectScrollDown', timerScrollDown), 250)});

let scrollSelect = document.getElementById('scrollSelect');

scrollSelect.addEventListener('click', function(){setTimeout(scrollPageTo('selectCheckSheet', 'selectScrollDown', timerScrollDown), 250)});






// Scroll TakeCare

// #lowbug #bug turning desktop from mobile in inspect, there is needing to refresh
if(screen.width > '650'){
    document.getElementById("takeCare").style.height = '350px';
}else{
    document.getElementById("takeCare").style.height = '550px';
}

let takeCareBtn = document.getElementById('takeCare');

// later global use
let takeCareScrollDown = document.getElementById("selectCheckSheet").style.height;
takeCareScrollDown = +(takeCareScrollDown.substring(0, takeCareScrollDown.length - 2));
takeCareScrollDown += selectScrollDown;

takeCareBtn.addEventListener('click', function(){setTimeout(scrollPageTo('takeCare', 'takeCareScrollDown', selectScrollDown), 250)});





// Scroll Iframe

document.getElementById('iframe').style.minHeight = '450px';

let startIframeBtn = document.getElementById('loadIframe');

// later global use
let iframeScrollDown = document.getElementById("iframe").style.minHeight;
iframeScrollDown = +(iframeScrollDown.substring(0, iframeScrollDown.length - 2));
iframeScrollDown += takeCareScrollDown;

// func called from above 'else' statement





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










// Scroll Module Function (for Header, Timer, Select, Iframe, InsAnsw)  

function scrollPageTo(selector, selectorScrollDown, prevSelectorScrollDown){
    let scrollDown = `${document.getElementById(selector).style.height}`;
    // #review minHeight nuance disturbing
    if(selector == 'iframe'){
        scrollDown = `450px`;
    }
    // scroll To
    scrollDown = scrollDown.substring(0, scrollDown.length - 2);
    scrollDown = +scrollDown + +prevSelectorScrollDown;
    window.scrollTo(0, scrollDown);
    // for next calls
    selectorScrollDown = scrollDown;
    prevSelectorScrollDown = scrollDown;
}



















