// IFRAME

// #task (additional read material) 'import' & 'export' nuance;

// #task remove ad, (tried once,but met XSS (Cross-site scripting) disturber circumstance)

// def vals (avoid from error in case of clicking loafIframe without pointing 'select' filters)
let subjYearRep = repKeys[0][0][0]; 
let pageNumber = 1;


function loadIframe(subjYearRep, pageNumber){
    
    let iframeLink = `https://online.fliphtml5.com/ywkgy/${subjYearRep}/#p=${pageNumber}`;

    document.getElementById("iframeSource").src = iframeLink; 

    // load and disload iframe
    let iframeBtn = document.getElementById("loadIframe");

    if(document.getElementsByClassName("iframe_content")[0].style.display == ""){
        document.getElementsByClassName("iframe_content")[0].style.display = "block";
        iframeBtn.innerHTML = "Close Iframe";
    }else{
        document.getElementsByClassName("iframe_content")[0].style.display = "";
        iframeBtn.innerHTML = "Open Iframe";

        // Scroll Iframe, when Closed
        // Checks whether scrollPageTo() def or not (scroll.js linked or not)
        if(typeof scrollPageTo != 'undefined'){
            setTimeout(scrollPageTo('loadIframe', 'iframeScrollDown', selectScrollDown), 250);
        }
    }
} 


loadIframeBtn = document.getElementById("loadIframe");
loadIframeBtn.addEventListener("click", function(){loadIframe(subjYearRep, pageNumber);});



// Iframe controler

var slider = document.getElementById("ifrContrSlider_Input");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function(){
  output.innerHTML = this.value;
  document.getElementById('iframeContainer').style.height = `${this.value}px`;
}









