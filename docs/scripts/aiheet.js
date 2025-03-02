function loadGalleryCategories(file) {
    fetch(file)
        .then(response => response.json())
        .then(data => {
            const content = document.getElementById("content");
            const nav = document.getElementById("main-nav");

            for (let i = 0; i < data.length; i++) {
                let imgData = data[i];

                const aa = document.createElement("a");
                aa.classList.add("relative", "float-right", "my-4", "mx-10", "px-8", "w-xs", "h-20", "hover:outline-2", "hover:outline-white", "rounded-3xl", "overflow-hidden", "flex", "gap-3", "items-center", "text-black", "text-lg");

                const img = document.createElement("img");
                img.classList.add("absolute", "right-0", "object-cover");
                img.loading = "lazy";
                img.decoding = "async";

                const divGradient = document.createElement("div");
                divGradient.classList.add("absolute", "w-full", "h-full", "top-0", "bottom-0", "left-0", "right-0", "bg-gradient-to-r", "from-neutral-600/90", "from-50%", "to-neutral-600/0", "to-80%");
                const divText = document.createElement("div");
                divText.classList.add("pb-1", "font-semibold", "text-2xl", "z-10");

                const svg = document.createElement("svg");
                svg.classList.add("z-10");
                svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                svg.setAttribute("width", "24");
                svg.setAttribute("height", "24");
                const path = document.createElement("path");
                path.setAttribute("d", "M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z");
                path.setAttribute("fill", "none");
                path.setAttribute("stroke", "#000000");
                path.setAttribute("stroke-width", "2");
                path.setAttribute("stroke-linejoin", "round");
                svg.appendChild(path);

                aa.appendChild(img);
                aa.appendChild(divGradient);
                aa.appendChild(divText);
                aa.appendChild(svg);

                aa.href = "./aiheet/aihe.html?name=" + imgData.category;
                img.src = "/docs/res/images/" + imgData.thumbnail;
                divText.innerText = imgData.category;
                content.appendChild(aa);

                //

                /* const a = document.createElement("a");
                a.classList.add("underline", "hover:text-blue-400");
                a.href = "#" + imgData.id;
                a.innerText = imgData.date + " - " + imgData.title;
                const li = document.createElement("li");
                li.appendChild(a);

                nav.appendChild(li); */
            }
        })
        .catch(reason => console.log(reason));
}

loadGalleryCategories("/docs/res/data/images.json");