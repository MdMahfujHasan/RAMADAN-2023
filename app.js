fetch('http://api.aladhan.com/v1/gToH')
    .then(res => res.json())
    .then(data => displayDate(data.data))

const displayDate = date => {
    const hijri = date.hijri;
    const gregorian = date.gregorian;
    const nowHourTime = parseInt(((((new Date() + '').split(' '))[4]).split(':'))[0]);
    // console.log(nowHourTime);
    // console.log(parseInt(gregorian.day));
    if (nowHourTime >= 0 && nowHourTime <= 5) {
        document.getElementById('warning-text-1').innerHTML = `<i class="fa-solid fa-triangle-exclamation text-yellow-400"></i> Gregorian date gets updated after 6:00 am. At this moment, Gregorian date should be <span class="text-green-500">${parseInt(gregorian.day) + 1} ${gregorian.month.en}, ${gregorian.year}</span>`;
        // gregorian.day = parseInt(gregorian.day) + 1;
    }
    const nowTime = ((((new Date() + '').split(' '))[4]).split(':'))[0];
    if ((nowTime >= 19 && nowTime <= 23) || (nowTime >= 0 && nowTime <= 5)) {
        document.getElementById('warning-text-2').innerHTML = `<i class="fa-solid fa-triangle-exclamation text-yellow-400"></i> Hijri date gets updated after 6:00 am. At this moment, hijri date should be <span class="text-green-500">${parseInt(hijri.day) + 1} ${hijri.month.en}, ${hijri.year}</span>`;
    }
    document.getElementById('date').innerHTML = `
    <p>${gregorian.day} ${gregorian.month.en}, ${gregorian.year}</p>
    <p>${hijri.day} ${hijri.month.en}, ${hijri.year}</p>
    `;
}

var span = document.getElementById('span');
function time() {
    var date = new Date();
    var sec = date.getSeconds();
    var min = date.getMinutes();
    var hour = date.getHours();
    span.textContent = ("0" + hour).slice(-2) + ":" + ("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2);
}

setInterval(time, 1000);