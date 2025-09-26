const apiKey = "6806b8256e13875a96ddb6422a4b7e20";
const city = "Tashkent"
const nowtime = document.getElementById("nowtime")
const maindegree = document.getElementById("maindegree")
const fellslike = document.getElementById("fellslike")
const weathername = document.getElementById("weathername")
const humidity = document.getElementById("humidity")
const windspeed = document.getElementById("windspeed")
const Pressure = document.getElementById("Pressure")
const degree15 = document.getElementById("degree15")
const degree18 = document.getElementById("degree18")
const degree21 = document.getElementById("degree21")
const speed15 = document.getElementById("speed15")
const speed18 = document.getElementById("speed18")
const speed21 = document.getElementById("speed21")
const forecast5degree1 = document.getElementById("forecast5degree1")
const forecast5degree2 = document.getElementById("forecast5degree2")
const forecast5degree3 = document.getElementById("forecast5degree3")
const forecast5degree4 = document.getElementById("forecast5degree4")
const forecast5degree5 = document.getElementById("forecast5degree5")
const forecast5data1 = document.getElementById("forecast5data1")
const forecast5data2 = document.getElementById("forecast5data2")
const forecast5data3 = document.getElementById("forecast5data3")
const forecast5data4 = document.getElementById("forecast5data4")
const forecast5data5 = document.getElementById("forecast5data5")
const sealevel = document.getElementById("sealevel")

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
        maindegree.innerText = `${todayForecast[0].main.temp}`
        fellslike.innerText = `${todayForecast[0].main.feels_like}`
        weathername.innerText = `${todayForecast[0].weather[0].main}`
        Pressure.innerText = `${todayForecast[0].main.pressure}`
        humidity.innerText = `${todayForecast[0].main.humidity}`
        windspeed.innerText = `${todayForecast[0].wind.speed}`
        degree15.innerText = `${todayForecast[0].main.temp}`
        degree18.innerText = `${todayForecast[1].main.temp}`
        degree21.innerText = `${todayForecast[2].main.temp}`
        speed21.innerText = `${todayForecast[2].wind.speed}`
        speed15.innerText = `${todayForecast[0].wind.speed}`
        speed18.innerText = `${todayForecast[1].wind.speed}`
        forecast5degree1.innerText = `${dailyForcast[0].main.temp}`
        forecast5degree2.innerText = `${dailyForcast[1].main.temp}`
        forecast5degree3.innerText = `${dailyForcast[2].main.temp}`
        forecast5degree4.innerText = `${dailyForcast[3].main.temp}`
        forecast5degree5.innerText = `${dailyForcast[4].main.temp}`
        forecast5data1.innerText = `${dailyForcast[0].dt_txt}`
        forecast5data2.innerText = `${dailyForcast[1].dt_txt}`
        forecast5data3.innerText = `${dailyForcast[2].dt_txt}`
        forecast5data4.innerText = `${dailyForcast[3].dt_txt}`
        forecast5data5.innerText = `${dailyForcast[4].dt_txt}`
        sealevel.innerText = `${todayForecast[0].main.sea_level}`

        console.log("Today's Hourly Forecast:", todayForecast);

    } catch (error) {
        console.error("Fetch error:", error)
    }

}

        // Dark Mode

const themeToggle = document.getElementById('themetoggle');

themetoggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themetoggle.textContent = document.body.classList.contains('dark-mode')
    ? 'Light Mode'
    : 'Dark Mode';
});

getWeather();