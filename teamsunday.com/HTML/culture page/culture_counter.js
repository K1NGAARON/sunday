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
    let text3 = document.getElementById('0103'); // Clients
    let text4 = document.getElementById('0104'); // Packages Delivered
    let text5 = document.getElementById('0105'); // Trees Planted
    
    function load() {
        animate(text1, 0, 5, 4000);
        animate(text2, 0, 52, 4000);
        animate(text3, 0, 2266, 4000);
        animate(text4, 0, 62153, 4000);
        animate(text5, 0, 1243, 4000);
    }
    
// Call function when the platform counter section is in viewport
$.first_time = true;
$(window).scroll(function() {
    if($.first_time == true) {
        var top_of_element = $(".custom-row.platform-counter").offset().top;
        var bottom_of_element = $(".custom-row.platform-counter").offset().top + $(".custom-row.platform-counter").outerHeight();
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
