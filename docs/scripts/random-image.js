function randomImage() {
    fetch("/docs/res/data/images.json")
        .then(response => response.json())
        .then(data => {
            var imageIndex = Math.floor(Math.random() * data.length);
            var id = data[imageIndex].id;

            window.location = "/docs/galleria.html#" + id;
        })
        .catch(reason => console.log(reason));
}