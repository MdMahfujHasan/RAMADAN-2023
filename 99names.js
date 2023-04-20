fetch('https://api.aladhan.com/v1/asmaAlHusna')
    .then(res => res.json())
    .then(data => displayNames(data.data))

const displayNames = allNames => {
    const namesContainer = document.getElementById('names-container');
    namesContainer.textContent = '';
    allNames.map(names => {
        const { number, name, transliteration, en } = names;
        const div = document.createElement('div');
        div.classList.add('bg-sky-300', 'p-2.5', 'rounded-lg', 'text-center', 'text-white', 'font-semibold')
        div.innerHTML = `
        <p class="text-xs">${number}</p>
        <p class="text-lg">${name}</p>
        <p class="text-xl">${transliteration}</p>
        <p class="text-sm">${en.meaning}</p>
        `;
        namesContainer.appendChild(div);
    })

}