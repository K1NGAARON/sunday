// Create blog posts
const eventTarget = document.querySelector("#event-content > .row");
const eventArray = [
    {
        'eventImg' : '',
        'eventTitle' : '',
        'eventDate' : '',
        'eventLocation' : '',
        'eventIntro' : '',
    }
];

function createEvents() {
    for (let i = 0; i < blogsArray.length; i++) {
        const eventTemplate = `
        <div class="event-item">
            <img>
            <h3>

            </h3>
            <p>

            </p>
            <p>

            </p>
            <p>
            
            </p>
        </div>
        `;
        eventTarget.insertAdjacentHTML("afterbegin", eventTemplate);
    };
};

$(document).ready(function() {
    createEvents();
});