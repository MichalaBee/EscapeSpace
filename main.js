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

function getNearestLight() {
    const nearest = 0
    for (let i = 1; i < safeSpaceLight.length; i++) {
        const a1 = safeSpaceLight[nearest][1] - lat;
        const b1 = safeSpaceLight[nearest][2] - lon;
        const c1 = sqrt(a1^2 + b1^2);
        const a2 = safeSpaceLight[i][1] - lat;
        const b2 = safeSpaceLight[i][2] - lon;
        const c2 = sqrt(a2^2 + b2^2);
        if (c2 < c1) {
            nearest = i;
        }
    }
}

function getNearestSound() {

}