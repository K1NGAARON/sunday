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


function getLocation() {

}

$.get("http://ipinfo.io", function (response) {
    $("#ip").html("IP: " + response.ip);
    $("#address").html("Location: " + response.city + ", " + response.region);
    $("#details").html(JSON.stringify(response, null, 4));
}, "jsonp");


function randomSDR(region) {
    const sdrMember = Math.floor(Math.random() * region.length);
    console.log(sdrMember, region[sdrMember]);
    return sdrMember;
}


function divideLeads() {

    // Get location function

    if (country) {
        if (country.toLowerCase() === 'belgium' || country.toLowerCase() === 'netherlands' || country.toLowerCase() === 'luxemburg') {
            console.log('country is BENELUX region');

           randomSDR(teamSDR.benelux); // Pick a random SDR from the BENELUX team
           sdrField = 'sdrMember'; // Add the random value to the sdrField (used to link to ActiveCampaign)
           
        } else if (country.toLowerCase() === 'germany' || country.toLowerCase() === 'austria' || country.toLowerCase() === 'switzerland') {
            console.log('country is DACH region');

            randomSDR(teamSDR.dach);
            sdrField = 'sdrMember';
        } else {
            console.log('country is OTHER region');

            randomSDR(teamSDR.general)
            sdrField = 'sdrMember';
        }
    } else { // Fallback
        sdrField = 'sdr1'; // (Louis)
    }
}

// if (['belgium', 'netherlands', 'luxemburg'].includes(country.toLowerCase()))


// $(document).ready();