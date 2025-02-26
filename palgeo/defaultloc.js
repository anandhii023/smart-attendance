// Function to calculate distance between two coordinates using Haversine formula
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
}

// Converts degrees to radians
function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

// Function to compare current location with the embedded Google Maps location
function compareLocation() {
    const embeddedLat = 12.8686884; // Latitude of the iframe location
    const embeddedLon = 80.2155631; // Longitude of the iframe location

    // Check if Geolocation is available
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const userLat = position.coords.latitude;
            const userLon = position.coords.longitude;

            // Calculate the distance between the user location and embedded location
            const distance = getDistanceFromLatLonInKm(userLat, userLon, embeddedLat, embeddedLon);
            
            // Show the result based on the distance
            const resultElement = document.getElementById('result');
            if (distance < 0.02) { // Adjust distance threshold as needed
                resultElement.innerText = `You are at or near the embedded location. (Distance: ${distance.toFixed(2)} km)`;
                resultElement.style.color = 'green';
            } else {
                resultElement.innerText = `You are far from the embedded location. (Distance: ${distance.toFixed(2)} km)`;
                resultElement.style.color = 'red';
            }
        });
    } else {
        document.getElementById('result').innerText = "Geolocation is not supported by your browser.";
    }
}
