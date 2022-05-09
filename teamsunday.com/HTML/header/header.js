$(document).ready(function() {
    $("#navigation .nav-toggle").on('click', function() {
        $(this).next(".nav-dropdown").toggleClass("show").siblings(".nav-dropdown").removeClass("show");
        $(this).toggleClass("active").siblings(".nav-toggle").removeClass("active");
    });


    // Small menu
    $("#menu-toggle").on("click", function() {
        $(".small-menu-wrapper").toggle("show").toggleClass("opened");
    });


    // Small menu dropdown
    $(".small-menu-content > .nav-toggle").on("click", function() {
        $(".small-nav-dropdown .show").removeClass("show");
        $(".nav-toggle .opened").removeClass("opened");

        $(this).next(".small-nav-dropdown").toggleClass("show");
        $(this).toggleClass("opened");
        
        $(".multi-dropdown").removeClass("show");
    });


    // Multi dropdown
    $(".multi-toggle").on("click", function() {
        $(this).next(".multi-dropdown").toggleClass("show");
    });


    // Close menu when "outside click"
    // $(document).mouseup(function(e) { 
    //     var container = $(".nav-dropdown");

    //     // if the target of the click isn't the container nor a descendant of the container
    //     if (!container.is(e.target) && container.has(e.target).length === 0) {
    //         container.removeClass("show");
    //         $(".nav-toggle").removeClass("active");
    //     }
    // });
});

