const apiKey = "6806b8256e13875a96ddb6422a4b7e20";
const city = "Tashkent"
const nowtime = document.getElementById("now-time")

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod != "200") {
            console.error('Error fetching---:', data.message)
            return;
        }

        // 5 Days Forecast

        const dailyForcast = data.list.filter(item => item.dt_txt.includes("12:00:00"))
        console.log(dailyForcast)

        // Todays hourly
        const now = new Date();
        const today = now.toISOString().split("T")[0]; 
        const time = now.toLocaleTimeString();
        console.log(time)
        const todayForecast = data.list.filter(item => item.dt_txt.startsWith(today));
        nowtime.innerText = time

        console.log("Today's Hourly Forecast:", todayForecast);

    } catch (error) {
        console.error("Fetch error:", error)
    }

}

        // Dark Mode

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.textContent = document.body.classList.contains('dark-mode')
    ? 'Light Mode'
    : 'Dark Mode';
});



getWeather();

