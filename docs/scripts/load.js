$(function() {
    $("#header").load("/wmk/html/header.html");
    $("#nav-top").load("/wmk/html/nav-top.html", function() {
        // Näytä tämänhetkinen sivu valittuna
        var location = window.location.href;
        var paramIndex = location.indexOf("?");
        if (paramIndex == -1) paramIndex = location.length;
        location = location.slice(location.lastIndexOf("/") + 1, paramIndex);
        if (location.endsWith(".html")) {
            location = location.slice(0, location.length - 5);
        }
        if (location == "aihe") location = "aiheet"; // Ei näin
        
        const navList = document.getElementById("nav-" + location);
        navList.classList.add("bg-blue-800");
    });
    $("#footer").load("/wmk/html/footer.html");
})
