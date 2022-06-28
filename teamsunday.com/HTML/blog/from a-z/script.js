// Timeline component
let timelineToggle = document.querySelectorAll(".steps-toggle");

function removeActiveTimeline() {
    for(let i = 0; i < timelineToggle.length; i++) {
        timelineToggle[i].classList.remove("active");
    }
};

$('.single-item').click(function(e){
    removeActiveTimeline();
    $(this).find('.steps-toggle').toggleClass('active');
});

let step1Toggle = document.querySelector("#step-1");
let step2Toggle = document.querySelector("#step-2");
let step3Toggle = document.querySelector("#step-3");
let step4Toggle = document.querySelector("#step-4");
let step5Toggle = document.querySelector("#step-5");
let step6Toggle = document.querySelector("#step-6");
let step7Toggle = document.querySelector("#step-7");

const kickOff = document.querySelector("#kickoff");
const designBrief = document.querySelector("#design-brief");
const feedback = document.querySelector("#feedback-round");
const technicalFiles = document.querySelector("#technical-files");
const production = document.querySelector("#production");
const onboarding = document.querySelector("#onboarding");
const feedbackFinal = document.querySelector("#feedback-final");


// Step 1
step1Toggle.addEventListener("click", function() {
    kickOff.scrollIntoView();
});

// Step 2
step2Toggle.addEventListener("click", function() {
    designBrief.scrollIntoView();
});

// Step 3
step3Toggle.addEventListener("click", function() {
    feedback.scrollIntoView();
});

// Step 4
step4Toggle.addEventListener("click", function() {
    technicalFiles.scrollIntoView();
});

// Step 5
step5Toggle.addEventListener("click", function() {
    production.scrollIntoView();
});

// Step 6
step6Toggle.addEventListener("click", function() {
    onboarding.scrollIntoView();
});

// Step 7
step7Toggle.addEventListener("click", function() {
    feedbackFinal.scrollIntoView();
});