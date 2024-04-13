// Function to fetch weather information from OpenWeatherMap API using AJAX
/*function fetchWeather() {
    // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
    var apiKey = 'deb80ca98278efc7625875b31dd04673';
    // Replace 'LATITUDE' with the latitude coordinate of the desired location
    var latitude = '37.5519';
    // Replace 'LONGITUDE' with the longitude coordinate of the desired location
    var longitude = '126.9918';
    // Construct the API URL
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Configure the request
    xhr.open('GET', apiUrl, true);

    // Set up a callback function to handle the response
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            // Request was successful
            var responseData = JSON.parse(xhr.responseText);
            console.log(responseData);
            // Extract relevant weather information from the response data
            var weatherDescription = responseData.weather[0].description;
            var temperature = responseData.main.temp;
            var temp=temperature-273.15;
            var humidity = responseData.main.humidity;
            var windSpeed = responseData.wind.speed;
            // You can do something with the weather information here, such as displaying it on your extension's popup
            // Populate the weatherInfo div with the weather information
            var weatherInfoDiv = document.getElementById('weatherInfo');
            weatherInfoDiv.innerHTML = `
                <p>Description: ${weatherDescription}&nbsp;
                Temperature: ${Math.ceil(temp)} °C&nbsp;|
                Humidity: ${humidity} % 
                Wind Speed: ${windSpeed} m/s</p>
            `;
        } else {
            // Request failed
            console.error('Request failed with status:', xhr.status);
        }
    };

    // Send the request
    xhr.send();
}
fetchWeather();*/
function fetchWeather() {
    var openWeatherMapApiKey = 'deb80ca98278efc7625875b31dd04673'; // Replace 'YOUR_OPENWEATHERMAP_API_KEY' with your actual OpenWeatherMap API key
    var openCageApiKey = 'dafc1f014292410da6a3a7228253fee6'; // Replace 'YOUR_OPENCAGE_API_KEY' with your actual OpenCage Geocoding API key

    // Use Geolocation API to get the user's current position
    navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        // Construct the OpenWeatherMap API URL with the user's current location
        var openWeatherMapApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${openWeatherMapApiKey}`;

        var xhr = new XMLHttpRequest();
        xhr.open('GET', openWeatherMapApiUrl, true);
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                var responseData = JSON.parse(xhr.responseText);
                console.log(responseData);
                var weatherDescription = responseData.weather[0].description;
                var temperature = responseData.main.temp;
                var temp = temperature - 273.15;
                var humidity = responseData.main.humidity;
                var windSpeed = responseData.wind.speed;

                // Construct the OpenCage Geocoding API URL with the user's current location
                var openCageApiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${openCageApiKey}`;

                var reverseGeocodeXhr = new XMLHttpRequest();
                reverseGeocodeXhr.open('GET', openCageApiUrl, true);
                reverseGeocodeXhr.onload = function() {
                    if (reverseGeocodeXhr.status >= 200 && reverseGeocodeXhr.status < 300) {
                        var reverseGeocodeData = JSON.parse(reverseGeocodeXhr.responseText);
                        console.log(reverseGeocodeData);

                        // Check if reverse geocoding results exist
                        if (reverseGeocodeData.results.length > 0) {
                            var areaName = reverseGeocodeData.results[0].components.city || reverseGeocodeData.results[0].components.town || reverseGeocodeData.results[0].components.village || reverseGeocodeData.results[0].components.county || "Unknown";
                            var countryName = reverseGeocodeData.results[0].components.country || "Unknown";

                            var weatherInfoDiv = document.getElementById('weatherInfo');
                            weatherInfoDiv.innerHTML = `
                                <p>Area: ${areaName}, ${countryName}</p>
                                <p>Description: ${weatherDescription}<br>
                                Temperature: ${Math.ceil(temp)} °C&nbsp;|
                                Humidity: ${humidity} % 
                                Wind Speed: ${windSpeed} m/s</p>
                            `;
                        } else {
                            console.error('No reverse geocoding results found');
                        }
                    } else {
                        console.error('Reverse geocoding request failed with status:', reverseGeocodeXhr.status);
                    }
                };
                reverseGeocodeXhr.onerror = function() {
                    console.error('Error fetching reverse geocoding data');
                };
                reverseGeocodeXhr.send();
            } else {
                console.error('Weather request failed with status:', xhr.status);
            }
        };
        xhr.onerror = function() {
            console.error('Error fetching weather data');
        };
        xhr.send();
    }, function(error) {
        console.error('Error getting user location:', error);
    });
}

fetchWeather();
