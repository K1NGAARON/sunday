$( document ).ready(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        var links = this.el.find('.article-title');
        links.on('click', {
                el: this.el,
                multiple: this.multiple
        }, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $(this).next();

        $next.slideToggle();
        $(this).parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.accordion-content').not($next).slideUp().parent().removeClass('open');
        };
    }
    var accordion = new Accordion($('.accordion-container'), false);

    $(document).on('click', function (event) {
    if (!$(event.target).closest('#accordion').length) {
        $(this).parent().toggleClass('open');
    }
    });
});


let collectionsTarget = document.querySelector("#client-cases > .custom-row");
let collections = [
    {
        'name': 'Brooklyn',
        'src' : '/wp-content/uploads/2022/01/Brooklyn-collection.jpg',
        'url' : 'google.com'
    },
    {
        'name': 'Uberall',
        'src' : '/wp-content/uploads/2021/12/Uberall-Collection-1.jpg',
        'url' : 'google.com'
    },
    {
        'name': 'Ablo',
        'src' : '/wp-content/uploads/2022/01/Ablo-collection.jpg',
        'url' : 'google.com'
    }
];

// Create collections section
function createCollections() {
    for (let i = 0; i < collections.length; i++) {
        const collectionTemplate = `
            <div class="client-collections-wrapper">
                <a href="${collections[i].url}">
                    <img src="${collections[i].src}" alt="${collections[i].name}">
                    <a class="collections-title">${collections[i].name} ➔</a>
                </a>
            </div>
        `; 
        collectionsTarget.insertAdjacentHTML("beforeend", collectionTemplate);
    };
};

$(document).ready(function() {
    createCollections();
});