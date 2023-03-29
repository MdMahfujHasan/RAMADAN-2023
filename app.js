document.getElementById('btn-update').addEventListener('click', function () {
    const gregorianDate = document.getElementById('gregorian-date');
    const hijriDate = document.getElementById('hijri-date');
    const iftarSehri = document.getElementById('iftar-sehri');

    const date = (new Date().toString());
    const arr = date.split(' ');
    const dateNumber = parseInt(arr[2]);
    if (dateNumber === 29) {
        gregorianDate.innerText = 29 + 'th March';
        hijriDate.innerText = 6 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <h2 class="text-red-500 font-medium text-center mt-2">**Dhaka time**</h2>
        <h3 class="text-cyan-500 font-bold text-center">Sehri at 4:33 am</h3>
        <h3 class="text-violet-500 font-bold text-center">Iftar at 6:17 pm</h3>
        `;
    }
    else if (dateNumber === 30) {
        gregorianDate.innerText = 30 + 'th March';
        hijriDate.innerText = 7 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <h2>**Dhaka time**</h2>
        <h3>Sehri at 4:31 am</h3>
        <h3>Iftar at 6:17 pm</h3>
        `;
    }
    else if (dateNumber === 31) {
        gregorianDate.innerText = 31 + 'th March';
        hijriDate.innerText = 8 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <h2>**Dhaka time**</h2>
        <h3>Sehri at 4:30 am</h3>
        <h3>Iftar at 6:18 pm</h3>
        `;
    }
    else if (dateNumber === 1) {
        gregorianDate.innerText = 1 + 'th April';
        hijriDate.innerText = 9 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <h2>**Dhaka time**</h2>
        <h3>Sehri at 4:29 am</h3>
        <h3>Iftar at 6:18 pm</h3>
        `;
    }
    else if (dateNumber === 2) {
        gregorianDate.innerText = 2 + 'th April';
        hijriDate.innerText = 10 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <h2>**Dhaka time**</h2>
        <h3>Sehri at 4:28 am</h3>
        <h3>Iftar at 6:19 pm</h3>
        `;
    }
    else if (dateNumber === 3) {
        gregorianDate.innerText = 3 + 'th April';
        hijriDate.innerText = 11 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <h2>**Dhaka time**</h2>
        <h3>Sehri at 4:27 am</h3>
        <h3>Iftar at 6:19 pm</h3>
        `;
    }
    else if (dateNumber === 4) {
        gregorianDate.innerText = 4 + 'th April';
        hijriDate.innerText = 12 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <h2>**Dhaka time**</h2>
        <h3>Sehri at 4:26 am</h3>
        <h3>Iftar at 6:19 pm</h3>
        `;
    }
    else if (dateNumber === 5) {
        gregorianDate.innerText = 5 + 'th April';
        hijriDate.innerText = 13 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <h2>**Dhaka time**</h2>
        <h3>Sehri at 4:24 am</h3>
        <h3>Iftar at 6:20 pm</h3>
        `;
    }
    else if (dateNumber === 6) {
        gregorianDate.innerText = 6 + 'th April';
        hijriDate.innerText = 14 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <h2>**Dhaka time**</h2>
        <h3>Sehri at 4:24 am</h3>
        <h3>Iftar at 6:20 pm</h3>
        `;
    }
    else if (dateNumber === 7) {
        gregorianDate.innerText = 7 + 'th April';
        hijriDate.innerText = 15 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <h2>**Dhaka time**</h2>
        <h3>Sehri at 4:23 am</h3>
        <h3>Iftar at 6:21 pm</h3>
        `;
    }
    else if (dateNumber === 8) {
        gregorianDate.innerText = 8 + 'th April';
        hijriDate.innerText = 16 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <h2>**Dhaka time**</h2>
        <h3>Sehri at 4:22 am</h3>
        <h3>Iftar at 6:21 pm</h3>
        `;
    }
    else if (dateNumber === 9) {
        gregorianDate.innerText = 9 + 'th April';
        hijriDate.innerText = 17 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <h2>**Dhaka time**</h2>
        <h3>Sehri at 4:21 am</h3>
        <h3>Iftar at 6:21 pm</h3>
        `;
    }
    else if (dateNumber === 10) {
        gregorianDate.innerText = 10 + 'th April';
        hijriDate.innerText = 18 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <h2>**Dhaka time**</h2>
        <h3>Sehri at 4:20 am</h3>
        <h3>Iftar at 6:22 pm</h3>
        `;
    }
    else if (dateNumber === 11) {
        gregorianDate.innerText = 11 + 'th April';
        hijriDate.innerText = 19 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <h2>**Dhaka time**</h2>
        <h3>Sehri at 4:19 am</h3>
        <h3>Iftar at 6:22 pm</h3>
        `;
    }
    else if (dateNumber === 12) {
        gregorianDate.innerText = 12 + 'th April';
        hijriDate.innerText = 20 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <h2>**Dhaka time**</h2>
        <h3>Sehri at 4:18 am</h3>
        <h3>Iftar at 6:23 pm</h3>
        `;
    }
    else if (dateNumber === 13) {
        gregorianDate.innerText = 13 + 'th April';
        hijriDate.innerText = 21 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <h2>**Dhaka time**</h2>
        <h3>Sehri at 4:17 am</h3>
        <h3>Iftar at 6:23 pm</h3>
        `;
    }
    else if (dateNumber === 14) {
        gregorianDate.innerText = 14 + 'th April';
        hijriDate.innerText = 22 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <h2>**Dhaka time**</h2>
        <h3>Sehri at 4:15 am</h3>
        <h3>Iftar at 6:23 pm</h3>
        `;
    }
    else if (dateNumber === 15) {
        gregorianDate.innerText = 15 + 'th April';
        hijriDate.innerText = 23 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <h2>**Dhaka time**</h2>
        <h3>Sehri at 4:14 am</h3>
        <h3>Iftar at 6:24 pm</h3>
        `;
    }
    else if (dateNumber === 16) {
        gregorianDate.innerText = 16 + 'th April';
        hijriDate.innerText = 24 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <h2>**Dhaka time**</h2>
        <h3>Sehri at 4:13 am</h3>
        <h3>Iftar at 6:24 pm</h3>
        `;
    }
    else if (dateNumber === 17) {
        gregorianDate.innerText = 17 + 'th April';
        hijriDate.innerText = 25 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <h2>**Dhaka time**</h2>
        <h3>Sehri at 4:12 am</h3>
        <h3>Iftar at 6:24 pm</h3>
        `;
    }
    else if (dateNumber === 18) {
        gregorianDate.innerText = 18 + 'th April';
        hijriDate.innerText = 26 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <h2>**Dhaka time**</h2>
        <h3>Sehri at 4:11 am</h3>
        <h3>Iftar at 6:25 pm</h3>
        `;
    }
    else if (dateNumber === 19) {
        gregorianDate.innerText = 19 + 'th April';
        hijriDate.innerText = 27 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <h2>**Dhaka time**</h2>
        <h3>Sehri at 4:10 am</h3>
        <h3>Iftar at 6:25 pm</h3>
        `;
    }
    else if (dateNumber === 20) {
        gregorianDate.innerText = 20 + 'th April';
        hijriDate.innerText = 28 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <h2>**Dhaka time**</h2>
        <h3>Sehri at 4:09 am</h3>
        <h3>Iftar at 6:26 pm</h3>
        `;
    }
    else if (dateNumber === 21) {
        gregorianDate.innerText = 21 + 'th April';
        hijriDate.innerText = 29 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <h2>**Dhaka time**</h2>
        <h3>Sehri at 4:08 am</h3>
        <h3>Iftar at 6:26 pm</h3>
        `;
    }
    else if (dateNumber === 22) {
        gregorianDate.innerText = 22 + 'th April';
        hijriDate.innerText = 30 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <h2>**Dhaka time**</h2>
        <h3>Sehri at 4:07 am</h3>
        <h3>Iftar at 6:27 pm</h3>
        `;
    }
})

var span = document.getElementById('span');
function time() {
    var date = new Date();
    var sec = date.getSeconds();
    var min = date.getMinutes();
    var hour = date.getHours();
    span.textContent = ("0" + hour).slice(-2) + ":" + ("0" + min).slice(-2) + ":" + ("0" + sec).slice(-2);
}
setInterval(time, 1000);