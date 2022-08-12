const dropdown = document.querySelector("#country");

function dropdownFilter() {
    $(this).find("option:selected").each(function() {
        var selectedCountry = $(this).attr("value");

        if (selectedCountry) {
            if (selectedCountry == 'View all') {
                $('.job-post').show();
            } else {
                $('.job-post').show(); // Show everything first to ensure that making multiple selections work (kinda like a reset feature)
                $(".job-post").not("." + selectedCountry).hide();
                $(".job-post" + selectedCountry).show();
            }
        } else {
            $(".job-post").hide();
        }
    });
};

const jobsWrapper = document.querySelector("#jobs-section");
const jobsArray = [
    {
        'positionTitle' : 'Office Assistant',
        'positionText' : 'You are our office elf.',
        'positionIMG' : 'https://teamsunday.com/wp-content/uploads/2022/05/EXTRA3.jpg',
        'positionALT' : 'Office Assistant at Sunday',
        'positionURL' : '/en/jobs/office-assistant-belgium/',
        'positionCountry' : 'Belgium',
        'positionCity' : 'Roeselare',
        'flagURL' : 'https://teamsunday.com/wp-content/uploads/2021/08/Belgium-Flag.png' 
    },
    {
        'positionTitle' : 'Project Manager',
        'positionText' : 'Voor de groei van Sunday gaan wij op zoek naar een Hands on Project Manager.',
        'positionIMG' : '/wp-content/uploads/2022/05/NL.jpg',
        'positionALT' : 'Project Manager at Sunday',
        'positionURL' : '/en/jobs/project-manager-roeselare/',
        'positionCountry' : 'Belgium',
        'positionCity' : 'Roeselare',
        'flagURL' : 'https://teamsunday.com/wp-content/uploads/2021/08/Belgium-Flag.png' 
    },
    {
        'positionTitle' : 'Financial Controller',
        'positionText' : 'Je bent verantwoordelijk om de financiële rapportering van de groep tot een hoger niveau te tillen.',
        'positionIMG' : '/wp-content/uploads/2022/05/DE.jpg',
        'positionALT' : 'Financial controller at Sunday',
        'positionURL' : '/en/jobs/financial-controller-roeselare/',
        'positionCountry' : 'Belgium',
        'positionCity' : 'Roeselare',
        'flagURL' : 'https://teamsunday.com/wp-content/uploads/2021/08/Belgium-Flag.png' 
    },
    {
        'positionTitle' : 'Account Executive',
        'positionText' : 'Our business grows with you. Close some interesting deals with us!',
        'positionIMG' : 'https://teamsunday.com/wp-content/uploads/2022/05/DE.jpg',
        'positionALT' : 'Account executive at Sunday',
        'positionURL' : '/en/jobs/account-executive-germany/',
        'positionCountry' : 'Germany',
        'positionCity' : 'Berlin',
        'flagURL' : 'https://teamsunday.com/wp-content/uploads/2021/08/Germany-Flag.png'
    },
    {
        'positionTitle' : 'Account Executive',
        'positionText' : 'Our business grows with you. Close some interesting deals with us!',
        'positionIMG' : 'https://teamsunday.com/wp-content/uploads/2022/05/EXTRA3.jpg',
        'positionALT' : 'Account executive at Sunday',
        'positionURL' : '/en/jobs/account-executive-belgium/',
        'positionCountry' : 'Belgium',
        'positionCity' : 'Roeselare',
        'flagURL' : 'https://teamsunday.com/wp-content/uploads/2021/08/Belgium-Flag.png'
    },
    {
        'positionTitle' : 'Account Executive',
        'positionText' : 'Our business grows with you. Close some interesting deals with us!',
        'positionIMG' : 'https://teamsunday.com/wp-content/uploads/2022/05/IRL.jpg',
        'positionALT' : 'Account executive at Sunday',
        'positionURL' : '/en/jobs/account-executive-ireland/',
        'positionCountry' : 'Ireland',
        'positionCity' : 'Dublin',
        'flagURL' : 'https://teamsunday.com/wp-content/uploads/2021/08/Ireland-Flag.png'
    },
    {
        'positionTitle' : 'Account Executive',
        'positionText' : 'Our business grows with you. Close some interesting deals with us!',
        'positionIMG' : '/wp-content/uploads/2022/05/DE.jpg',
        'positionALT' : 'Account executive at Sunday',
        'positionURL' : '/en/jobs/account-executive-netherlands/',
        'positionCountry' : 'Netherlands',
        'positionCity' : 'Amsterdam',
        'flagURL' : 'https://teamsunday.com/wp-content/uploads/2021/08/Netherlands-Flag.png'
    },
    {
        'positionTitle' : 'Sales Development Representative',
        'positionText' : 'Our business starts with you. Hunt for promising leads with us!',
        'positionIMG' : 'https://teamsunday.com/wp-content/uploads/2022/05/NL.jpg',
        'positionALT' : 'Sales development representative at Sunday',
        'positionURL' : '/en/jobs/sales-development-representative-netherlands/',
        'positionCountry' : 'Netherlands',
        'positionCity' : 'Amsterdam',
        'flagURL' : 'https://teamsunday.com/wp-content/uploads/2021/08/Netherlands-Flag.png'
    },
    {
        'positionTitle' : 'Sales Development Representative',
        'positionText' : 'Our business starts with you. Hunt for promising leads with us!',
        'positionIMG' : 'https://teamsunday.com/wp-content/uploads/2022/05/BE2.jpg',
        'positionALT' : 'Sales development representative at Sunday',
        'positionURL' : '/en/jobs/sales-development-representative-belgium/',
        'positionCountry' : 'Belgium',
        'positionCity' : 'Roeselare',
        'flagURL' : 'https://teamsunday.com/wp-content/uploads/2021/08/Belgium-Flag.png'
    },
    {
        'positionTitle' : 'Sales Development Representative',
        'positionText' : 'Our business starts with you. Hunt for promising leads with us!',
        'positionIMG' : 'https://teamsunday.com/wp-content/uploads/2022/05/DE2.jpg',
        'positionALT' : 'Sales development representative at Sunday',
        'positionURL' : '/en/jobs/sales-development-representative-germany/',
        'positionCountry' : 'Germany',
        'positionCity' : 'Berlin',
        'flagURL' : 'https://teamsunday.com/wp-content/uploads/2021/08/Germany-Flag.png'
    },
    {
        'positionTitle' : 'Sales Development Representative',
        'positionText' : 'Our business starts with you. Hunt for promising leads with us!',
        'positionIMG' : 'https://teamsunday.com/wp-content/uploads/2022/05/IRL2.jpg',
        'positionALT' : 'Sales development representative at Sunday',
        'positionURL' : '/en/jobs/sales-development-representative-ireland/',
        'positionCountry' : 'Ireland',
        'positionCity' : 'Dublin',
        'flagURL' : 'https://teamsunday.com/wp-content/uploads/2021/08/Ireland-Flag.png'
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

$(document).ready(function() {
    createJobBox();
});

dropdown.addEventListener('change', dropdownFilter);