const params = new URLSearchParams(window.location.search);

if (!params.has("name") || params.get("name") == "") {
    document.location = "/docs/aiheet.html";
}

const titleParts = document.title.split("|");
document.title = `${titleParts[0]}| ${params.get("name")} |${titleParts[1]}`;

// Breadcrumb
$("#breadcrumb-current").text(params.get("name"));

// Kuvien lataaminen

// TODO