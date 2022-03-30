// Dynamic placeholders
let titleHolder = document.querySelector(".design-steps-text-holder .title-holder")
let textHolder = document.querySelector(".design-steps-text-holder .text-holder")
let imageHolder = document.querySelector(".img-steps-holder");
let designIntroHolder = document.querySelector(".design-intro-placeholder");

let step1 = document.querySelector("#step-1");
let step2 = document.querySelector("#step-2");
let step3 = document.querySelector("#step-3");
let step4 = document.querySelector("#step-4");

// Content for the titles
let titleHolder1 = "Design Briefing";
let titleHolder2 = "3D Virtual Design";
let titleHolder3 = "Technical Details";
let titleHolder4 = "End result";

// Content for the design steps
let designIntroText = `Creating fashion products requires a lot of <span style="font-weight:700;">expertise</span> and <span style="font-weight:700;">creativity</span>. Our team of clothing experts designs unique pieces that make heads turn & people talk. We use your brand guidelines to design <span style="font-weight:700;">company fashion</span> your employees, clients & partners will love to wear.`;
let step1Text = "We’ll have a meeting together and go through everything we need to design amazing clothing for you. For example: The brand guidelines & colors, the target audience, the products & styles you like, …";
let step2Text = "Our team of design experts creates a 3D example of your item, so you get the most realistic vision of the product.";
let step3Text = "We go through the technical details of your product, Pantone colors, decoration techniques, exact positioning,…";
let step4Text = "We produce & deliver the items exactly as you ordered, so your team can enjoy your awesome new company fashion and become true brand ambassadors.";


function showStep1() {
    imageHolder.src = "/wp-content/uploads/2022/03/step1-1.png";
    titleHolder.innerHTML = titleHolder1;
    textHolder.innerHTML = step1Text;
};

function showStep2() {
    imageHolder.src = "/wp-content/uploads/2022/03/step2.png";
    titleHolder.innerHTML = titleHolder2;
    textHolder.innerHTML = step2Text;
};

function showStep3() {
    imageHolder.src = "/wp-content/uploads/2022/03/step3.png";
    titleHolder.innerHTML = titleHolder3;
    textHolder.innerHTML = step3Text;
};

function showStep4() {
    imageHolder.src = "/wp-content/uploads/2022/03/step4-1.png";
    titleHolder.innerHTML = titleHolder4;
    textHolder.innerHTML = step4Text;
};

step1.addEventListener("click", showStep1);
step2.addEventListener("click", showStep2);
step3.addEventListener("click", showStep3);
step4.addEventListener("click", showStep4);