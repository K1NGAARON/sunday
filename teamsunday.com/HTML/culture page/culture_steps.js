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
            stepTitle : 'Interview HR team',
            stepBody : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis aut perferendis! Praesentium, quidem autem!'
        },
        {
            stepTitle : 'Interview direct manager',
            stepBody : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis aut perferendis! Praesentium, quidem autem!'
        },
        {
            stepTitle : 'Interview founders',
            stepBody : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis aut perferendis! Praesentium, quidem autem!'
        },
        {
            stepTitle : 'Welcome on board!',
            stepBody : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis aut perferendis! Praesentium, quidem autem!'
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