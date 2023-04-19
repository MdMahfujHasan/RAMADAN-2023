const dateAndTime = new Date().toString();
const spliting = dateAndTime.split(' ');
const spliting2 = spliting[4].split(':');
const hour = parseInt(spliting2[0]);
// const min = parseInt(spliting2[1]);

const btnDisabledWarning = document.getElementById('btn-disabled-warning');
if (hour >= 19 && hour <= 23) {
    const btnUpdate = document.getElementById('btn-update');
    btnUpdate.classList.add('bg-gray-300');
    btnUpdate.classList.add('text-gray-400');
    btnUpdate.classList.remove('bg-sky-400');
    btnUpdate.classList.remove('hover:bg-sky-500');
    btnUpdate.classList.remove('text-white');
    btnDisabledWarning.classList.remove('hidden');
}

document.getElementById('btn-update').addEventListener('click', function () {
    const gregorianDate = document.getElementById('gregorian-date');
    const hijriDate = document.getElementById('hijri-date');
    const iftarSehri = document.getElementById('iftar-sehri');

    if (hour >= 19 && hour <= 23) {
        const btnUpdate = document.getElementById('btn-update');
        btnUpdate.setAttribute('disabled');
        btnDisabledWarning.classList.remove('hidden');
    }

    const date = (new Date().toString());
    const arr = date.split(' ');
    const dateNumber = parseInt(arr[2]);
    if (dateNumber === 20) {
        gregorianDate.innerText = 20 + 'th April';
        hijriDate.innerText = 28 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <div class="bg-sky-100 w-1/2 rounded-md mx-auto">
            <h3 class="text-green-500 text-center text-sm">Sehri - 04:09</h3>
            <h3 class="text-green-500 text-center text-sm">Iftar - 18:26</h3>
        </div>
        `;
    }
    else if (dateNumber === 21) {
        gregorianDate.innerText = 21 + 'st April';
        hijriDate.innerText = 29 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <div class="bg-sky-100 w-1/2 rounded-md mx-auto">
            <h3 class="text-green-500 text-center text-sm">Sehri - 04:08</h3>
            <h3 class="text-green-500 text-center text-sm">Iftar - 18:26</h3>
        </div>
        `;
    }
    else if (dateNumber === 22) {
        gregorianDate.innerText = 22 + 'nd April';
        hijriDate.innerText = 30 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <div class="bg-sky-100 w-1/2 rounded-md mx-auto">
            <h3 class="text-green-500 text-center text-sm">Sehri - 04:07</h3>
            <h3 class="text-green-500 text-center text-sm">Iftar - 18:27</h3>
        </div>
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