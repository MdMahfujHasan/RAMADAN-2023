document.getElementById('btn-update').addEventListener('click', function () {
    const gregorianDate = document.getElementById('gregorian-date');
    const hijriDate = document.getElementById('hijri-date');

    const date = (new Date().toString());
    const arr = date.split(' ');
    const dateNumber = parseInt(arr[2]);
    if (dateNumber === 27) {
        gregorianDate.innerText = 'Gregorian Date: ' + 27 + 'th March';
        hijriDate.innerText = 'Hijri Date: ' + 4 + 'th Ramadan';
    }
    else if (dateNumber === 28) {
        gregorianDate.innerText = 'Gregorian Date: ' + 28 + 'th March';
        hijriDate.innerText = 'Hijri Date: ' + 5 + 'th Ramadan';
    }
    else if (dateNumber === 29) {
        gregorianDate.innerText = 'Gregorian Date: ' + 29 + 'th March';
        hijriDate.innerText = 'Hijri Date: ' + 6 + 'th Ramadan';
    }
    else if (dateNumber === 30) {
        gregorianDate.innerText = 'Gregorian Date: ' + 30 + 'th March';
        hijriDate.innerText = 'Hijri Date: ' + 7 + 'th Ramadan';
    }
    else if (dateNumber === 28) {
        gregorianDate.innerText = 'Gregorian Date: ' + 31 + 'th March';
        hijriDate.innerText = 'Hijri Date: ' + 8 + 'th Ramadan';
    }
    else if (dateNumber === 28) {
        gregorianDate.innerText = 'Gregorian Date: ' + 1 + 'th April';
        hijriDate.innerText = 'Hijri Date: ' + 9 + 'th Ramadan';
    }
    else if (dateNumber === 28) {
        gregorianDate.innerText = 'Gregorian Date: ' + 2 + 'th April';
        hijriDate.innerText = 'Hijri Date: ' + 10 + 'th Ramadan';
    }
    else if (dateNumber === 28) {
        gregorianDate.innerText = 'Gregorian Date: ' + 3 + 'th April';
        hijriDate.innerText = 'Hijri Date: ' + 11 + 'th Ramadan';
    }
    else if (dateNumber === 28) {
        gregorianDate.innerText = 'Gregorian Date: ' + 4 + 'th April';
        hijriDate.innerText = 'Hijri Date: ' + 12 + 'th Ramadan';
    }
    else if (dateNumber === 28) {
        gregorianDate.innerText = 'Gregorian Date: ' + 5 + 'th April';
        hijriDate.innerText = 'Hijri Date: ' + 13 + 'th Ramadan';
    }
    else if (dateNumber === 28) {
        gregorianDate.innerText = 'Gregorian Date: ' + 6 + 'th April';
        hijriDate.innerText = 'Hijri Date: ' + 14 + 'th Ramadan';
    }
    else if (dateNumber === 28) {
        gregorianDate.innerText = 'Gregorian Date: ' + 7 + 'th April';
        hijriDate.innerText = 'Hijri Date: ' + 15 + 'th Ramadan';
    }
    else if (dateNumber === 28) {
        gregorianDate.innerText = 'Gregorian Date: ' + 8 + 'th April';
        hijriDate.innerText = 'Hijri Date: ' + 16 + 'th Ramadan';
    }
    else if (dateNumber === 28) {
        gregorianDate.innerText = 'Gregorian Date: ' + 9 + 'th April';
        hijriDate.innerText = 'Hijri Date: ' + 17 + 'th Ramadan';
    }
    else if (dateNumber === 28) {
        gregorianDate.innerText = 'Gregorian Date: ' + 10 + 'th April';
        hijriDate.innerText = 'Hijri Date: ' + 18 + 'th Ramadan';
    }
    else if (dateNumber === 28) {
        gregorianDate.innerText = 'Gregorian Date: ' + 11 + 'th April';
        hijriDate.innerText = 'Hijri Date: ' + 19 + 'th Ramadan';
    }
    else if (dateNumber === 28) {
        gregorianDate.innerText = 'Gregorian Date: ' + 12 + 'th April';
        hijriDate.innerText = 'Hijri Date: ' + 20 + 'th Ramadan';
    }
    else if (dateNumber === 28) {
        gregorianDate.innerText = 'Gregorian Date: ' + 13 + 'th April';
        hijriDate.innerText = 'Hijri Date: ' + 21 + 'th Ramadan';
    }
    else if (dateNumber === 28) {
        gregorianDate.innerText = 'Gregorian Date: ' + 14 + 'th April';
        hijriDate.innerText = 'Hijri Date: ' + 22 + 'th Ramadan';
    }
    else if (dateNumber === 28) {
        gregorianDate.innerText = 'Gregorian Date: ' + 15 + 'th April';
        hijriDate.innerText = 'Hijri Date: ' + 23 + 'th Ramadan';
    }
    else if (dateNumber === 28) {
        gregorianDate.innerText = 'Gregorian Date: ' + 16 + 'th April';
        hijriDate.innerText = 'Hijri Date: ' + 24 + 'th Ramadan';
    }
    else if (dateNumber === 28) {
        gregorianDate.innerText = 'Gregorian Date: ' + 17 + 'th April';
        hijriDate.innerText = 'Hijri Date: ' + 25 + 'th Ramadan';
    }
    else if (dateNumber === 28) {
        gregorianDate.innerText = 'Gregorian Date: ' + 18 + 'th April';
        hijriDate.innerText = 'Hijri Date: ' + 26 + 'th Ramadan';
    }
    else if (dateNumber === 28) {
        gregorianDate.innerText = 'Gregorian Date: ' + 19 + 'th April';
        hijriDate.innerText = 'Hijri Date: ' + 27 + 'th Ramadan';
    }
    else if (dateNumber === 28) {
        gregorianDate.innerText = 'Gregorian Date: ' + 20 + 'th April';
        hijriDate.innerText = 'Hijri Date: ' + 28 + 'th Ramadan';
    }
    else if (dateNumber === 28) {
        gregorianDate.innerText = 'Gregorian Date: ' + 21 + 'th April';
        hijriDate.innerText = 'Hijri Date: ' + 29 + 'th Ramadan';
    }
    else if (dateNumber === 28) {
        gregorianDate.innerText = 'Gregorian Date: ' + 22 + 'th April';
        hijriDate.innerText = 'Hijri Date: ' + 30 + 'th Ramadan';
    }
})