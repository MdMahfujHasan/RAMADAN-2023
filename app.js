const dateAndTime = new Date().toString();
const spliting = dateAndTime.split(' ');
const spliting2 = spliting[4].split(':');
const hour = parseInt(spliting2[0]);
const min = parseInt(spliting2[1]);

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

    if (dateNumber === 30) {
        gregorianDate.innerText = 30 + 'th March';
        hijriDate.innerText = 7 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <div class="bg-sky-200 w-1/2 rounded-md mx-auto">
            <h3 class="text-green-600 font-semibold text-center">Sehri - 04:31</h3>
            <h3 class="text-green-600 font-semibold text-center">Iftar - 18:17</h3>
        </div>
        `;
    }
    else if (dateNumber === 31) {
        gregorianDate.innerText = 31 + 'th March';
        hijriDate.innerText = 8 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <div class="bg-sky-200 w-1/2 rounded-md mx-auto">
            <h3 class="text-green-600 font-semibold text-center">Sehri - 04:30</h3>
            <h3 class="text-green-600 font-semibold text-center">Iftar - 18:18</h3>
        </div>
        `;
    }
    else if (dateNumber === 1) {
        gregorianDate.innerText = 1 + 'st April';
        hijriDate.innerText = 9 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <div>
            <h3 class="text-green-600 font-semibold text-center">Sehri - 04:29</h3>
            <h3 class="text-green-600 font-semibold text-center">Iftar - 18:18</h3>
        </div>
        `;
    }
    else if (dateNumber === 2) {
        gregorianDate.innerText = 2 + 'nd April';
        hijriDate.innerText = 10 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <div>
            <h3 class="text-green-600 font-semibold text-center">Sehri - 04:28</h3>
            <h3 class="text-green-600 font-semibold text-center">Iftar - 18:19</h3>
        </div>
        `;
    }
    else if (dateNumber === 3) {
        gregorianDate.innerText = 3 + 'rd April';
        hijriDate.innerText = 11 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <div>
            <h3 class="text-green-600 font-semibold text-center">Sehri - 04:27</h3>
            <h3 class="text-green-600 font-semibold text-center">Iftar - 18:19</h3>
        </div>
        `;
    }
    else if (dateNumber === 04) {
        gregorianDate.innerText = 04 + 'th April';
        hijriDate.innerText = 12 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <div>
            <h3 class="text-green-600 font-semibold text-center">Sehri - 04:26</h3>
            <h3 class="text-green-600 font-semibold text-center">Iftar - 18:19</h3>
        </div>
        `;
    }
    else if (dateNumber === 5) {
        gregorianDate.innerText = 5 + 'th April';
        hijriDate.innerText = 13 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <div>
            <h3 class="text-green-600 font-semibold text-center">Sehri - 04:24</h3>
            <h3 class="text-green-600 font-semibold text-center">Iftar - 18:20</h3>
        </div>
        `;
    }
    else if (dateNumber === 6) {
        gregorianDate.innerText = 6 + 'th April';
        hijriDate.innerText = 14 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <div>
            <h3 class="text-green-600 font-semibold text-center">Sehri - 04:24</h3>
            <h3 class="text-green-600 font-semibold text-center">Iftar - 18:20</h3>
        </div>
        `;
    }
    else if (dateNumber === 7) {
        gregorianDate.innerText = 7 + 'th April';
        hijriDate.innerText = 15 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <div>
            <h3 class="text-green-600 font-semibold text-center">Sehri - 04:23</h3>
            <h3 class="text-green-600 font-semibold text-center">Iftar - 18:21</h3>
        </div>
        `;
    }
    else if (dateNumber === 8) {
        gregorianDate.innerText = 8 + 'th April';
        hijriDate.innerText = 16 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <div>
            <h3 class="text-green-600 font-semibold text-center">Sehri - 04:22</h3>
            <h3 class="text-green-600 font-semibold text-center">Iftar - 18:21</h3>
        </div>
        `;
    }
    else if (dateNumber === 9) {
        gregorianDate.innerText = 9 + 'th April';
        hijriDate.innerText = 17 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <div>
            <h3 class="text-green-600 font-semibold text-center">Sehri - 04:21</h3>
            <h3 class="text-green-600 font-semibold text-center">Iftar - 18:21</h3>
        </div>
        `;
    }
    else if (dateNumber === 10) {
        gregorianDate.innerText = 10 + 'th April';
        hijriDate.innerText = 18 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <div>
            <h3 class="text-green-600 font-semibold text-center">Sehri - 04:20</h3>
            <h3 class="text-green-600 font-semibold text-center">Iftar - 18:22</h3>
        </div>
        `;
    }
    else if (dateNumber === 11) {
        gregorianDate.innerText = 11 + 'th April';
        hijriDate.innerText = 19 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <div>
            <h3 class="text-green-600 font-semibold text-center">Sehri - 04:19</h3>
            <h3 class="text-green-600 font-semibold text-center">Iftar - 18:22</h3>
        </div>
        `;
    }
    else if (dateNumber === 12) {
        gregorianDate.innerText = 12 + 'th April';
        hijriDate.innerText = 20 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <div>
            <h3 class="text-green-600 font-semibold text-center">Sehri - 04:18</h3>
            <h3 class="text-green-600 font-semibold text-center">Iftar - 18:23</h3>
        </div>
        `;
    }
    else if (dateNumber === 13) {
        gregorianDate.innerText = 13 + 'th April';
        hijriDate.innerText = 21 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <div>
            <h3 class="text-green-600 font-semibold text-center">Sehri - 04:17</h3>
            <h3 class="text-green-600 font-semibold text-center">Iftar - 18:23</h3>
        </div>
        `;
    }
    else if (dateNumber === 14) {
        gregorianDate.innerText = 14 + 'th April';
        hijriDate.innerText = 22 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <div>
            <h3 class="text-green-600 font-semibold text-center">Sehri - 04:15</h3>
            <h3 class="text-green-600 font-semibold text-center">Iftar - 18:23</h3>
        </div>
        `;
    }
    else if (dateNumber === 15) {
        gregorianDate.innerText = 15 + 'th April';
        hijriDate.innerText = 23 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <div>
            <h3 class="text-green-600 font-semibold text-center">Sehri - 04:14</h3>
            <h3 class="text-green-600 font-semibold text-center">Iftar - 18:24</h3>
        </div>
        `;
    }
    else if (dateNumber === 16) {
        gregorianDate.innerText = 16 + 'th April';
        hijriDate.innerText = 24 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <div>
            <h3 class="text-green-600 font-semibold text-center">Sehri - 04:13</h3>
            <h3 class="text-green-600 font-semibold text-center">Iftar - 18:24</h3>
        </div>
        `;
    }
    else if (dateNumber === 17) {
        gregorianDate.innerText = 17 + 'th April';
        hijriDate.innerText = 25 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <div>
            <h3 class="text-green-600 font-semibold text-center">Sehri - 04:12</h3>
            <h3 class="text-green-600 font-semibold text-center">Iftar - 18:24</h3>
        </div>
        `;
    }
    else if (dateNumber === 18) {
        gregorianDate.innerText = 18 + 'th April';
        hijriDate.innerText = 26 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <div>
            <h3 class="text-green-600 font-semibold text-center">Sehri - 04:11</h3>
            <h3 class="text-green-600 font-semibold text-center">Iftar - 18:25</h3>
        </div>
        `;
    }
    else if (dateNumber === 19) {
        gregorianDate.innerText = 19 + 'th April';
        hijriDate.innerText = 27 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <div>
            <h3 class="text-green-600 font-semibold text-center">Sehri - 04:10</h3>
            <h3 class="text-green-600 font-semibold text-center">Iftar - 18:25</h3>
        </div>
        `;
    }
    else if (dateNumber === 20) {
        gregorianDate.innerText = 20 + 'th April';
        hijriDate.innerText = 28 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <div>
            <h3 class="text-green-600 font-semibold text-center">Sehri - 04:09</h3>
            <h3 class="text-green-600 font-semibold text-center">Iftar - 18:26</h3>
        </div>
        `;
    }
    else if (dateNumber === 21) {
        gregorianDate.innerText = 21 + 'th April';
        hijriDate.innerText = 29 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <div>
            <h3 class="text-green-600 font-semibold text-center">Sehri - 04:08</h3>
            <h3 class="text-green-600 font-semibold text-center">Iftar - 18:26</h3>
        </div>
        `;
    }
    else if (dateNumber === 22) {
        gregorianDate.innerText = 22 + 'th April';
        hijriDate.innerText = 30 + 'th Ramadan';
        iftarSehri.innerHTML = `
        <div>
            <h3 class="text-green-600 font-semibold text-center">Sehri - 04:07</h3>
            <h3 class="text-green-600 font-semibold text-center">Iftar - 18:27</h3>
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