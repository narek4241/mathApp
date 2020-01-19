// Header height

// Setting Header height to screen size 
document.getElementById('header').style.height = `${innerHeight + 0}px` ;

// Rec-ing any changes of Header height screen size 
window.addEventListener('resize', refreshHeaderHeight);

function refreshHeaderHeight(){
    document.getElementById('header').style.height = `${innerHeight + 0}px` ;
}



// NOTE THIS CODE IS DUPLICATE FROM 'SCROLL.JS' #duplicate

// // Scroll Header

let headerGetStartedBtn = document.getElementById('headerGetStartedBtn');

// later global use
let headerScrollDown = document.getElementById("header").style.height;
headerScrollDown = +(headerScrollDown.substring(0, headerScrollDown.length - 2));

headerGetStartedBtn.addEventListener('click', function(){
    setTimeout(scrollPageTo('header', 'headerScrollDown', 0),
    document.getElementById('mainBody').style.overflow = 'visible', 250)});

// Scroll Module Function (for Header, Timer, Select, Iframe, InsAnsw)  

function scrollPageTo(selector, selectorScrollDown, prevSelectorScrollDown){
    let scrollDown = `${document.getElementById(selector).style.height}`;
    // scroll To
    scrollDown = scrollDown.substring(0, scrollDown.length - 2);
    scrollDown = +scrollDown + +prevSelectorScrollDown;
    window.scrollTo(0, scrollDown);
    // for next calls
    selectorScrollDown = scrollDown;
    prevSelectorScrollDown = scrollDown;
}

// </--> NOTE THIS CODE IS DUPLICATE FROM 'SCROLL.JS' #duplicate











