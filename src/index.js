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

var realtime = L.realtime(
  function (success, error) {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        success({
          type: "FeatureCollection",
          features: [data, trail]
        });
      })
      .catch((error) => console.log(error));
  },
  {
    interval: 3000
  }
).addTo(map);

var i = 0;
realtime.on("update", function () {
  console.log("i", i);
  i++;
  map.fitBounds(realtime.getBounds(), { maxZoom: 3 });
  if (i === 10) {
    trailCoords = [];
    realtime.stop();
    realtime.getLayer("trail").remove();
  }
});

window.realtime = realtime;
