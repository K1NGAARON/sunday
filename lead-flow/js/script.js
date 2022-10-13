let country; // TBA
let sdrField; // TBA
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
    const sdrMember = Math.floor(Math.random() * region.length);
    console.log(sdrMember, region[sdrMember]);
    return sdrMember;
}



function divideLeads() {
    if (country) {
        if (country.toLowerCase() === 'belgium' || country.toLowerCase() === 'netherlands' || country.toLowerCase() === 'luxemburg') {
           randomSDR(teamSDR.benelux); // Pick a random SDR from the BENELUX team
           sdrField = 'sdrMember'; // Add the random value to the sdrField (used to link to ActiveCampaign)
           
        } else if (country.toLowerCase() === 'germany' || country.toLowerCase() === 'austria' || country.toLowerCase() === 'switzerland') {

        } else {
            // Randomize between all SDRs
        }
    } else { // Fallback
        sdrField = 'sdr1'; // (Louis)
    }
}

// if (['belgium', 'netherlands', 'luxemburg'].includes(country.toLowerCase()))