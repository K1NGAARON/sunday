const collectionsAmount = document.querySelectorAll(".vce-posts-grid-list .vce-posts-grid-item").length;

window.addEventListener('DOMContentLoaded', (event) => {
    if (collectionsAmount % 2 == 0) {
        let finalCollection = document.querySelector(".vce-posts-grid-list").lastChild;
        finalCollection.classList.add("full-width-final");
    } else {
		
    }
});