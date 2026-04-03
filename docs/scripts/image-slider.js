var slider = document.getElementById("slide-input");
slider.addEventListener("input", (event) => {
    $(".slide-image-container").css("--position", `${event.target.value}%`);
});