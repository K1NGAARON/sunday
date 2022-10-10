function preventDefault(e) {
    e.preventDefault();
}

function showDesignSteps(e) {
    preventDefault(e);

    $('.design-steps > .primary-btn').removeClass('active');
    $(this).addClass('active');

    const activeDesignStep = e.target.id;
    
    if (activeDesignStep === 'step1') {
        designTitle.innerHTML = designSteps[0].title;
        designBody.innerHTML = designSteps[0].body;
        designImg.src = designSteps[0].img;
    } else if (activeDesignStep === 'step2') {
        designTitle.innerHTML = designSteps[1].title;
        designBody.innerHTML = designSteps[1].body;
        designImg.src = designSteps[1].img;
    } else if (activeDesignStep === 'step3') {
        designTitle.innerHTML = designSteps[2].title;
        designBody.innerHTML = designSteps[2].body;
        designImg.src = designSteps[2].img;
    } else {
        designTitle.innerHTML = designSteps[3].title;
        designBody.innerHTML = designSteps[3].body;
        designImg.src = designSteps[3].img;
    }
}

function showProducts(e) {
    preventDefault(e);

    $('.product-wrapper > .primary-btn').removeClass('active');
    $(this).addClass('active');

    const activeProduct = e.target.id;

    if (activeProduct === 'sport-shirt') {
        image1.src = productGallery[0].sportShirt1;
        image2.src = productGallery[0].sportShirt2;
        image3.src = productGallery[0].sportShirt3;
    } else if (activeProduct === 'sport-polo') {
        image1.src = productGallery[0].sportPolo1;
        image2.src = productGallery[0].sportPolo2;
        image3.src = productGallery[0].sportPolo3;
    } else if (activeProduct === 'sport-short') {
        image1.src = productGallery[0].sportShort1;
        image2.src = productGallery[0].sportShort2;
        image3.src = productGallery[0].sportShort3;
    } else if (activeProduct === 'tennis-wear') {
        image1.src = productGallery[0].tennisWear1;
        image2.src = productGallery[0].tennisWear2;
        image3.src = productGallery[0].tennisWear3;
    } else if (activeProduct === 'cycling-wear') {
        image1.src = productGallery[0].cyclingWear1;
        image2.src = productGallery[0].cyclingWear2;
        image3.src = productGallery[0].cyclingWear3;
    } else if (activeProduct === 'leggings') {
        image1.src = productGallery[0].leggings1;
        image2.src = productGallery[0].leggings2;
        image3.src = productGallery[0].leggings3;
    } else if (activeProduct === 'tracksuits') {
        image1.src = productGallery[0].tracksuit1;
        image2.src = productGallery[0].tracksuit2;
        image3.src = productGallery[0].tracksuit3;
    } else if (activeProduct === 'sport-bags') {
        image1.src = productGallery[0].sportBags1;
        image2.src = productGallery[0].sportBags2;
        image3.src = productGallery[0].sportBags3;
    }
}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(e) {
    showSlides(slideIndex += e);
}

function minSlides(e) {
    showSlides(slideIndex -= e);
}

function currentSlide(e) {
    showSlides(slideIndex = e);
}

function showSlides(e) {
    let slides = document.getElementsByClassName("mySlides");

    if (e > slides.length) {
        slideIndex = 1;
    }

    if (e < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";

}


// PRODUCT GALLERY
const image1 = document.querySelector('#first-slide');
const image2 = document.querySelector('#second-slide');
const image3 = document.querySelector('#third-slide');


const productGallery = [
    {
        'sportShirt1' : 'https://teamsunday.com/wp-content/uploads/2022/10/sportshirt1.jpg',
        'sportShirt2' : 'https://teamsunday.com/wp-content/uploads/2022/10/sportshirt2.jpg',
        'sportShirt3' : 'https://teamsunday.com/wp-content/uploads/2022/10/sportshirt3.jpg',

        'sportPolo1' : 'https://teamsunday.com/wp-content/uploads/2022/10/sportpolo1-scaled.jpg',
        'sportPolo2' : 'https://teamsunday.com/wp-content/uploads/2022/10/sportpolo2-scaled.jpg',
        'sportPolo3' : 'https://teamsunday.com/wp-content/uploads/2022/10/sportpolo1-scaled.jpg',

        'sportShort1' : 'https://teamsunday.com/wp-content/uploads/2022/10/sportshort1-scaled.jpg',
        'sportShort2' : 'https://teamsunday.com/wp-content/uploads/2022/10/sportshort1-scaled.jpg',
        'sportShort3' : 'https://teamsunday.com/wp-content/uploads/2022/10/sportshort1-scaled.jpg',

        'tennisWear1' : '',
        'tennisWear2' : '',
        'tennisWear3' : '',

        'cyclingWear1' : '',
        'cyclingWear2' : '',
        'cyclingWear3' : '',

        'leggings1' : '',
        'leggings2' : '',
        'leggings3' : '',

        'tracksuit1' : '',
        'tracksuit2' : '',
        'tracksuit3' : '',

        'sportBags1' : '',
        'sportBags2' : '',
        'sportBags3' : ''

    }
]


// DESIGN STEPS

const designTitle = document.querySelector('.designTitle');
const designBody = document.querySelector('.designBody');
const designImg = document.querySelector('.designImg');


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
$('.btn-wrapper.design-steps > .primary-btn').on('click', showDesignSteps);
$('.btn-wrapper.product-wrapper > .primary-btn').on('click', showProducts);