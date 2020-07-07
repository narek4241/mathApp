// Header height

window.addEventListener('resize', refreshHeaderHeight);

function refreshHeaderHeight() {
    // document.getElementById('header').style.height = `${innerHeight + 35}px`;
}


// NOTE THIS CODE IS DUPLICATE FROM 'SCROLL.JS' #duplicate

// // Scroll Header

// let headerGetStartedBtn = document.getElementById('headerGetStartedBtn');

// later global use
// let headerScrollDown = document.getElementById("header").style.height;
// headerScrollDown = +(headerScrollDown.substring(0, headerScrollDown.length - 2));

// headerGetStartedBtn.addEventListener('click', function(){
//     setTimeout(scrollPageTo('header', 'headerScrollDown', 0),
//     document.getElementById('mainBody').style.overflow = 'visible', 250)});


// Scroll Module Function (for Header, Timer, Select, Iframe, InsAnsw)  

headerGetStartedBtn.addEventListener('click', function () { blurilize('header') });

function blurilize(elementId, prevElementId) {
    // document.getElementById(elementId).style.filter = 'blur(5px)';
    if (prevElementId) {
        document.getElementById(prevElementId).style.filter = 'blur(0px)';
    }
}

function scrollPageTo(selector, selectorScrollDown, prevSelectorScrollDown) {
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






// OPEN FULLSCREEN 

/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

// did to detect 'F11' or 'esc', and change matching images
window.onresize = function(){
    if(window.innerHeight == screen.height){
        openFs.classList +=  ` sub_headerNav__openFullscreen-close`;
    }else{
        openFs.classList.remove `sub_headerNav__openFullscreen-close`;
        openFs.classList += ` sub_headerNav__openFullscreen-open`;
    }
}

let loaderOpenFullscreen = 0;

let openFs = document.getElementById('openFullscreen');
openFs.classList +=  ` sub_headerNav__openFullscreen-open`;


/* View in fullscreen */
function openFullscreen() {
    if (loaderOpenFullscreen == 0) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }

        openFs.classList +=  ` sub_headerNav__openFullscreen-close`;
        
        loaderOpenFullscreen = 1;
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }

        openFs.classList.remove `sub_headerNav__openFullscreen-close`;
        openFs.classList += ` sub_headerNav__openFullscreen-open`;
        
        loaderOpenFullscreen = 0;
    }

}

/* Close fullscreen */
// function closeFullscreen() {
//     if (document.exitFullscreen) {
//         document.exitFullscreen();
//     } else if (document.mozCancelFullScreen) { /* Firefox */
//         document.mozCancelFullScreen();
//     } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
//         document.webkitExitFullscreen();
//     } else if (document.msExitFullscreen) { /* IE/Edge */
//         document.msExitFullscreen();
//     }
// }

let btn = document.getElementById('openFullscreen');
// // let btn2 = document.getElementById('headerOptionalBtn');

btn.addEventListener('click', openFullscreen);
// btn2.addEventListener('click', closeFullscreen);





// Language

window.location.hash = '#eng';

let selLang = document.getElementById('selectLanguage');

selLang.addEventListener('change', setLocationHash);
selLang.addEventListener('change', setLanguage);

function setLocationHash(){
    window.location.hash = selLang.value;
}

function setLanguage(){
    if(window.location.hash == '#eng'){
        document.getElementsByClassName("sub_header__heading")[0].innerHTML = "We Design and Develop";
    }else if(window.location.hash == '#arm'){
        document.getElementsByClassName("sub_header__heading")[0].innerHTML = "Մենք նախագծենգը ու ծրագրովորենգը";
    }else if(window.location.hash == '#rus'){
        document.getElementsByClassName("sub_header__heading")[0].innerHTML = "Мы проектируем и развиваем";
    }
}





