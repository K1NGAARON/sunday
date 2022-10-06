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

    if (activeProduct === 'bucket-hats') {
        image1.src = productGallery[0].bucketHats1;
        image2.src = productGallery[0].bucketHats2;
        image3.src = productGallery[0].bucketHats3;
    } else if (activeProduct === 'snapbacks') {
        image1.src = productGallery[0].snapbacks1;
        image2.src = productGallery[0].snapbacks2;
        image3.src = productGallery[0].snapbacks3;
    } else if (activeProduct === 'baseball-caps') {
        image1.src = productGallery[0].baseballCaps1;
        image2.src = productGallery[0].baseballCaps2;
        image3.src = productGallery[0].baseballCaps3;
    } else if (activeProduct === 'dad-hats') {
        image1.src = productGallery[0].dadHats1;
        image2.src = productGallery[0].dadHats2;
        image3.src = productGallery[0].dadHats3;
    } else if (activeProduct === 'trucker-caps') {
        image1.src = productGallery[0].truckerCaps1;
        image2.src = productGallery[0].truckerCaps2;
        image3.src = productGallery[0].truckerCaps3;
    } else if (activeProduct === 'buffs') {
        image1.src = productGallery[0].buffs1;
        image2.src = productGallery[0].buffs2;
        image3.src = productGallery[0].buffs3;
    } else if (activeProduct === 'beanies') {
        image1.src = productGallery[0].beanies1;
        image2.src = productGallery[0].beanies2;
        image3.src = productGallery[0].beanies3;
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
        'buffs1' : 'https://teamsunday.com/wp-content/uploads/2022/10/buff1.jpg',
        'buffs2' : 'https://teamsunday.com/wp-content/uploads/2022/10/buff2.jpg',
        'buffs3' : 'https://teamsunday.com/wp-content/uploads/2022/10/buff3.jpg',

        'beanies1' : 'https://teamsunday.com/wp-content/uploads/2022/10/beanie1.jpg',
        'beanies2' : 'https://teamsunday.com/wp-content/uploads/2022/10/beanie2.jpg',
        'beanies3' : 'https://teamsunday.com/wp-content/uploads/2022/10/beanie3.jpg',

        'bucketHats1' : 'https://teamsunday.com/wp-content/uploads/2022/10/bucket1.jpg',
        'bucketHats2' : 'https://teamsunday.com/wp-content/uploads/2022/10/bucket2.jpg',
        'bucketHats3' : 'https://teamsunday.com/wp-content/uploads/2022/10/bucket3.jpg',

        'snapbacks1' : 'https://teamsunday.com/wp-content/uploads/2022/10/snapback1.jpg',
        'snapbacks2' : 'https://teamsunday.com/wp-content/uploads/2022/10/snapback1.jpg',
        'snapbacks3' : 'https://teamsunday.com/wp-content/uploads/2022/10/snapback1.jpg',

        'baseballCaps1' : 'https://teamsunday.com/wp-content/uploads/2022/10/baseball1.jpg',
        'baseballCaps2' : 'https://teamsunday.com/wp-content/uploads/2022/10/baseball2.jpg',
        'baseballCaps3' : 'https://teamsunday.com/wp-content/uploads/2022/10/baseball3.jpg',

        'dadHats1' : 'https://teamsunday.com/wp-content/uploads/2022/10/cap1.jpg',
        'dadHats2' : 'https://teamsunday.com/wp-content/uploads/2022/10/cap2.jpg',
        'dadHats3' : 'https://teamsunday.com/wp-content/uploads/2022/10/cap3.jpg',

        'truckerCaps1' : 'https://teamsunday.com/wp-content/uploads/2022/10/trucker1.jpg',
        'truckerCaps2' : 'https://teamsunday.com/wp-content/uploads/2022/10/trucker2.jpg',
        'truckerCaps3' : 'https://teamsunday.com/wp-content/uploads/2022/10/trucker3.jpg'
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