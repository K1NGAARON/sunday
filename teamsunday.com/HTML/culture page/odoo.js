$(document).ready(function() {
    const $iFrame = document.querySelector(".card-body>.well>iframe");
    
    if(typeof $iFrame !== 'undefined') {
        $($iFrame).attr('height', '700');    
    } else {
        
    }
});