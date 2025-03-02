$(document).ready(function() {
    const map = new maplibregl.Map({
        container: "map", // Elementin ID
        style: 'https://demotiles.maplibre.org/style.json',
        center: [9.750, 56.776],
        zoom: 2.4
    });
    
    const markers = {
        "italia": new maplibregl.Marker().setLngLat([9.09, 45.82]).addTo(map),
        "tampere": new maplibregl.Marker().setLngLat([23.776, 61.497]).addTo(map),
        "ruotsi": new maplibregl.Marker().setLngLat([17.3, 62.39]).addTo(map),
        "norja": new maplibregl.Marker().setLngLat([18.91, 69.63]).addTo(map),
        "viro": new maplibregl.Marker().setLngLat([25.75, 59.64]).addTo(map),
        "hossa": new maplibregl.Marker().setLngLat([29.3256, 65.5574]).addTo(map),
        "pyha": new maplibregl.Marker().setLngLat([27.23, 67.02]).addTo(map),
        "lahti": new maplibregl.Marker().setLngLat([25.638, 60.985]).addTo(map),
        "kuopio": new maplibregl.Marker().setLngLat([27.727, 62.896]).addTo(map),
        "venaja": new maplibregl.Marker().setLngLat([34.369, 61.799]).addTo(map),
    };

    $(".map-img").hover(
        function () {
            let markerId = $(this).data("marker");
            let marker = markers[markerId];
            marker.addClassName("hovered-marker");
            console.log(marker.getElement().style);
        },
        function () {
            let markerId = $(this).data("marker");
            let marker = markers[markerId];
            marker.removeClassName("hovered-marker");
        }
    );
});
