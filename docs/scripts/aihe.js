$(document).ready(function() {
    const params = new URLSearchParams(window.location.search);

    if (!params.has("name") || params.get("name") == "") {
        document.location = "/docs/aiheet.html";
    }
    
    const titleParts = document.title.split("|");
    document.title = `${titleParts[0]}| ${params.get("name")} |${titleParts[1]}`;
    
    // Breadcrumb
    $("#breadcrumb-current").text(params.get("name"));
    
    // Otsikko
    $("#title").text(params.get("name"));
    
    // Kuvien lataaminen
    
    fetch("/docs/res/data/images.json")
        .then(response => response.json())
        .then(data => {
            const content = document.getElementById("images");
            const nav = document.getElementById("main-nav");

            for (let i = 0; i < data.length; i++) {
                let imgData = data[i];
                if (imgData.category != params.get("name")) continue;

                const img = document.createElement("img");
                img.classList.add("w-3xs");

                const div2 = document.createElement("div");
                div2.classList.add("p-4", "bg-neutral-700", "max-w-3xs", "text-ellipsis");
                const entryTitle = document.createElement("p");
                entryTitle.classList.add("font-bold", "text-white");
                const entryDescription = document.createElement("p");
                entryDescription.classList.add("line-clamp-3");

                div2.appendChild(entryTitle);
                div2.appendChild(entryDescription);

                const div = document.createElement("div");
                div.classList.add("modal-tmb", "m-2", "cursor-pointer", "rounded-lg", "overflow-hidden", "shadow-lg", "hover:shadow-neutral-500");
                div.appendChild(img);
                div.appendChild(div2);

                img.src = "/docs/res/images/" + imgData.file + "." + imgData.file_type;
                entryTitle.innerText = imgData.title;
                entryDescription.innerText = imgData.description;

                content.appendChild(div);

                //

                const a = document.createElement("a");
                a.classList.add("underline", "hover:text-blue-400");
                a.href = "#" + imgData.id;
                a.innerText = imgData.title;
                const li = document.createElement("li");
                li.appendChild(a);

                nav.appendChild(li);
            }
        })
        .catch(reason => console.log(reason));
});