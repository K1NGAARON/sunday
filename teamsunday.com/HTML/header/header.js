$(document).ready(function() {
    $(".nav-toggle").on('click', function() {
        $(this).next(".nav-dropdown").toggleClass("show").siblings(".nav-dropdown").removeClass("show");
        $(this).toggleClass("active").siblings(".nav-toggle").removeClass("active");
    });

    // Small menu
    $("#menu-toggle").on("click", function() {
        $(".small-menu-wrapper").toggle("show").toggleClass("opened");
    });
});

