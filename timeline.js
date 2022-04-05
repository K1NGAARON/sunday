let Timelinesteps = document.querySelectorAll(".steps-toggle");

function removeActiveTimeline() {
    for(let i = 0; i < Timelinesteps.length; i++) {
        Timelinesteps[i].nextElementSibling.classList.remove("active");
        // Remove active from parent
    }
};


Timelinesteps.forEach(function(EventTarget) {
    EventTarget.addEventListener("click", function() {
    removeActiveTimeline();
    EventTarget.nextElementSibling.classList.add("active");
    // Add active to parent
    })
});
