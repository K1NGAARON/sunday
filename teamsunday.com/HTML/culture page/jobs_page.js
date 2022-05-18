const dropdown = document.querySelector("#country");

function dropdownFilter() {
    $(this).find("option:selected").each(function(){
        var selectedCountry = $(this).attr("value");
        if(selectedCountry){
            $('.job-post').show();
            $(".job-post").not("." + selectedCountry).hide();
            $(".job-post" + selectedCountry).show();
        } else{
            $(".job-post").hide();
        }
    });
};

const jobsWrapper = document.querySelector("#jobs-section");
const jobsArray = [
    {
        'positionTitle' : 'International Recruiter',
        'positionText' : 'lorem10',
        'positionIMG' : 'https://teamsunday.com/wp-content/uploads/2022/05/DSC01202-1-1.jpg',
        'positionALT' : 'International recruiter at Sunday',
        'positionURL' : 'x',
        'positionCountry' : 'Belgium',
        'positionCity' : 'Roeselare',
        'flagURL' : 'https://teamsunday.com/wp-content/uploads/2021/08/Belgium-Flag.png' 
    },
    {
        'positionTitle' : 'PHP Developer',
        'positionText' : 'lorem10',
        'positionIMG' : 'https://teamsunday.com/wp-content/uploads/2022/05/DSC01202-1-1.jpg',
        'positionALT' : 'PHP Developer at Sunday',
        'positionURL' : 'x',
        'positionCountry' : 'Belgium',
        'positionCity' : 'Roeselare',
        'flagURL' : 'https://teamsunday.com/wp-content/uploads/2021/08/Belgium-Flag.png'
    },
    {
        'positionTitle' : 'Account Executive',
        'positionText' : 'lorem10',
        'positionIMG' : 'https://teamsunday.com/wp-content/uploads/2022/05/DSC01202-1-1.jpg',
        'positionALT' : 'Account executive at Sunday',
        'positionURL' : 'x',
        'positionCountry' : 'Germany',
        'positionCity' : 'Berlin',
        'flagURL' : 'https://teamsunday.com/wp-content/uploads/2021/08/Germany-Flag.png'
    },
    {
        'positionTitle' : 'Sales Development Representative',
        'positionText' : 'You will be in charge to extend our reach and feed the Irish team with Qualified Leads.',
        'positionIMG' : 'https://teamsunday.com/wp-content/uploads/2022/05/DSC01202-1-1.jpg',
        'positionALT' : 'Sales development representative at Sunday',
        'positionURL' : 'x',
        'positionCountry' : 'Ireland',
        'positionCity' : 'Dublin',
        'flagURL' : 'https://teamsunday.com/wp-content/uploads/2021/08/Ireland-Flag.png'
    },
    {
        'positionTitle' : 'Sales Development Representative',
        'positionText' : 'You will be in charge to extend our reach and feed the Dutch team with Qualified Leads.',
        'positionIMG' : 'https://teamsunday.com/wp-content/uploads/2022/05/DSC01202-1-1.jpg',
        'positionALT' : 'Sales development representative at Sunday',
        'positionURL' : 'x',
        'positionCountry' : 'Netherlands',
        'positionCity' : 'Amsterdam',
        'flagURL' : 'https://teamsunday.com/wp-content/uploads/2021/08/Netherlands-Flag.png'
    },
    {
        'positionTitle' : 'Sales Development Representative',
        'positionText' : 'lorem10',
        'positionIMG' : 'https://teamsunday.com/wp-content/uploads/2022/05/DSC01202-1-1.jpg',
        'positionALT' : 'Sales development representative at Sunday',
        'positionURL' : 'x',
        'positionCountry' : 'Belgium',
        'positionCity' : 'Roeselare',
        'flagURL' : 'https://teamsunday.com/wp-content/uploads/2021/08/Belgium-Flag.png'
    },
    {
        'positionTitle' : 'Sales Development Representative',
        'positionText' : 'lorem10',
        'positionIMG' : 'https://teamsunday.com/wp-content/uploads/2022/05/DSC01202-1-1.jpg',
        'positionALT' : 'Sales development representative at Sunday',
        'positionURL' : 'x',
        'positionCountry' : 'Germany',
        'positionCity' : 'Berlin',
        'flagURL' : 'https://teamsunday.com/wp-content/uploads/2021/08/Germany-Flag.png'
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
                    <div class="country-wrapper">
                        <img class="flag-img" src="${jobsArray[i].flagURL}" alt="${jobsArray[i].positionCountry}">
                        <p class="flag-country">
                            ${jobsArray[i].positionCity}
                        </p>
                    </div>
                    <h3>
                        ${jobsArray[i].positionTitle}
                    </h3>
                    <p>
                        ${jobsArray[i].positionText}
                    </p>
                    <a class="custom-btn" href="${jobsArray[i].positionURL}">Read more</a>
                </div>
            </div>
        `;
        jobsWrapper.insertAdjacentHTML("beforeend", jobTemplate);
    };
};

createJobBox();
dropdown.addEventListener('change', dropdownFilter);