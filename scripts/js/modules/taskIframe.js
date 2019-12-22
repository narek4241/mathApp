// IFRAME

// #task remove ad, find pos of x btn then click to close (event)

// Select <iframe>'s 'page' by dom & 'loadIframe()', 'disloadIframe()'

function loadIframe(){
    let valueSec = document.getElementById("selectCheckSheetSec").value;
    if(valueSec == 0){pageNumber = 6;}
    if(valueSec == 1){pageNumber = 6;}
    else if(valueSec == 2){pageNumber = 14;}
    else if(valueSec == 3){pageNumber = 36;}
    else if(valueSec == 4){pageNumber = 53;}
    else if(valueSec == 5){pageNumber = 67;}
    else if(valueSec == 6){pageNumber = 80;}
    else if(valueSec == 7){pageNumber = 93;}
    else if(valueSec == 8){pageNumber = 104;}
    else if(valueSec == 9){pageNumber = 122;}
    else if(valueSec == 10){pageNumber = 134;}

    // setting pageNumber in <IFRAME> 'src'

    // pageNumber = 20;

    // let link = `https://cdn.flipsnack.com/widget/v2/widget.html?hash=fz9qdfsmz&p=${pageNumber}`; // up to 30 answerInputBtn
    // let link = `pdf/mathRep1.pdf#page=${pageNumber}`; // simple pdf
    let link = `http://online.fliphtml5.com/ywkgy/qgln/?1572196142732#p=${pageNumber}`;
    document.getElementById("iframe_flip").src = link;  

    // load and disload iframe
    if(document.getElementsByClassName("loadFrameCont")[0].style.height == "100%"){
        document.getElementsByClassName("loadFrameCont")[0].style.height = "0%";
        document.getElementById("iframe_flip").style.height = "0px";
        document.getElementById("loadIframe").innerHTML = "Load Iframe";
    }else{
        document.getElementsByClassName("loadFrameCont")[0].style.height = "100%";
        document.getElementById("iframe_flip").style.height = "540px";
        document.getElementById("loadIframe").innerHTML = "Close Iframe";
    }

    // when Load Iframe clicked, timer starts
    // startTimer();
} 

// setting loadIframe() button event by dom
loadIframeBtn = document.getElementById("loadIframe");
loadIframeBtn.addEventListener("click", loadIframe);
