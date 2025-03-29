

document.addEventListener("DOMContentLoaded", function() {
    // Footer Year
    document.getElementById("year").textContent = new Date().getFullYear();
    
    // Last Modified Date
    document.getElementById("last-modified").textContent = document.lastModified;

    // Wind Chill Calculation
    function calculateWindChill(temp, windSpeed) {
        return (35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16))).toFixed(2);
    }

    const temp = 50;  // Static temp (to be dynamic later)
    const windSpeed = 5;  // Static wind speed

    if (temp <= 50 && windSpeed > 3) {
        document.getElementById("wind-chill").textContent = calculateWindChill(temp, windSpeed) + "°F";
    } else {
        document.getElementById("wind-chill").textContent = "N/A";
    }
});


