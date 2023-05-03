fetch('https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=46ad7457603b9b0104e633e78cd60e16&units=metric')
    .then(res => res.json())
    .then(data => displayTemperature(data));

const displayTemperature = temperature => {
    const { sunrise, sunset } = temperature.sys;

    const sunriseUnix = sunrise;
    const sunriseDate = new Date(sunriseUnix * 1000);
    const sunriseDateStr = sunriseDate + '';
    const sunriseDateStrSplit = sunriseDateStr.split(' ');

    const sunsetUnix = sunset;
    const sunsetDate = new Date(sunsetUnix * 1000);
    const sunsetDateStr = sunsetDate + '';
    const sunsetDateStrSplit = sunsetDateStr.split(' ');

    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    document.getElementById('temp').innerHTML = `
    <div class="text-green-500 rounded">
        <p class="text-lg">${temperature.main.temp}&deg;C</p>
        <div class="flex text-center justify-center text-sm">
            <p class="mb-1">Feels like ${temperature.main.feels_like}&deg;C</p>
        </div>
    </div>
    `;
}