$(document).ready(function() {
    $("#main-nav-btn").click(function() {
        $("#main-nav-small").toggleClass("hidden");
    });

    $(window).scroll(function() {
        $(window).scroll(function () {
        if ($(window).scrollTop() > 250) {
            $("#main-nav-small-container").removeClass("absolute").addClass("fixed top-14");
        } else {
            $("#main-nav-small-container").removeClass("fixed top-14").addClass("absolute");
        }
        });
    });
});

