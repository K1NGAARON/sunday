const teamTarget = document.querySelector(".team-wrapper");
const team = [
    {
        'name' : 'Niels Vandecasteele',
        'role' : 'Co-Founder',
        'country' : 'Belgium',
        'img' : '/wp-content/uploads/2021/11/NielsVandecasteele.jpg',
        'USP_1' : 'Visionary behind the Sunday brand',
        'USP_2' : 'Organizes family barbecues and practices Krav Maga on Sunday',
        'USP_3' : 'Is a published author of the book "Iedereen Superfan"'
    }
]

function createTeam() {
    for (let i = 0; i < team.length; i++) {
        const teamMember = `
        <div class="blog-post-listing">
            <div class="col">
                <img src="${blogsArray[i].blogIMG}" alt="${blogsArray[i].blogTitle}">
            </div>
            <div class="col">
                <h3>
                    ${blogsArray[i].blogTitle}
                </h3>
                <p>
                ${blogsArray[i].blogIntro}
                </p>
                <a href="${blogsArray[i].blogURL}">
                    Lees verder ➔
                </a>
            </div>
        </div>
        `;
        teamTarget.insertAdjacentHTML("beforeend", teamMember);
    };
};

$(document).ready(function() {
    createTeam();
});


// Filter TBA
$('.blog-filter a').on('click', function(e) {
    e.preventDefault();

    $('.blog-filter a').removeClass('active')
    $(this).addClass('active');

    let selectedTopic = $(this).text();

    // Hide everything
    // Show clicked element label
});