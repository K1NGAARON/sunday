window.addEventListener('DOMContentLoaded', (event) => {
    // Change logo to white Sunday logo
    let sundayLogo = document.querySelectorAll(".logo-img");

    for (let i = 0; i < sundayLogo.length; i++) {
        sundayLogo[i].src="https://teamsunday.com/wp-content/uploads/2022/03/Sunday_Full_White.png";
    }

    // Center Sunday logo on a black background
    let headerTF = document.querySelectorAll(".header-table > tbody > tr:first-child > td:nth-child(3)");

    for (let i = 0; i < headerTF.length; i++) {
        headerTF[i].setAttribute("colspan", "8");
        headerTF[i].classList.add("center");
    }

    // Delete matching style column
    let matchingStyleCol = document.querySelectorAll(".header-table > tbody > tr:nth-child(2) > td:nth-child(3)");

    for (let i = 0; i < matchingStyleCol.length; i++) {
        matchingStyleCol[i].classList.add("hidden");
    }

    // Change "hoodie" to "color" in table head
    let replaceHoodie = document.querySelectorAll(".table-standard.bom-page-table.bom_table > thead > tr > th:nth-child(6)");

    for (let i = 0; i < replaceHoodie.length; i++) {
        replaceHoodie[i].innerHTML = "Color";
    }

    // Select top mock up
    let mockUp = document.querySelector(".pack-page-container > .pack-container > .image-container");
    console.log(mockUp);




});