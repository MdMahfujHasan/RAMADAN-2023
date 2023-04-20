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
    <div class="text-green-500 bg-sky-100 py-1 px-2 rounded">
        <p class="mb-1 text-xl">${temperature.main.temp}&deg;C</p>
        <div class="flex text-center justify-center text-sm">
            <p class="rounded text-left mr-1">${temperature.weather[0].main}, </p>
            <p class="mb-1">feels like ${temperature.main.feels_like}&deg;C</p>
        </div>
        <div class="flex text-center justify-center text-sm">
            <p class="mb-1 mr-1"><i class="fa-solid fa-arrow-up"></i> ${temperature.main.temp_max}&deg;C</p>
            <p class="mb-1"><i class="fa-solid fa-arrow-down"></i> ${temperature.main.temp_min}&deg;C</p>
        </div>
    </div>
    `;
}