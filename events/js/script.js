// const date = Date();

const eventTarget = document.querySelector("#event-content > .row > #eventWrapper");
const eventArray = [
    {
        'eventImg' : 'https://teamsunday.com/wp-content/uploads/2022/10/Banner-mobiel.jpg',
        'eventTitle' : 'Bedrijven Contact Dagen',
        'eventDate' : '26 - 27 October',
        'eventLocation' : 'Bruges',
        'eventIntro' : '',
    },
    {
        'eventImg' : 'https://teamsunday.com/wp-content/uploads/2022/10/ws-home-hero-ayo-tometi-1.jpg',
        'eventTitle' : 'Web Summit',
        'eventDate' : '1 - 4 November',
        'eventLocation' : 'Lisbon',
        'eventIntro' : '',  
    },
    {
        'eventImg' : 'https://teamsunday.com/wp-content/uploads/2022/10/c5312b_fe1a0be6497145cc89c55da0e.jpg',
        'eventTitle' : 'World Employer branding day',
        'eventDate' : '12 - 14 October',
        'eventLocation' : 'Lisbon',
        'eventIntro' : '',  
    }
];

function createEvents() {
    for (let i = 0; i < eventArray.length; i++) {
        const eventTemplate = `
        <div class="event-item">
            <img src="${eventArray[i].eventImg}" alt="${eventArray[i].eventTitle}">

            <div class="event-item-content">
                <h3>
                    ${eventArray[i].eventTitle}
                </h3>
                <div class="event-info">
                    <p class="bold">
                        ${eventArray[i].eventDate}
                    </p>
                    <p class="location">
                        ${eventArray[i].eventLocation}
                    </p>
                </div>

                <p class="intro">
                    ${eventArray[i].eventIntro}
                </p>
            </div>
            
        </div>
        `;
        eventTarget.insertAdjacentHTML("afterbegin", eventTemplate);
    };
};

// function hidePastEvents() {
//     if()
// }

$(document).ready(function() {
    createEvents();
});

console.log(date);