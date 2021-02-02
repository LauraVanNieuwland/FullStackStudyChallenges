// TODO: Write your JS code in here
import mapboxgl from 'mapbox-gl';
// store user input
const input = document.querySelector("#inputAddress");
const results = document.querySelector("#coordinates");
const form = document.querySelector('#form');

// GET User input
const getUserInput = () => {
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${input.value}.json?access_token=pk.eyJ1IjoibGF1cmF2YW5uaWV1d2xhbmQiLCJhIjoiY2tkazZocGJrMGx0dzJxcTN0M3E3c2lhaiJ9.8SesDzHf0WNwq2rz-nx6Ig`)
    .then(response => response.json())
    .then((data) => {
      const longitude = data.features[0].geometry.coordinates[0];
      const latitude = data.features[0].geometry.coordinates[1];
      const coordinates = `<h2><strong> Address</strong> :: ${input.value}</h2>
      <li><p><strong> Longitude</strong> ${longitude}</p></li>
      <li><p><strong> Latitude </strong> ${latitude}</p></li>`;
      results.insertAdjacentHTML("beforeend", coordinates);
      mapboxgl.accessToken = 'pk.eyJ1IjoibGF1cmF2YW5uaWV1d2xhbmQiLCJhIjoiY2tkazZocGJrMGx0dzJxcTN0M3E3c2lhaiJ9.8SesDzHf0WNwq2rz-nx6Ig';
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [longitude, latitude],
        zoom: 12
      });
      new mapboxgl.Marker()
        .setLngLat([longitude, latitude])
        .addTo(map);
    });
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  getUserInput();
});
