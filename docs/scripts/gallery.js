function loadGalleryImage(file) {
    fetch(file)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                let imgData = data[i];

                const hr = document.createElement("hr");
                hr.classList.add("h-px", "my-8", "bg-gray-500", "border-0");

                const entryHeading = document.createElement("h3");
                const entryDescription = document.createElement("p");
                entryDescription.classList.add("mb-6");
                const entryCategory = document.createElement("p");
                entryDescription.classList.add("mb-6");
                
                const categoryText = document.createElement("span");
                categoryText.classList.add("font-bold");
                categoryText.innerText = "Kategoria: ";
                const categoryLink = document.createElement("a");
                categoryLink.classList.add("underline");

                entryCategory.appendChild(categoryText);
                entryCategory.appendChild(categoryLink);

                const article = document.createElement("article");
                article.appendChild(entryHeading);
                article.appendChild(entryDescription);
                article.appendChild(entryCategory);

                entryHeading.innerText = imgData.title;
                entryDescription.innerText = imgData.description;
                categoryLink.innerText = imgData.category;

                const content = document.getElementById("content")
                content.appendChild(hr);
                content.appendChild(article);
            }
        })
        .catch(reason => console.log(reason));
}

loadGalleryImage("/docs/res/data/images.json");