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

    if (activeProduct === 'business-shirt') {
        image1.src = productGallery[0].businessShirt1;
        image2.src = productGallery[0].businessShirt2;
        image3.src = productGallery[0].businessShirt3;
    } else if (activeProduct === 'business-sweater') {
        image1.src = productGallery[0].businessSweater1;
        image2.src = productGallery[0].businessSweater2;
        image3.src = productGallery[0].businessSweater3;
    } else if (activeProduct === 'jacket') {
        image1.src = productGallery[0].jacket1;
        image2.src = productGallery[0].jacket2;
        image3.src = productGallery[0].jacket3;
    } else if (activeProduct === 'laptop-sleeve') {
        image1.src = productGallery[0].laptopSleeves1;
        image2.src = productGallery[0].laptopSleeves2	;
        image3.src = productGallery[0].laptopSleeves3	; 
    } else if (activeProduct === 'socks') {
        image1.src = productGallery[0].socks1;
        image2.src = productGallery[0].socks2;
        image3.src = productGallery[0].socks3; 
    } else if (activeProduct === 'notebook') {
        image1.src = productGallery[0].notebook1;
        image2.src = productGallery[0].notebook2;
        image3.src = productGallery[0].notebook3;
    } else if (activeProduct === 'backpack') {
        image1.src = productGallery[0].backpack1;
        image2.src = productGallery[0].backpack2;
        image3.src = productGallery[0].backpack3;
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
        'businessShirt1' : 'https://teamsunday.com/wp-content/uploads/2022/10/bizshirt1.jpg',
        'businessShirt2' : 'https://teamsunday.com/wp-content/uploads/2022/10/bizshirt2.jpg',
        'businessShirt3' : 'https://teamsunday.com/wp-content/uploads/2022/10/bizshirt3.jpg',

        'businessSweater1' : 'https://teamsunday.com/wp-content/uploads/2022/10/businesssweater1.jpg',
        'businessSweater2' : 'https://teamsunday.com/wp-content/uploads/2022/10/businesssweater2.jpg',
        'businessSweater3' : 'https://teamsunday.com/wp-content/uploads/2022/10/businesssweater1.jpg',

        'laptopSleeves1' : 'https://teamsunday.com/wp-content/uploads/2022/10/laptopsleeve1.jpg',
        'laptopSleeves2' : 'https://teamsunday.com/wp-content/uploads/2022/10/laptopsleeve2.jpg',
        'laptopSleeves3' : 'https://teamsunday.com/wp-content/uploads/2022/10/laptopsleeve1.jpg',

        'socks1' : 'https://teamsunday.com/wp-content/uploads/2022/10/socks1.jpg',
        'socks2' : 'https://teamsunday.com/wp-content/uploads/2022/10/socks2.jpg',
        'socks3' : 'https://teamsunday.com/wp-content/uploads/2022/10/socks3.jpg',

        'notebook1' : 'https://teamsunday.com/wp-content/uploads/2022/10/notebook1.jpg',
        'notebook2' : 'https://teamsunday.com/wp-content/uploads/2022/10/notebook2.jpg',
        'notebook3' : 'https://teamsunday.com/wp-content/uploads/2022/10/notebook1.jpg',

        'backpack1' : 'https://teamsunday.com/wp-content/uploads/2022/10/backpack1.jpg',
        'backpack2' : 'https://teamsunday.com/wp-content/uploads/2022/10/backpack1.jpg',
        'backpack3' : 'https://teamsunday.com/wp-content/uploads/2022/10/backpack1.jpg',


        'jacket1' : 'https://teamsunday.com/wp-content/uploads/2022/10/jacket1.jpg',
        'jacket2' : 'https://teamsunday.com/wp-content/uploads/2022/10/jacket2.jpg',
        'jacket3' : 'https://teamsunday.com/wp-content/uploads/2022/10/jacket3.jpg'
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