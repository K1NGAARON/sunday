// Design step tags
let designStepsTags = document.querySelectorAll(".design-tags");

function removeActiveClassDesign() {
    for(let i = 0; i < designStepsTags.length; i++) {
        designStepsTags[i].classList.remove("active");
    }
};

designStepsTags.forEach(function(EventTarget) {
    EventTarget.addEventListener("click", function() {
        removeActiveClassDesign();
        EventTarget.classList.add("active");
    })
});

// Design steps
let titleHolder = document.querySelector(".design-steps-text-holder .title-holder")
let textHolder = document.querySelector(".design-steps-text-holder .text-holder")
let step1Text = "We’ll have a meeting together and go through everything we need to design amazing clothing for you. For example: The brand guidelines & colors, the target audience, the products & styles you like, …";
let step2Text = "Our team of design experts creates a 3D example of your item, so you get the most realistic vision of the product.";
let step3Text = "We go through the technical details of your product, Pantone colours, decoration techniques, exact positioning,…";
let step4Text = "We produce & deliver the items exactly as you ordered, so your team can enjoy your awesome new company fashion and become true brand ambassadors.";

let titleHolder1 = "Design Briefing";
let titleHolder2 = "3D Virtual Design";
let titleHolder3 = "Technical Details";
let titleHolder4 = "End result";


let imageHolder = document.querySelector(".img-steps-holder");
let step1 = document.querySelector("#step-1");
let step2 = document.querySelector("#step-2");
let step3 = document.querySelector("#step-3");
let step4 = document.querySelector("#step-4");

function showStep1() {
    imageHolder.src = "https://www.teamsunday.com/wp-content/uploads/2022/03/step1-1.png";
    titleHolder.innerHTML = titleHolder1;
    textHolder.innerHTML = step1Text;
};

function showStep2() {
    imageHolder.src = "https://www.teamsunday.com/wp-content/uploads/2022/03/step2.png";
    titleHolder.innerHTML = titleHolder2;
    textHolder.innerHTML = step2Text;
};

function showStep3() {
    imageHolder.src = "https://www.teamsunday.com/wp-content/uploads/2022/03/step3.png";
    titleHolder.innerHTML = titleHolder3;
    textHolder.innerHTML = step3Text;
};

function showStep4() {
    imageHolder.src = "https://www.teamsunday.com/wp-content/uploads/2022/03/step4-1.png";
    titleHolder.innerHTML = titleHolder4;
    textHolder.innerHTML = step4Text;
};

step1.addEventListener("click", showStep1);
step2.addEventListener("click", showStep2);
step3.addEventListener("click", showStep3);
step4.addEventListener("click", showStep4);