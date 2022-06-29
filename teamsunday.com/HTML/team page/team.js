const teamTarget = document.querySelector(".team-wrapper");
const team = [
    {
        'name' : 'Niels',
        'role' : 'Co-Founder',
        'country' : 'Belgium',
        'img' : '/wp-content/uploads/2021/11/NielsVandecasteele.jpg',
        'USP_1' : 'Visionary behind the Sunday brand',
        'USP_2' : 'Organizes family barbecues and practices Krav Maga on Sunday',
        'USP_3' : 'Is a published author of the book "Iedereen Superfan"'
    },
    {
        'name' : 'Steven',
        'role' : 'Co-Founder',
        'country' : 'Belgium',
        'img' : '/wp-content/uploads/2021/11/StevenCallens.jpg',
        'USP_1' : 'Guardian of the Sunday culture and community',
        'USP_2' : 'Always happy & eager to help and support, but strict in implementation',
        'USP_3' : 'If you have a problem, go to Steven but always think about a possible solution too'
    },
    {
        'name' : 'Cederic',
        'role' : 'CFO',
        'country' : 'Belgium',
        'img' : '/wp-content/uploads/2021/11/CedericVeryser.jpg',
        'USP_1' : 'Odoo champion',
        'USP_2' : 'Loves enjoying nice restaurants, long bike rides and playing padel',
        'USP_3' : 'The way to his heart is by offering him good food'
    },
    {
        'name' : 'Karel-Jan',
        'role' : 'CCO',
        'country' : 'Belgium',
        'img' : '/wp-content/uploads/2021/11/KarelJanVercruysse.jpg',
        'USP_1' : 'Probably travels the most between the Sunday subsidiaries',
        'USP_2' : 'Loves fine dining on Sundays and going to KV Kortrijk soccer matches',
        'USP_3' : 'Has a knack for learning languages, he’s now studying Italian'
    },
    {
        'name' : 'Fabienne',
        'role' : 'F&A Officer',
        'country' : 'Belgium',
        'img' : '/wp-content/uploads/2021/11/FabienneVermeersch.jpg',
        'USP_1' : 'Super social, likes to stick around on Fridays to socialise',
        'USP_2' : 'Can be found hiking with her family or enjoying rosé wine on a hipster terrace on Sundays',
        'USP_3' : 'Talk to her about music and movies!'
    },
    {
        'name' : 'Aaron',
        'role' : 'Growth Hacker',
        'country' : 'Belgium',
        'img' : '/wp-content/uploads/2021/11/Aaron-BW.png',
        'USP_1' : 'Takes care of our online presence and ads',
        'USP_2' : 'After work you will surely find him in the gym',
        'USP_3' : 'Always open for a chat about crypto'
    },
    {
        'name' : 'Nils',
        'role' : 'Art Director',
        'country' : 'Belgium',
        'img' : '/wp-content/uploads/2021/11/NilsWittevrongel.jpg',
        'USP_1' : 'Knows everything about designing cool and wearable company fashion',
        'USP_2' : 'Loves NBA, Formula 1 & Orval',
        'USP_3' : 'Might look a little intimidating, but will gladly help you out with design related questions'
    },
    {
        'name' : 'Lukas',
        'role' : 'R&D Specialist',
        'country' : 'Belgium',
        'img' : '/wp-content/uploads/2021/11/LukasBreughe.jpg',
        'USP_1' : 'Your go to R&D guy',
        'USP_2' : 'Great on the basketball court, loves beers with friends, lives with his fiancée who puts out Christmas decorations way too early in the year without his permission.'
    },
    {
        'name' : '',
        'role' : '',
        'country' : '',
        'img' : '',
        'USP_1' : '',
        'USP_2' : '',
        'USP_3' : ''
    },
    {
        'name' : '',
        'role' : '',
        'country' : '',
        'img' : '',
        'USP_1' : '',
        'USP_2' : '',
        'USP_3' : ''
    },
    {
        'name' : '',
        'role' : '',
        'country' : '',
        'img' : '',
        'USP_1' : '',
        'USP_2' : '',
        'USP_3' : ''
    },
    {
        'name' : '',
        'role' : '',
        'country' : '',
        'img' : '',
        'USP_1' : '',
        'USP_2' : '',
        'USP_3' : ''
    },
    {
        'name' : '',
        'role' : '',
        'country' : '',
        'img' : '',
        'USP_1' : '',
        'USP_2' : '',
        'USP_3' : ''
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