"use strict";

// Loader js

window.addEventListener("load", function () {
    let loader = document.getElementById('loader');
    let body = document.querySelector('body');
    let scrollbar = document.querySelector('::-webkit-scrollbar-track')
    loader.className += " hidden";
    // display none nuance (#lb avoided from bug, setting css in js)
    setTimeout(function () { loader.style.display = "none"}, 1000);
    setTimeout(function () { body.style.overflowY = "none"}, 500);
});


// Setting site-elements height

// setting parameter of css (set site-element height) css var 
document.documentElement.style.setProperty('--all-site-element-width', `${8 * innerWidth}px`);
document.documentElement.style.setProperty('--site-element-width', `${innerWidth}px`);
document.documentElement.style.setProperty('--site-element-height', `${innerHeight}px`);


// receiveing any changes of screen size height
window.addEventListener('resize', refreshInnerWidthHeight);

function refreshInnerWidthHeight() {
    console.log('resized (inner function)');
    document.documentElement.style.setProperty('--all-site-element-width', `${8 * innerWidth}px`);
    document.documentElement.style.setProperty('--site-element-width', `${innerWidth}px`);
    document.documentElement.style.setProperty('--site-element-height', `${innerHeight}px`);
}



// Declaring arrays

// CheckSheet

// let checkSheet = [];

// avoidError #trial
// let checkSheetSec = [];


// AnswerSheet

let answerSheet = [];

let answersOfFollowingTask = [];

// ResultSheet

let resultSheet = [];
// presenting [resultSheet] elems in [simpleResultSheet] (from 2d -> 1d)
let simpleResultSheet = [];
// getting statistics in {overallResultSheet}
let overallResultSheet = {};




