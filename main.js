const safeSpaceLight = [
    ["Folsom Library", 42.72935, -73.68254],
    ["Troy Public Library", 42.72801, -73.69213]
];
const safeSpaceSound = [
    ["Folsom Library", 42.72935, -73.68254],
    ["Troy Public Library", 42.72801, -73.69213],
    ["'86 Field", 42.73032, -73.67993],
    ["Prospect Park", 42.72413, -73.68452],
    ["Poestenkill Gorge Park", 42.72016, -73.68058],
    ["Beman Park", 42.73369, -73.67459],
    ["Burden Environmental Park", 42.70689, -73.68921],
    ["St. Joseph Cemetery", 42.7085, -73.68595],
    ["New Mount Ida Cemetery", 42.71755, -73.66532],
    ["Temple Beth El Cemetery", 42.71743, -73.66051],
    ["Beth Tephilah Cemetery", 42.71721, -73.66107],
    ["Elmwood Hill Cemetery", 42.71998, -73.66227],
    ["Mount Ida Catholic Cemetery", 42.71948, -73.67403],
    ["Old Mount Ida Cemetery", 42.72049, -73.67385],
    ["St. Mary's Cemetery", 42.72913, -73.66183],
    ["Frear Park", 42.75117, -73.66873],
    ["Oakwood Cemetery", 42.76069, -73.6669],
    ["St. John's Cemetery", 42.7817, -73.66382],
    ["St.Nicholas Cemetery", 42.69914, -73.68765],
    ["Kinloch Park", 42.71038, -73.66142],
    ["Sage Park", 42.72882, -73.6927]
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
}