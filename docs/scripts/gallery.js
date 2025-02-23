function loadGalleryImage(file) {
    fetch(file)
        .then(response => response.json())
        .then(data => {
            const hr = document.createElement("hr");
            hr.classList.add("h-px", "my-8", "bg-gray-200", "border-0", "dark:bg-gray-700"); // TODO muuta omaan tyyliin

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

            entryHeading.innerText = data.title;
            entryDescription.innerText = data.description;
            categoryLink.innerText = data.category;

            const content = document.getElementById("content")
            content.appendChild(hr);
            content.appendChild(article);
        })
        .catch(reason => console.log(reason));
}

loadGalleryImage("./res/data/test_image.json");