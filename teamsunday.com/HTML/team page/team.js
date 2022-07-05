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
        'name' : 'Morgane',
        'role' : 'Content Creator',
        'country' : 'Belgium',
        'img' : '/wp-content/uploads/2021/11/MorganeLemiengre.jpeg',
        'USP_1' : 'Loves the sea',
        'USP_2' : 'Loves tennis and taking in fresh air',
        'USP_3' : 'Listens to Dutch hip hop in public and to Abba in secret'
    },
    {
        'name' : 'Dorothée',
        'role' : 'Marketing Project Manager',
        'country' : 'Belgium',
        'img' : '/wp-content/uploads/2021/11/DorotheeHespeel.jpeg',
        'USP_1' : 'Creates awesome marketing campaigns',
        'USP_2' : 'Loves a good brunch with friends',
        'USP_3' : 'Dressed to the nines every day'
    },
    {
        'name' : 'Bartel',
        'role' : 'Senior Developer',
        'country' : 'Belgium',
        'img' : '/wp-content/uploads/2021/11/bartelSamyn.jpg',
        'USP_1' : 'Writes code like nobody’s business',
        'USP_2' : 'Dad of two adorable kids',
        'USP_3' : 'Loves sushi & Lego'
    },
    {
        'name' : 'Awet',
        'role' : 'PHP Developer',
        'country' : 'Belgium',
        'img' : '/wp-content/uploads/2021/11/AwetTesfay.jpg',
        'USP_1' : 'Computer wizard',
        'USP_2' : 'Enjoys spending time with his family on Sundays',
        'USP_3' : 'Big fan of Turkish action movies'
    },
    {
        'name' : 'Vanessa',
        'role' : 'Product Manager',
        'country' : 'Belgium',
        'img' : '/wp-content/uploads/2021/11/VanessaHostens.jpg',
        'USP_1' : 'OG Sunday employee',
        'USP_2' : 'Loves travelling and shopping on Sunday',
        'USP_3' : 'Superfan of the singer P!nk'
    },
    {
        'name' : 'Mazelli',
        'role' : 'Partner Manager',
        'country' : 'Belgium',
        'img' : '/wp-content/uploads/2021/11/MazelliDetavernier.jpg',
        'USP_1' : 'Has awesome people skills',
        'USP_2' : 'Loves music, drinks and food on Sundays',
        'USP_3' : 'Brightens up office parties with his dance skills (especially to the song ‘Everybody’ by the Backstreet Boys)'
    },
    {
        'name' : 'Gilles',
        'role' : 'Account Manager',
        'country' : 'Belgium',
        'img' : '/wp-content/uploads/2021/11/GillesCossement.jpg',
        'USP_1' : 'Salesman with a special interest in international business',
        'USP_2' : 'Loves to spend his time in the soccer stadium to cheer on his favorite team Club Brugge.',
        'USP_3' : 'His favorite snack (and the way to his heart) is a Grany Moelleux'
    },
    {
        'name' : 'Iris',
        'role' : 'CSM',
        'country' : 'Belgium',
        'img' : '/wp-content/uploads/2021/11/IrisDevos.jpg',
        'USP_1' : 'Loves good food and drinks and is the life of the (office) party',
        'USP_2' : 'Always has exciting plans for the weekend'
    },
    {
        'name' : 'Birgit',
        'role' : 'Sales Enablement Manager',
        'country' : 'Belgium',
        'img' : '/wp-content/uploads/2021/11/BirgitRaes.jpg',
        'USP_1' : 'Always open for a quick chat and happy to help with whatever you need',
        'USP_2' : 'Loves reading, cooking and playing music on Sundays',
        'USP_3' : 'Considers winning ‘best halloween costume’ as one of her greatest professional achievements'
    },
    {
        'name' : 'Nicola',
        'role' : 'Account Executive',
        'country' : 'Belgium',
        'img' : '/wp-content/uploads/2021/11/NicolaNeve.jpg',
        'USP_1' : 'Salesman who loves a good laugh',
        'USP_2' : 'Loves cycling or playing padel during the weekend',
        'USP_3' : 'Nicola’s last name is ‘Neve’, which is Portuguese for ‘snow’. He learned this during a meeting with a client'
    },
    {
        'name' : 'Timon',
        'role' : 'Account Executive',
        'country' : 'Belgium',
        'img' : '/wp-content/uploads/2021/11/TimonDedeyster.jpg',
        'USP_1' : 'Salesman specialised in HR, business consultancy and Telecom clients',
        'USP_2' : 'Loves watching ‘Casa De Papel’ on Netflix',
        'USP_3' : 'He’s the quiet type, but will suddenly pull a 450K deal out of nowhere'
    },
    {
        'name' : 'Basiel',
        'role' : 'Account Manager',
        'country' : 'Belgium',
        'img' : '/wp-content/uploads/2021/11/BasielSinnesael.jpg',
        'USP_1' : 'Salesman with keen interest in cities and food & drink',
        'USP_2' : 'Loves padel, barbecue and beers',
        'USP_3' : 'Owner of a great Spotify playlist called ‘zet ma tandje luwre’. It’s a banger!'
    },
    {
        'name' : 'Anna',
        'role' : 'Sales Development Representative',
        'country' : 'Belgium',
        'img' : '/wp-content/uploads/2021/11/AnnaBaffour.jpeg',
        'USP_1' : 'Loves meeting friends and binge watching Netflix on Sundays',
        'USP_2' : 'Thinks brunch is the best invention ever because it means sleeping in and waking up to Mimosas'
    },
    {
        'name' : 'Charlotte',
        'role' : 'Sales Development Representative',
        'country' : 'Belgium',
        'img' : '/wp-content/uploads/2021/11/CharlotteVens.jpeg',
        'USP_1' : 'Loves to surf and go on adventures on Sundays',
        'USP_2' : 'If you’re looking for Charlotte during the weekend, there’s a big chance you will find her touring the Netherlands or France in her van'
    },
    {
        'name' : 'Ana',
        'role' : 'Sales Development Representative',
        'country' : 'Belgium',
        'img' : '',
        'USP_1' : 'Fashion Amateur, fan of 19-th Century Victorian Clothing',
        'USP_2' : 'Less is more: adopting a sustainable approach to living',
        'USP_3' : 'Being clumsy is her second nature'
    },
    {
        'name' : 'Joeri',
        'role' : 'Sales Development Representative',
        'country' : 'Netherlands',
        'img' : '',
        'USP_1' : '',
        'USP_2' : '',
        'USP_3' : ''
    },
    {
        'name' : 'Sarah',
        'role' : 'Sales Development Representative',
        'country' : 'Ireland',
        'img' : '/wp-content/uploads/2022/07/SarahOBoyle.jpg',
        'USP_1' : 'Passionate about makeup, because it’s artistic and a great way to express herself',
        'USP_2' : 'Loves bright colours, currently has a yellow purse, a green phone and pink keys',
        'USP_3' : 'Travels as much as she can in order to push herself out of her comfort zone.'
    },
    {
        'name' : 'Chiara',
        'role' : 'Receptionist',
        'country' : 'Belgium',
        'img' : '/wp-content/uploads/2021/11/ChiaraDetavernier.jpg',
        'USP_1' : 'Office MVP',
        'USP_2' : 'On Sundays, she loves to go out for dinner and watch Netflix',
        'USP_3' : 'Riding a cow is high on her bucket list'
    },
    {
        'name' : 'Midas',
        'role' : 'Country Executive',
        'country' : 'Netherlands',
        'img' : '/wp-content/uploads/2021/11/MidasStreekstra.jpeg',
        'USP_1' : 'Outgoing and social, or having a drink in the city with friends',
        'USP_2' : 'On Sundays, he supports and talks about Ajax',
        'USP_3' : 'Better not to tell him that Diemen is not part of Amsterdam because that will open a long discussion'
    },
    {
        'name' : 'Eva',
        'role' : 'Account Manager',
        'country' : 'Netherlands',
        'img' : '/wp-content/uploads/2021/11/EvaDeveer.jpg',
        'USP_1' : 'True summer person',
        'USP_2' : 'On Sunday she enjoys winning a field hockey game',
        'USP_3' : 'Loves to enjoy good weather from her boat in Amsterdam'
    },
    {
        'name' : 'Max',
        'role' : 'Account Executive',
        'country' : 'Netherlands',
        'img' : '/wp-content/uploads/2022/03/MaxPierik.png',
        'USP_1' : 'On Sundays, you can probably find him in the soccer stadium to watch Liverpool',
        'USP_2' : 'Likes to practice as many sports as possible',
        'USP_3' : 'His favorite pastime is to have drinks and good food with his friends'
    },
    {
        'name' : 'Carlin',
        'role' : 'Account Executive',
        'country' : 'Netherlands',
        'img' : '/wp-content/uploads/2022/07/CarlinKleinWolterink.jpg',
        'USP_1' : 'Nothing makes her happier than spontaneous plans. Do you have a crazy idea and need a partner in crime? Hit her up!  ',
        'USP_2' : "Clumsiest person you'll ever meet: ask her about her fracture track record & don't trust her with your valuables",
        'USP_3' : 'Speaks multiple languages, but is most fluent in sarcasm'
    },
    {
        'name' : 'Sebastiaan',
        'role' : 'International Sales Manager',
        'country' : 'Belgium',
        'img' : '/wp-content/uploads/2021/11/SebastiaanMaesen.jpg',
        'USP_1' : 'Is an extraverted introvert',
        'USP_2' : 'On sunday he Netflixes, practises some Sports, goes out for brunch',
        'USP_3' : 'Fav Quote: “Some birds are too colorful to be caged”'
    },
    {
        'name' : 'Alexis',
        'role' : '',
        'country' : 'Germany',
        'img' : '/wp-content/uploads/2021/11/AlexisKivu.jpg',
        'USP_1' : 'Open minded and curious',
        'USP_2' : 'Loves to go to the gym and spend time in nature on Sunday',
        'USP_3' : 'Alexis welcomed Angela Merkel in his hometown and gave her flowers wearing a bright red coat when he was a kid'
    },
    {
        'name' : 'Laura',
        'role' : '',
        'country' : 'Germany',
        'img' : '/wp-content/uploads/2022/03/LauraKraft.png',
        'USP_1' : 'Loves Pop Music and Trash TV',
        'USP_2' : 'Would spend every penny on traveling or her super cute Dog Alfie',
        'USP_3' : 'Wins people over with her brutal honesty and silly jokes'
    },
    {
        'name' : 'Louis',
        'role' : 'Head Of Demand Generation',
        'country' : 'Belgium',
        'img' : '/wp-content/uploads/2021/11/LouisVandommele.jpg',
        'USP_1' : 'Very sociable and musically talented, ex professional drummer',
        'USP_2' : 'Loves sneakers and vintage clothing',
        'USP_3' : 'Is often quoted saying "Europe is a village"'
    },
    {
        'name' : 'Ankur',
        'role' : '',
        'country' : 'Ireland',
        'img' : '/wp-content/uploads/2021/11/AnkurBaliyan.jpg',
        'USP_1' : 'Cricket freak',
        'USP_2' : 'On Sunday, he loves cooking Indian food recipes and secretly watching his childhood cartoons',
        'USP_3' : 'The hardest thing for him is to hide what he wants to say'
    },
    {
        'name' : 'Sohair',
        'role' : '',
        'country' : 'Ireland',
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


// Filter
$('.blog-filter a').on('click', function(e) {
    e.preventDefault();

    $('.blog-filter a').removeClass('active')
    $(this).addClass('active');

    let selectedTopic = $(this).text();

    // Hide everything
    // Show clicked element label
});