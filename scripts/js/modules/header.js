// Header height

// Setting Header height to screen size 
document.getElementById("header").style.height = `${innerHeight + 150}px` ;

// Rec-ing any changes of Header height screen size 
window.addEventListener('resize', refreshHeaderHeight);

function refreshHeaderHeight(){
    document.getElementById("header").style.height = `${innerHeight + 150}px` ;
}
















