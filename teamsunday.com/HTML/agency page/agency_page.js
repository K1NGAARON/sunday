$(document).ready(function() {
    const step1Toggle = document.querySelector("#step-1");
    const step2Toggle = document.querySelector("#step-2");
    const step3Toggle = document.querySelector("#step-3");
    const step4Toggle = document.querySelector("#step-4");
    
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
    
    
    const timelineSteps = [
        {
            stepTitle : 'Design step 1',
            stepBody : 'We received your resume and motivation letter: our international recruiter will set up a first meeting with you to get to know you better and talk about your future goals.'
        },
        {
            stepTitle : 'Interview direct manager',
            stepBody : 'You did well, we feel there could be a match: meet your (future) manager.'
        },
        {
            stepTitle : 'Interview founders',
            stepBody : 'Our founders love to meet you and see if they feel the match as well.'
        },
        {
            stepTitle : 'Welcome on board!',
            stepBody : 'Welcome aboard! We will guide you through your first days with an entire onboarding process.'
        }
    ]
    
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
});