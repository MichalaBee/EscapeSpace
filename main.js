const safeSpaceLight = [
    ["Folsom Library", 42.72935, -73.68254],
    ["Troy Public Library", 42.72801, -73.69213]
];
const safeSpaceSound = [
    ["Folsom Library", 42.72935, -73.68254],
    ["Troy Public Library", 42.72801, -73.69213]
];

const lat = 0;
const lon = 0;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
    lat = position.coords.latitude;
    lon = position.coords.longitude;
}