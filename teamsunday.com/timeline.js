let timelineToggle = document.querySelectorAll(".steps-toggle");

function removeActiveTimeline() {
    for(let i = 0; i < timelineToggle.length; i++) {
        timelineToggle[i].classList.remove("active");
    }
};


timelineToggle.forEach(function(EventTarget) {
    EventTarget.addEventListener("click", function() {
    removeActiveTimeline();
    EventTarget.classList.add("active");
    })
});

const timelineSteps = [
    {
        stepTitle : 'Kickoff meeting',
        stepBody : 'Listening to the current pain points at Deliverect'
    },
    {
        stepTitle : 'Project mapping',
        stepBody : 'Agreeing on the scope and timeline of the project'
    },
    {
        stepTitle : 'Design briefing',
        stepBody : 'Listening to the vision from Deliverect around their brand identity'
    },
    {
        stepTitle : 'Feedback round',
        stepBody : 'Presenting the deliverect onboarding box and listening to the feedback'
    },
    {
        stepTitle : 'Technical files confirmed',
        stepBody : 'We make technical files (in 3D) to make sure there is no room for debate about how the corporate fashion will look'
    },
    {
        stepTitle : 'Production',
        stepBody : 'Start Production, this was quite a technical collection, so it took around 8 weeks to finish'
    },
    {
        stepTitle : 'Onboarding on the platform',
        stepBody : 'Our CSM has prepared the Wardrobe ™ for Deliverect and takes the necessary time to show the client around'
    },
    {
        stepTitle : 'Happy sending and new hires!',
        stepBody : 'We helped ship out the first packages, but now the project is automated'
    },
    {
        stepTitle : 'Feedback session',
        stepBody : 'After the first month we set up a call to listen to some feedback and to know where we can improve our service or help the client.'
    }
]

let step1Toggle = document.querySelector("#step-1");
let step2Toggle = document.querySelector("#step-2");
let step3Toggle = document.querySelector("#step-3");
let step4Toggle = document.querySelector("#step-4");
let step5Toggle = document.querySelector("#step-5");
let step6Toggle = document.querySelector("#step-6");
let step7Toggle = document.querySelector("#step-7");
let step8Toggle = document.querySelector("#step-8");
let step9Toggle = document.querySelector("#step-9");

// Timelineholder 
let timelineTitle = document.querySelector("#body-title");
let timelineBody = document.querySelector("#body-text");

// Step 1
step1Toggle.addEventListener("click", function() {
    timelineTitle.innerHTML = timelineSteps[0].stepTitle;
    timelineBody.innerHTML = timelineSteps[0].stepBody;
});

// Step 2
step2Toggle.addEventListener("click", function() {
    timelineTitle.innerHTML = timelineSteps[1].stepTitle;
    timelineBody.innerHTML = timelineSteps[1].stepBody;
});

// Step 3
step3Toggle.addEventListener("click", function() {
    timelineTitle.innerHTML = timelineSteps[2].stepTitle;
    timelineBody.innerHTML = timelineSteps[2].stepBody;
});

// Step 4
step4Toggle.addEventListener("click", function() {
    timelineTitle.innerHTML = timelineSteps[3].stepTitle;
    timelineBody.innerHTML = timelineSteps[3].stepBody;
});

// Step 5
step5Toggle.addEventListener("click", function() {
    timelineTitle.innerHTML = timelineSteps[4].stepTitle;
    timelineBody.innerHTML = timelineSteps[4].stepBody;
});

// Step 6
step6Toggle.addEventListener("click", function() {
    timelineTitle.innerHTML = timelineSteps[5].stepTitle;
    timelineBody.innerHTML = timelineSteps[5].stepBody;
});

// Step 7
step7Toggle.addEventListener("click", function() {
    timelineTitle.innerHTML = timelineSteps[6].stepTitle;
    timelineBody.innerHTML = timelineSteps[6].stepBody;
});

// Step 8
step8Toggle.addEventListener("click", function() {
    timelineTitle.innerHTML = timelineSteps[7].stepTitle;
    timelineBody.innerHTML = timelineSteps[7].stepBody;
});

// Step 9
step9Toggle.addEventListener("click", function() {
    timelineTitle.innerHTML = timelineSteps[8].stepTitle;
    timelineBody.innerHTML = timelineSteps[8].stepBody;
});