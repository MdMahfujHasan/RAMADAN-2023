fetch('https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=46ad7457603b9b0104e633e78cd60e16&units=metric')
    .then(res => res.json())
    .then(data => displayTemperature(data));

const displayTemperature = temperature => {
    const { sunrise, sunset } = temperature.sys;

    const sunriseUnix = sunrise;
    const sunriseDate = new Date(sunriseUnix * 1000);
    const sunriseDateStr = sunriseDate + '';
    const sunriseDateStrSplit = sunriseDateStr.split(' ');
    const sunriseTimeArr = sunriseDateStrSplit[4].split(':');

    const sunsetUnix = sunset;
    const sunsetDate = new Date(sunsetUnix * 1000);
    const sunsetDateStr = sunsetDate + '';
    const sunsetDateStrSplit = sunsetDateStr.split(' ');
    const sunsetTimeArr = sunsetDateStrSplit[4].split(':');

    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    document.getElementById('temp').innerHTML = `
    <div class="text-blue-500 bg-green-100 py-1 px-2 rounded">
        <p class="text-xs mb-1">Temperature ${temperature.main.temp}&deg;C</p>
        <p class="text-xs mb-1">Feels like ${temperature.main.feels_like}&deg;C</p>
        <p class="text-xs mb-1">Sunrise ${sunriseTimeArr[0] + ':' + sunriseTimeArr[1]}am</p>
        <p class="text-xs mb-1">Sunset ${sunsetTimeArr[0] + ':' + sunsetTimeArr[1]}am</p>
        <div class="flex justify-center items-center">
            <img width="35px" src="${url}" alt="Weather Icon">
            <p class="text-xs rounded">${temperature.weather[0].main}</p>
        </div>
    </div>
    `;
}