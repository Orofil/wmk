$(document).ready(function() {
    $(".modal-tmb").click(function() {
        let imgSrc = $(this).attr("src");
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

    $("#modal-close").click(closeModal);

    $("#modal-display").click(function(event) {
        if (event.target === this) {
            closeModal();
        }
    });
});