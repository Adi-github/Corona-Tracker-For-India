const mapbox_token = "pk.eyJ1IjoiYWRpbmlkIiwiYSI6ImNqb2cyemVpczA5dmszcHF6eHJ5YTFzOGQifQ.WZzjWJpbHgnuyzsUlD_EJg";

mapboxgl.accessToken = mapbox_token;
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/dark-v10',
center: [78.9629, 20.5937],
        zoom: 3

});

fetch("https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise")
.then(response => response.json())
.then(data => {

const {state,active} = data.data.statewise;
console.log(state,active)
} )