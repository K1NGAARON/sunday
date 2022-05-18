const formWrapper = document.querySelector(".hidden-form-wrapper");
const socialProof = document.querySelector(".social-proof-wrapper");


function showSocialProof() {
    socialProof.classList.remove("hidden");
};

function hideSocialProof() {
    socialProof.classList.add("hidden");
};


// Call functions

setTimeout(showSocialProof,"4000");
setTimeout(hideSocialProof, "10000");