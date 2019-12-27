// BACK TO TOP

// backToTop state

// state before being scrolled
if(document.documentElement.scrollTop > 100){
    backToTop.style.display = "block";
}

// state after scrolling
window.addEventListener("scroll", setBackToTop);

function setBackToTop(){
    if(document.documentElement.scrollTop > 100 || document.body.scrollTop > 100){
        backToTop.style.display = "block";
    }else{
        backToTop.style.display = "none";
    }
}

// backToTop function

backToTop = document.getElementById("backToTop");
backToTop.addEventListener("click", scrollUp);

function scrollUp(){
    scrollDuration = 700;
    document.documentElement.scrollTop = 0;
}



