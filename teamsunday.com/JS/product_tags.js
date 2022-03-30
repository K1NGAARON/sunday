// product tags
let productInspirationTags = document.querySelectorAll(".product-tags");

function removeActiveClassProducts() {
    for(let i = 0; i < productInspirationTags.length; i++) {
      productInspirationTags[i].classList.remove("active");
    }
};

productInspirationTags.forEach(function(EventTarget) {
    EventTarget.addEventListener("click", function() {
      removeActiveClassProducts();
        EventTarget.classList.add("active");
    })
});

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