var mymap = L.map('mapid').setView([20.5937, 78.9629], 4);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {

  id: 'mapbox/dark-v10',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoiYWRpbmlkIiwiYSI6ImNqb2cyemVpczA5dmszcHF6eHJ5YTFzOGQifQ.WZzjWJpbHgnuyzsUlD_EJg'
}).addTo(mymap);

let latlong = [
  [27.391277, 73.432617],
  [22.309425, 72.136230],
  [11.059821, 78.387451],
  [17.123184, 79.208824],
  [23.473324, 77.947998],
  [29.238478, 76.431885],
  [21.295132, 81.828232],
  [29.065773, 76.040497],
  [25.794033, 78.116531],
  [23.745127, 91.746826],
  [17.874857, 78.100815],
  [15.317277, 75.713890],
  [10.850516, 76.271080],
  [28.207609, 79.826660],
  [26.244156, 92.537842],
  [19.663280, 75.300293],
  [11.127123, 78.656891],
  [15.317277, 75.713890],
  [22.978624, 87.747803],
  [20.940920, 84.803467],
  [32.084206, 77.571167]
]
for (let index = 0; index < latlong.length; index++) {
  const element = latlong[index];
  var redIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  var marker = L.marker(element, {
    icon: redIcon
  }).addTo(mymap);

  marker.bindPopup("Confirmed");
}
$('.leaflet-control-attribution').hide()


var mymap2 = L.map('mapid2').setView([20.5937, 78.9629], 4);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {

  id: 'mapbox/light-v10',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoiYWRpbmlkIiwiYSI6ImNqb2cyemVpczA5dmszcHF6eHJ5YTFzOGQifQ.WZzjWJpbHgnuyzsUlD_EJg'
}).addTo(mymap2);


let latlong2 = [
  [27.391277, 73.432617],
  [22.309425, 72.136230],
  [11.059821, 78.387451],
  [17.123184, 79.208824],
  [23.473324, 77.947998],
  [29.238478, 76.431885],
  [21.295132, 81.828232],
  [29.065773, 76.040497],
  [25.794033, 78.116531],
  [23.745127, 91.746826],
  [17.874857, 78.100815],
  [15.317277, 75.713890],
  [10.850516, 76.271080],
  [28.207609, 79.826660],
  [26.244156, 92.537842],
  [19.663280, 75.300293],
  [11.127123, 78.656891],
  [15.317277, 75.713890],
  [22.978624, 87.747803],
  [20.940920, 84.803467],
  [32.084206, 77.571167]
]
for (let index = 0; index < latlong2.length; index++) {
  const element = latlong2[index];
  var redIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  var marker = L.marker(element, {
    icon: redIcon
  }).addTo(mymap2);

  marker.bindPopup("Confirmed");
}
$('.leaflet-control-attribution').hide()