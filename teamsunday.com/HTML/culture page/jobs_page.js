// dropdown code






const jobsWrapper = document.querySelector("#jobs-section");
let jobsArray = [
    {
        'positionTitle' : 'International Recruiter',
        'positionIMG' : 'https://teamsunday.com/wp-content/uploads/2022/05/DSC01202-1-1.jpg',
        'positionALT' : '',
        'positionURL' : 'x',
        'positionCountry' : 'Belgium'
    },
    {
        'positionTitle' : 'SDR Germany',
        'positionIMG' : 'https://teamsunday.com/wp-content/uploads/2022/05/DSC01202-1-1.jpg',
        'positionALT' : '',
        'positionURL' : 'x',
        'positionCountry' : 'Germany'
    },
    {
        'positionTitle' : 'Job Ireland',
        'positionIMG' : 'https://teamsunday.com/wp-content/uploads/2022/05/DSC01202-1-1.jpg',
        'positionALT' : '',
        'positionURL' : 'x',
        'positionCountry' : 'Ireland'
    },
    {
        'positionTitle' : 'Job Ireland',
        'positionIMG' : 'https://teamsunday.com/wp-content/uploads/2022/05/DSC01202-1-1.jpg',
        'positionALT' : '',
        'positionURL' : 'x',
        'positionCountry' : 'Ireland'
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