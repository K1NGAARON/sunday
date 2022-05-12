$( document ).ready(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        var links = this.el.find('.article-title');
        links.on('click', {
                el: this.el,
                multiple: this.multiple
        }, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $(this).next();

        $next.slideToggle();
        $(this).parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.accordion-content').not($next).slideUp().parent().removeClass('open');
        };
    }
    var accordion = new Accordion($('.accordion-container'), false);

    $(document).on('click', function (event) {
    if (!$(event.target).closest('#accordion').length) {
        $(this).parent().toggleClass('open');
    }
    });



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


    // Animate numbers
function animate(obj, initVal, lastVal, duration) {

    let startTime = null;
    
    // get the current timestamp and assign it to the currentTime variable
    let currentTime = Date.now();
    
    // pass the current timestamp to the step function
    const step = (currentTime ) => {
    
        // if the start time is null, assign the current time to startTime
        if (!startTime) {
            startTime = currentTime ;
        }
    
        // calculate the value to be used in calculating the number to be displayed
        const progress = Math.min((currentTime  - startTime) / duration, 1);
    
        // calculate what to be displayed using the value gotten above
        obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);
    
        // checking to make sure the counter does not exceed the last value (lastVal)
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
        else {
            window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
    };
    
    // start animating
    window.requestAnimationFrame(step);
    }
    
    let text1 = document.getElementById('0101'); // Countries
    let text2 = document.getElementById('0102'); // Employees
    let text3 = document.getElementById('0103'); // Amount of nationalities
    // let text4 = document.getElementById('0104'); // Male-Female
    let text5 = document.getElementById('0105'); // Average Age
    
    function load() {
        animate(text1, 0, 5, 4000);
        animate(text2, 0, 52, 4000);
        animate(text3, 0, 6, 4000);
        // animate(text4, 0, 37, 4000);
        animate(text5, 0, 32, 4000);
    }
    
// Call function when the counter section is in viewport
$.first_time = true;
$(window).scroll(function() {
    if($.first_time == true) {
        var top_of_element = $(".timeline-row-section").offset().top;
        var bottom_of_element = $(".timeline-row-section").offset().top + $(".timeline-row-section").outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();
    
        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
            load()
            $.first_time = false;
        } else {
            // the element is not visible, do something else
        }
    } else {

    }
});

});


    