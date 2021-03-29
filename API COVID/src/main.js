import './komponen/nav.js';

let global = document.querySelector('#global'); 
let indo = document.querySelector('#indo'); 
let sembuh = document.querySelector('#sembuh'); 
let mati = document.querySelector('#mati');

const fetchAPI = () => {
    fetch(`https://api.covid19api.com/summary`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        render(data);
    })
}

const render = (data) => {
    indo.innerHTML = data.Countries[77].TotalConfirmed;
    global.innerHTML = data.Global.TotalConfirmed;
    sembuh.innerHTML = data.Countries[77].TotalRecovered;
    mati.innerHTML = data.Countries[77].TotalDeaths;
}

document.addEventListener("DOMContentLoaded", fetchAPI());