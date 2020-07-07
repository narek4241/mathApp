"use strict";

// Setting site-elements height

// setting parameter of css (set site-element height) css var 
document.documentElement.style.setProperty('--site-element-height', `${innerHeight + 35}px`);

// receiveing any changes of screen size height
window.addEventListener('resize', refreshInnerHeight);

function refreshInnerHeight() {
    document.documentElement.style.setProperty('--site-element-height', `${innerHeight + 35}px`);
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




