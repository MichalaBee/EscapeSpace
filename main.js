const safeSpaceLight = [
    ["Folsom Library", 42.72935, -73.68254],
    ["Troy Public Library", 42.72801, -73.69213]
];
const safeSpaceSound = [
    ["Folsom Library", 42.72935, -73.68254],
    ["Troy Public Library", 42.72801, -73.69213],
    ["'86 Field", 42.73032, -73.67993]
];

let lat = 0;
let lon = 0;

const x = document.getElementById("demo");
const y = document.getElementById("demo1");
getLocation(); // Assuming this is a function defined in main.js

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
    let nearest = 0
    for (let i = 1; i < safeSpaceLight.length; i++) {
        const a1 = safeSpaceLight[nearest][1] - lat;
        const b1 = safeSpaceLight[nearest][2] - lon;
        const c1 = Math.sqrt(a1^2 + b1^2);
        const a2 = safeSpaceLight[i][1] - lat;
        const b2 = safeSpaceLight[i][2] - lon;
        const c2 = Math.sqrt(a2^2 + b2^2);
        if (c2 < c1) {
            nearest = i;
        }
    }
    console.log(safeSpaceLight[nearest][0]);
    y.innerHTML = safeSpaceLight[nearest][0];
}

function getNearestSound() {
    let nearest = 0
    for (let i = 1; i < safeSpaceSound.length; i++) {
        const a1 = safeSpaceSound[nearest][1] - lat;
        const b1 = safeSpaceSound[nearest][2] - lon;
        const c1 = Math.sqrt(a1^2 + b1^2);
        const a2 = safeSpaceSound[i][1] - lat;
        const b2 = safeSpaceSound[i][2] - lon;
        const c2 = Math.sqrt(a2^2 + b2^2);
        if (c2 < c1) {
            nearest = i;
        }
    }
    console.log(safeSpaceSound[nearest][0]);
    y.innerHTML = safeSpaceSound[nearest][0];
}