function preventDefault(e) {
    e.preventDefault();
}

function showDesignSteps(e) {
    console.log(e);
    console.log(e.target.id);
    
    // if (true) {

    // } else if (false) {

    // } else if (true) {

    // } else {

    // }
}

function changeGallery() {
    
}







const designTitle = document.querySelector('.designTitle').innerText;
const designBody = document.querySelector('.designBody').innerText;
const designImg = document.querySelector('.designImg').innerText;


const designSteps = [
    {
        'step' : 'step1',
        'title' : 'Design Briefing',
        'body' : 'We’ll sit together and go through everything we need to design amazing clothing for your: brand guidelines, target audience, styles you like, …',
        'img' : 'https://teamsunday.com/wp-content/uploads/2022/03/step1-1.png'
    },
    {
        'step' : 'step2',
        'title' : '3D Virtual Design',
        'body' : 'Our team of design experts creates a 3D example of your item, so you get the most realistic vision of the product.',
        'img' : 'https://teamsunday.com/wp-content/uploads/2022/03/step2.png'
    },
    {
        'step' : 'step3',
        'title' : 'Technical Details',
        'body' : 'We go through the technical details of your product, Pantone colours, decoration techniques, exact positioning, …',
        'img' : 'https://teamsunday.com/wp-content/uploads/2022/03/step3.png'
    },
    {
        'step' : 'step4',
        'title' : 'End result',
        'body' : 'We produce & deliver the items exactly as you ordered, so your team can enjoy your awesome new company fashion.',
        'img' : 'https://teamsunday.com/wp-content/uploads/2022/03/step4-1.png'
    }
]


// Call functions
$('.btn-wrapper > .primary-btn').on('click', preventDefault);
$('.btn-wrapper.design-steps > .primary-btn').on('click', showDesignSteps);