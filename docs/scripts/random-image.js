function randomImage() {
    fetch("/wmk/res/data/images.json")
        .then(response => response.json())
        .then(data => {
            var imageIndex = Math.floor(Math.random() * data.length);
            var id = data[imageIndex].id;

            window.location = "/wmk/galleria#" + id;
        })
        .catch(reason => console.log(reason));
}