// Define some maps options
var mapOptions = {
  center: [12.9746551, 77.7282992],
  zoom: 15
};

//Create a map and assign it to the map div
var map = L.map("leafletMapid", mapOptions);

//  Add a baselayer
L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
  {
    attribution:
      "Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri",
    maxZoom: 24
  }
).addTo(map);

var realtime = L.realtime( {
    url: "/api",
    type: "json"
  },
  {
    interval: 3000,
    pointToLayer: function (feature, latlng) {
        var marker =  L.marker(latlng, {
            'icon': L.icon({
                iconUrl: './src/bus.png',
                iconSize:     [38, 95], // size of the icon
                iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
                popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
            })
        });
        marker.bindTooltip("Route 20", 
        {
            permanent: true, 
            direction: 'right'
        });
        return marker;
    }
  }
).addTo(map);

realtime.on("update", function () {
  map.fitBounds(realtime.getBounds(), { maxZoom: 16 });
});
