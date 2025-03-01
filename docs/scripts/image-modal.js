$(document).on('click', '.modal-tmb', function() {
    let imgSrc = $(this).attr("src") || $(this).find("img").attr("src");
    console.log("Clicking");
    let underscore = imgSrc.lastIndexOf("_");
    let period = imgSrc.lastIndexOf(".");
    imgSrc = imgSrc.slice(0, underscore) + imgSrc.slice(period);
    $("#modal-img").attr("src", imgSrc);
    $("#modal-display").removeClass("hidden");
    $("body").addClass("overflow-hidden");
});

function closeModal() {
    $("#modal-img").removeAttr("src");
    $("#modal-display").addClass("hidden");
    $("body").removeClass("overflow-hidden");
}

$(document).on('click', '#modal-close', closeModal);

$(document).on('click', '#modal-display', closeModal);