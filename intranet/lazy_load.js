$(document).ready(function() {
    $('[data-trx-lazyload-src]').each(el => {
        $(el).attr('src', $(el).data('trx-lazyload-src'));
    })
});