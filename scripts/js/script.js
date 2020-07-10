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


// receiveing any changes of screen size height
// window.addEventListener('resize', refreshInnerWidthHeight);


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




