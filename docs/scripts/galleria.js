function loadGalleryCategories(file) {
    fetch(file)
        .then(response => response.json())
        .then(data => {
            const content = document.getElementById("content");
            const nav = document.getElementById("main-nav");

            for (let i = 0; i < data.length; i++) {
                let imgData = data[i];

                const hr = document.createElement("hr");
                hr.classList.add("h-px", "my-8", "bg-gray-500", "border-0");

                const entryHeading = document.createElement("h3");
                const entryInfo = document.createElement("p");
                entryInfo.classList.add("italic");
                const entryDescription = document.createElement("p");
                entryDescription.classList.add("mb-6");
                const entryCategory = document.createElement("p");
                entryDescription.classList.add("mb-6");
                
                const categoryText = document.createElement("span");
                categoryText.classList.add("font-bold");
                categoryText.innerText = "Kategoria: ";
                const categoryLink = document.createElement("a");
                categoryLink.classList.add("underline", "hover:text-blue-400");

                entryCategory.appendChild(categoryText);
                entryCategory.appendChild(categoryLink);

                const img = document.createElement("img");
                img.classList.add("modal-tmb", "cursor-pointer", "rounded-md", "shadow-lg", "float-right", "ml-4");

                const article = document.createElement("article");
                article.appendChild(img);
                article.appendChild(entryHeading);
                article.appendChild(entryInfo);
                article.appendChild(entryDescription);
                article.appendChild(entryCategory);
                
                article.style.minHeight = imgData.image_height + "px";
                img.style.height = imgData.image_height + "px";

                entryHeading.innerText = imgData.title;
                entryHeading.id = imgData.id;
                entryInfo.innerText = imgData.date + ", " + imgData.location;
                entryDescription.innerText = imgData.description;
                categoryLink.innerText = imgData.category;
                categoryLink.href = "./aiheet/aihe.html?name=" + imgData.category;
                img.src = "/docs/res/images/" + imgData.thumbnail;
                img.setAttribute("data-full-image", "/docs/res/images/" + imgData.file);
                content.appendChild(hr);
                content.appendChild(article);

                //

                const a = document.createElement("a");
                a.classList.add("underline", "hover:text-blue-400");
                a.href = "#" + imgData.id;
                a.innerText = imgData.date + " - " + imgData.title;
                const li = document.createElement("li");
                li.appendChild(a);

                nav.appendChild(li);
            }
        })
        .catch(reason => console.log(reason));
}

loadGalleryCategories("/docs/res/data/images.json");