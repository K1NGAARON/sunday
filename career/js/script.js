const values = [
    {
        'valueTitle' : 'Value Driven',
        'valueBody' : 'What we do is about our customers, not about us. We make it our business to understand our customers and their business. Consequently, we deliver made-to measure solutions and services at an industry-leading level. We take pride in our work, but only after we have achieved the best results. Our ultimate goal is to consistently deliver the highest value for our customers.',
    },
    {
        'valueTitle' : 'Holistic',
        'valueBody' : 'We look at the total picture. End to end, we keep a helicopter overview on the process, to ensure we don’t miss out on any detail. Our customers can rest assured that we have already taken action to solve the unexpected. We aim for long term solutions that help everybody involved in the project, instead of short term fixes that harm others.',
    },
    {
        'valueTitle' : 'Growth',
        'valueBody' : 'We care deeply about our employees, our customers and our partners. Everything we do is linked to creating real ambassadorship internally and externally. Helping people unlock their true potential is at the core of our organisation.',
    },
    {
        'valueTitle' : 'Worldly',
        'valueBody' : 'We take up responsibility for our planet and purpose. We challenge industry standards by always taking the option of sustainability in our ideas, approach and operations. Fair pay and good working conditions for collaborators and suppliers is a matter of course. Our team consists of top professionals with a high degree of EQ and understanding of the world.',
    },
    {
        'valueTitle' : 'Ownership',
        'valueBody' : 'Our customers expect us to know and inspire them. They are carefree because we are meeting our commitments and take ownership. We operate at a world-class level because we constantly challenge ourselves to continuous improvement. We work as a team and use the expertise of the whole to make ourselves, our ideas and our execution better every day.',
    }
]

let valueTitleHolder = document.querySelector('.value-heading');
let valueBodyHolder = document.querySelector('.value-body');

function showValues(e) {
    $('#sunday-values > .value').removeClass('active');
    $(this).addClass('active');

    console.log(this)

    const activeValue = e.target.id;

    console.log(activeValue);

    if (activeValue === 'value-driven') {
        valueTitleHolder.innerHTML = values[0].valueTitle;
        valueBodyHolder.innerHTML = values[0].valueBody;
    } else if (activeValue === 'holistic') {
        valueTitleHolder.innerHTML = values[1].valueTitle;
        valueBodyHolder.innerHTML = values[1].valueBody;  
    } else if (activeValue === 'growth') {
        valueTitleHolder.innerHTML = values[2].valueTitle;
        valueBodyHolder.innerHTML = values[2].valueBody;
    } else if (activeValue === 'worldly') {
        valueTitleHolder.innerHTML = values[3].valueTitle;
        valueBodyHolder.innerHTML = values[3].valueBody;
    } else if (activeValue === 'ownership') {
        valueTitleHolder.innerHTML = values[4].valueTitle;
        valueBodyHolder.innerHTML = values[4].valueBody;
    }
}

$('#sunday-values > .value').on('click', showValues);