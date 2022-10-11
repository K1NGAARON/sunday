// const date = Date();

const eventTarget = document.querySelector("#event-content > .row > #eventWrapper");
const eventArray = [
    {
        'eventImg' : 'https://teamsunday.com/wp-content/uploads/2022/09/header-3.jpg',
        'eventTitle' : 'Test event numero uno',
        'eventDate' : '14 Sept 2022',
        'eventLocation' : 'Dublin',
        'eventIntro' : 'Hello this is a small intro from Aaron',
    },
    {
        'eventImg' : 'https://teamsunday.com/wp-content/uploads/2022/09/header-3.jpg',
        'eventTitle' : 'Test event numero dos',
        'eventDate' : '28 Sept 2022',
        'eventLocation' : 'Dublin',
        'eventIntro' : 'Hello this is a small intro from Aaron',
    },
    {
        'eventImg' : 'https://teamsunday.com/wp-content/uploads/2022/09/header-3.jpg',
        'eventTitle' : 'Test event numero tres',
        'eventDate' : '28 Sept 2022',
        'eventLocation' : 'Dublin',
        'eventIntro' : 'Hello this is a small intro from Aaron',
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