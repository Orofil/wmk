const map = new maplibregl.Map({
    container: "map", // Elementin ID
    style: 'https://demotiles.maplibre.org/style.json',
    center: [9.750, 56.776],
    zoom: 2.4
});

const marker = new maplibregl.Marker()
        .setLngLat([-4.614, 36.5499])
        .addTo(map);