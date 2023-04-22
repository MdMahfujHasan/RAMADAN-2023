fetch('http://api.aladhan.com/v1/gToH')
    .then(res => res.json())
    .then(data => displayDate(data.data))

const displayDate = date => {
    const hijri = date.hijri;
    const gregorian = date.gregorian;
    const nowHourTime = parseInt(((((new Date() + '').split(' '))[4]).split(':'))[0]);
    if (nowHourTime >= 0 && nowHourTime <= 5) {
        document.getElementById('warning-text').innerHTML = '<i class="fa-solid fa-triangle-exclamation text-yellow-400"></i> Gregorian and Hijri date gets updated after 6:00 AM';
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