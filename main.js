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

let startlat = 37.7749;
let startlon = -122.4194;
let endlat = 34.0522;
let endlon = -118.2437;

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
    startlat = position.coords.latitude;
    startlon = position.coords.longitude;
}

function getNearestLight() {
    let nearest = 0
    for (let i = 1; i < safeSpaceLight.length; i++) {
        const a1 = safeSpaceLight[nearest][1] - startlat;
        const b1 = safeSpaceLight[nearest][2] - startlon;
        const c1 = Math.sqrt(a1^2 + b1^2);
        const a2 = safeSpaceLight[i][1] - startlat;
        const b2 = safeSpaceLight[i][2] - startlon;
        const c2 = Math.sqrt(a2^2 + b2^2);
        if (c2 < c1) {
            nearest = i;
        }
    }
    console.log(safeSpaceLight[nearest][0]);
    endlat = safeSpaceLight[nearest][1];
    endlon = safeSpaceLight[nearest][2];
    changeRoute();
    handleMapUpdate();
}

function getNearestSound() {
    var nearest = 0
    for (let i = 1; i < safeSpaceSound.length; i++) {
        const a1 = safeSpaceSound[nearest][1] - startlat;
        const b1 = safeSpaceSound[nearest][2] - startlon;
        const c1 = Math.sqrt(a1^2 + b1^2);
        const a2 = safeSpaceSound[i][1] - startlat;
        const b2 = safeSpaceSound[i][2] - startlon;
        const c2 = Math.sqrt(a2^2 + b2^2);
        if (c2 < c1) {
            nearest = i;
        }
    }
    console.log(safeSpaceSound[nearest][0]);
    endlat = safeSpaceSound[nearest][1];
    endlon = safeSpaceSound[nearest][2];
    changeRoute();
    handleMapUpdate();
}

let map;
let directionsService;
let directionsRenderer;

function initMap() {      
    // Initialize the map centered at an arbitrary location (you can adjust this)
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: startlat, lng: startlon }, // Default to San Francisco, adjust as needed
        zoom: 12,
    });

    // Initialize the DirectionsService and DirectionsRenderer
    directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    // Coordinates for the start and destination points (replace these with your own)
    const start = { lat: startlat, lng: startlon }; // San Francisco
    const end = { lat: endlat, lng: endlon };   // Los Angeles

    // Call the function to get directions
    getRoute(start, end);
}

function getRoute(start, end) {
    const request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.WALKING, // You can change to WALKING, BICYCLING, etc.
    };

    // Calculate and display the route
    directionsService.route(request, function (result, status) {
        if (status === google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(result);
        } else {
        alert("Directions request failed due to " + status);
        }
    });
}

function changeRoute() {
    // New route
    const newStart = { lat: startlat, lng: startlon };
    const newEnd = { lat: endlat, lng: endlon };

    const request = {
      origin: newStart,
      destination: newEnd,
      travelMode: google.maps.TravelMode.WALKING
    };

    directionsService.route(request, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsRenderer.setDirections(result);
      }
    });
  }

function handleMapUpdate() {
    // Get the coordinates of the map's center
    const center = map.getCenter();

    // Calculate the target scroll position (adjust as needed)
    const targetY = document.getElementById('map').offsetTop;

    // Scroll to the target position
    window.scrollTo({
        top: targetY,
        behavior: 'smooth' // Optional for smooth scrolling
    });
}