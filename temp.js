fetch('https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=46ad7457603b9b0104e633e78cd60e16&units=metric')
    .then(res => res.json())
    .then(data => displayTemperature(data));

const displayTemperature = temperature => {
    console.log(temperature);
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
    <div class="text-green-500 bg-sky-100 py-1 px-2 w-2/3 rounded-md mx-auto">
        <p class="mb-1 text-2xl">${temperature.main.temp}&deg;C</p>
        <div class="flex text-center justify-center text-sm">
            <p class="rounded text-left mr-1">${temperature.weather[0].main}, </p>
            <p class="mb-1">feels like ${temperature.main.feels_like}&deg;C</p>
        </div>
        <div class="flex text-center justify-center text-sm">
            <p class="mb-1 mr-1"><i class="fa-solid fa-arrow-up"></i> ${temperature.main.temp_max}&deg;C</p>
            <p class="mb-1"><i class="fa-solid fa-arrow-down"></i> ${temperature.main.temp_min}&deg;C</p>
        </div>
        <p class="text-sm mb-1">Sunrise: ${sunriseTimeArr[0] + ':' + sunriseTimeArr[1]}am</p>
        <p class="text-sm mb-1">Sunset: ${sunsetTimeArr[0] + ':' + sunsetTimeArr[1]}pm</p>
            
    </div>
    `;
}