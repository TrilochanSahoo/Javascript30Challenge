const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities =[]
const search = document.querySelector('.search');
const suggetions = document.querySelector('.suggetions');

fetch(endpoint).then(datas => datas.json()).then(data => cities.push(...data));

function findMatch(word, cities){
    return cities.filter(place => {
        const matching = new RegExp(word, 'gi');
        return place.city.match(matching) || place.state.match(matching);
    })
}

function numberWithComma(num){
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function display(){
    const matchingArray = findMatch(this.value,cities);
    const html = matchingArray.map(place => {
        const matching = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(matching, `<span class="h1">${this.value}</span>`);
        const stateName = place.state.replace(matching, `<span class="h1">${this.value}</span>`);
        return `
        <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithComma(place.population)}</span>
        </li>
        `
    }).join('');
    suggetions.innerHTML = html;
}

search.addEventListener('keyup',display);
