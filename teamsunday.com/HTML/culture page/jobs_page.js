// dropdown code






const jobsWrapper = document.querySelector("#jobs-section");
const countryFlags = [
    {
        'belgium' : '',
        'Netherlands' : '',
        'Germany'  : '',
        'Ireland' : '',
        'Poland' : ''
    }
]
const jobsArray = [
    {
        'positionTitle' : 'International Recruiter',
        'positionIMG' : 'https://teamsunday.com/wp-content/uploads/2022/05/DSC01202-1-1.jpg',
        'positionALT' : 'International recruiter at Sunday',
        'positionURL' : 'x',
        'positionCountry' : 'Belgium',
        'positionCity' : 'Roeselare'
    },
    {
        'positionTitle' : 'Graphic Designer',
        'positionIMG' : 'https://teamsunday.com/wp-content/uploads/2022/05/DSC01202-1-1.jpg',
        'positionALT' : 'Graphic designer at Sunday',
        'positionURL' : 'x',
        'positionCountry' : 'Poland',
        'positionCity' : 'Łódź'
    },
    {
        'positionTitle' : 'PHP Developer',
        'positionIMG' : 'https://teamsunday.com/wp-content/uploads/2022/05/DSC01202-1-1.jpg',
        'positionALT' : 'PHP Developer at Sunday',
        'positionURL' : 'x',
        'positionCountry' : 'Belgium',
        'positionCity' : 'Roeselare'
    },
    {
        'positionTitle' : 'Account Executive',
        'positionIMG' : 'https://teamsunday.com/wp-content/uploads/2022/05/DSC01202-1-1.jpg',
        'positionALT' : 'Account executive at Sunday',
        'positionURL' : 'x',
        'positionCountry' : 'Germany',
        'positionCity' : 'Berlin'
    },
    {
        'positionTitle' : 'Sales Development Representative',
        'positionIMG' : 'https://teamsunday.com/wp-content/uploads/2022/05/DSC01202-1-1.jpg',
        'positionALT' : 'Sales development representative at Sunday',
        'positionURL' : 'x',
        'positionCountry' : 'Ireland',
        'positionCity' : 'Dublin'
    },
    {
        'positionTitle' : 'Sales Development Representative',
        'positionIMG' : 'https://teamsunday.com/wp-content/uploads/2022/05/DSC01202-1-1.jpg',
        'positionALT' : 'Sales development representative at Sunday',
        'positionURL' : 'x',
        'positionCountry' : 'Netherlands',
        'positionCity' : 'Amsterdam'
    },
    {
        'positionTitle' : 'Sales Development Representative',
        'positionIMG' : 'https://teamsunday.com/wp-content/uploads/2022/05/DSC01202-1-1.jpg',
        'positionALT' : 'Sales development representative at Sunday',
        'positionURL' : 'x',
        'positionCountry' : 'Belgium',
        'positionCity' : 'Roeselare'
    },
    {
        'positionTitle' : 'Sales Development Representative',
        'positionIMG' : 'https://teamsunday.com/wp-content/uploads/2022/05/DSC01202-1-1.jpg',
        'positionALT' : 'Sales development representative at Sunday',
        'positionURL' : 'x',
        'positionCountry' : 'Germany',
        'positionCity' : 'Berlin'
    }
];

// Create job post wrapper
function createJobBox() {
    for (let i = 0; i < jobsArray.length; i++) {
        const jobTemplate = `
            <div class="job-post ${jobsArray[i].positionCountry}">
                <div class="col">
                    <img src="${jobsArray[i].positionIMG}" alt="${jobsArray[i].positionALT}">
                </div>
                <div class="col">
                    <div>
                        <img src="" alt="${jobsArray[i].positionCountry}">
                        <p>
                            ${jobsArray[i].positionCity}
                        </p>
                    </div>
                    <h3>
                        ${jobsArray[i].positionTitle}
                    </h3>
                    <a class="custom-btn" href="${jobsArray[i].positionURL}">Read more</a>
                </div>
            </div>
        `;
        console.log(jobTemplate);
        jobsWrapper.insertAdjacentHTML("beforeend", jobTemplate);
    };
};

createJobBox();