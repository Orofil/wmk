function loadGalleryCategories() {
    fetch("/docs/res/data/images.json")
        .then(response => response.json())
        .then(data => {
            const content = document.getElementById("content");

            for (let i = 0; i < data.length; i++) {
                let imgData = data[i];

                const hr = document.createElement("hr");
                hr.classList.add("my-7", "bg-gray-300");

                const entryHeading = document.createElement("h3");
                entryHeading.classList.add("text-2xl", "font-semibold", "mt-8", "mb-2");
                const entryInfo = document.createElement("p");
                entryInfo.classList.add("italic");
                const entryDescription = document.createElement("p");
                entryDescription.classList.add("mb-6", "text-base/7");
                const entryCategory = document.createElement("p");
                entryCategory.classList.add("mb-6", "text-base/7");
                
                const categoryText = document.createElement("span");
                categoryText.classList.add("font-bold");
                categoryText.innerText = "Kategoria: ";
                const categoryLink = document.createElement("a");
                categoryLink.classList.add("underline", "hover:text-blue-400");

                entryCategory.appendChild(categoryText);
                entryCategory.appendChild(categoryLink);

                let media;
                if (imgData.type == "image") {
                    media = document.createElement("img");
                    media.src = "/docs/res/images/" + imgData.thumbnail;
                    media.classList.add("modal-tmb", "cursor-pointer", "rounded-lg", "shadow-lg");
                    media.loading = "lazy";
                    console.log("File: " + imgData.file);
                    media.setAttribute("data-full-image", "/docs/res/images/" + imgData.file);
                    console.log(media.getAttribute("data-full-image"));
                } else if (imgData.type == "video") {
                    media = document.createElement("video");
                    media.setAttribute("controls", "");
                    media.classList.add("rounded-lg", "shadow-lg");
                    var vidSource = document.createElement("source");
                    vidSource.src = "/docs/res/images/" + imgData.file;
                    media.appendChild(vidSource);
                }
                if (imgData.image_position == "bottom") {
                    media.classList.add("w-full");
                } else if (imgData.image_position == "bottom-right" || imgData.image_position == "right") {
                    media.classList.add("float-right", "ml-4");
                    media.style.height = imgData.image_height + "px";
                }
                
                const article = document.createElement("article");
                article.style.minHeight = imgData.image_height + "px";
                article.appendChild(entryHeading);
                article.appendChild(entryInfo);
                article.appendChild(entryDescription);
                article.appendChild(entryCategory);
                if (imgData.image_position == "bottom" || imgData.image_position == "bottom-right") {
                    article.insertBefore(media, entryCategory.nextSibling);
                } else if (imgData.image_position == "right") {
                    article.insertBefore(media, entryHeading);
                }

                entryHeading.innerText = imgData.title;
                entryHeading.id = imgData.id;
                entryInfo.innerText = imgData.date + ", " + imgData.location;
                entryDescription.innerText = imgData.description;
                categoryLink.innerText = imgData.category;
                categoryLink.href = "./aiheet/aihe.html?name=" + imgData.category;
                
                content.appendChild(hr);
                content.appendChild(article);

                //

                const a = document.createElement("a");
                a.classList.add("underline", "hover:text-blue-400");
                a.href = "#" + imgData.id;
                a.innerText = imgData.date + " - " + imgData.title;
                const li = document.createElement("li");
                li.appendChild(a);

                $(".main-nav").append(li);
            }
        })
        .catch(reason => console.log(reason));
}

loadGalleryCategories();

// Satunnaiseen kuvaan skrollausta varten
$(document).ready(function() {
    const targetID = window.location.hash.substring(1);
    if (!targetID) return;

    const observer = new MutationObserver((_, obs) => {
        const targetElement = $("#" + targetID);
        if (targetElement.length) {
            window.scrollTo(0, targetElement.offset().top);
            /* $("html, body").animate({ scrollTop: targetElement.offset().top }, "slow"); */
            obs.disconnect();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
});