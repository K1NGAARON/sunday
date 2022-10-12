let country;
let sdrField;
const amountSDR = 12;

const teamSDR = {
    'fallback' : [
        'sdr1'
    ],
    'general' : [
        'sdr2', 
        'sdr3',
        'sdr4',
        'sdr5',
        'sdr6',
        'sdr7',
        'sdr8',
        'sdr9',
        'sdr10',
        'sdr11',
        'sdr12',
        'sdr13'
    ], 
    'dach': [
        'sdr4',
        'sdr11'
    ], 
    'benelux' : [
        'sdr2',
        'sdr3',
        'sdr8',
        'sdr12'
    ]
}


function randomSDR(region) {
    const random = Math.floor(Math.random() * region.length);
    console.log(random, region[random]);
}



function checkCountry() {
    if (country) {
        if (country == 'Belgium' || country == 'Netherlands' || country == 'Luxemburg') {
            
        } else if (country == 'Germany' || country == 'Austria' || country == 'Switzerland') {

        }
    } else {
        sdrField = teamSDR.fallback[0];
    }
}

