$(function() {
    $("#header").load("./html/header.html");
    $("#nav-top").load("./html/nav-top.html", function() {
        // Näytä tämänhetkinen sivu valittuna
        var location = window.location.href;
        location = location.slice(location.lastIndexOf("/") + 1);
        if (location.endsWith(".html")) {
            location = location.slice(0, location.length - 5);
        }
        
        const navList = document.getElementById("nav-" + location);
        navList.classList.add("bg-blue-800");
    });
    $("#footer").load("./html/footer.html");
})