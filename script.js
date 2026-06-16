async function getWeather() {
    const location = document.getElementById("locationInput").value.trim();

    if (!location) {
        alert("Please enter a city name");
        return;
    }

    const apiKey = "aacfeb1dd4c24db0bb583545261606";
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.error) {
            alert(data.error.message);
            return;
        }

        document.getElementById("city").textContent =
            `${data.location.name}, ${data.location.country}`;

        document.getElementById("temperature").textContent =
            `Temperature: ${data.current.temp_c} °C`;

        document.getElementById("condition").textContent =
            `Condition: ${data.current.condition.text}`;

        document.getElementById("icon").src =
            "https:" + data.current.condition.icon;

        document.getElementById("weatherResult").style.display = "block";

    } catch (error) {
        console.error(error);
        alert("Failed to fetch weather data");
    }
}