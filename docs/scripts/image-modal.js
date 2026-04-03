$(document).on('click', '.modal-tmb', function() {
    let imgSrc = $(this).attr("data-full-image") || $(this).find("img").attr("data-full-image");
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