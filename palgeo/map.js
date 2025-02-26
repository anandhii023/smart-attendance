<script>
    // Function to get current location using Geolocation API
    function getCurrentLocation(callback) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                callback(lat, lon);
            }, function(error) {
                alert("Error in getting location: " + error.message);
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    // Function to set default location
    function setDefaultLocation() {
        getCurrentLocation(function(lat, lon) {
            document.getElementById('defaultLat').value = lat;
            document.getElementById('defaultLon').value = lon;
            alert("Default location set successfully!");
        });
    }

    // Function to check attendance based on current location
    function checkAttendance() {
        getCurrentLocation(function(currentLat, currentLon) {
            // Set current location
            document.getElementById('currentLat').value = currentLat;
            document.getElementById('currentLon').value = currentLon;

            // Get default location from form
            const defaultLat = parseFloat(document.getElementById('defaultLat').value);
            const defaultLon = parseFloat(document.getElementById('defaultLon').value);

            // Check if current location matches default location
            const resultElement = document.getElementById('attendanceResult');

            if (defaultLat === currentLat && defaultLon === currentLon) {
                resultElement.innerText = "Attendance recorded successfully. You are at the correct location.";
                resultElement.classList.add('success');
                resultElement.classList.remove('failed');
            } else {
                resultElement.innerText = "You are not at the default location. Attendance failed.";
                resultElement.classList.add('failed');
                resultElement.classList.remove('success');
            }
        });
    }

    // Automatically set current location for default and current location fields on page load
    window.onload = function() {
        getCurrentLocation(function(lat, lon) {
            document.getElementById('defaultLat').value = lat;
            document.getElementById('defaultLon').value = lon;
            document.getElementById('currentLat').value = lat;
            document.getElementById('currentLon').value = lon;
        });
    }
</script>
