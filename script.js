// navigation menu
let header = document.querySelector('header');
window.addEventListener('scroll', function () {

        header.classList.toggle("sticky", window.scrollY > 0);
})

function toggleMenu() {
        const menuToggle = document.querySelector('.menuToggle');
        menuToggle.classList.toggle('active');
        const navigation = document.querySelector('.navigation');
        navigation.classList.toggle('active');
}

// covid cases tracker

async function getCovidapi() {
        const jsonData = await fetch('https://api.covid19api.com/summary');

        const jsData = await jsonData.json();

        console.log(jsData.Countries[76]);

        let totalCases = document.querySelector('.totalCasesinfo')
        let totalDeaths = document.querySelector('.totalDeathsinfo')
        let totalRecovered = document.querySelector('.totalRecoveredinfo')
        let newCases = document.querySelector('.newCasesinfo')
        let newDeaths = document.querySelector('.newDeathsinfo')
        let newRecovered = document.querySelector('.newRecoveredinfo')

        totalCases.innerHTML = jsData.Countries[76].TotalConfirmed;
        totalDeaths.innerHTML = jsData.Countries[76].TotalDeaths;
        totalRecovered.innerHTML = jsData.Countries[76].TotalRecovered;
        newCases.innerHTML = jsData.Countries[76].NewConfirmed;
        newDeaths.innerHTML = jsData.Countries[76].NewDeaths;
        newRecovered.innerHTML = jsData.Countries[76].NewRecovered;
}

getCovidapi();


// weather API 

let button = document.querySelector('.submit');
let inputValue = document.querySelector('.inputValue');

let names = document.querySelector('.name');
let desc = document.querySelector('.desc');
let temp = document.querySelector('.temp');

button.addEventListener('click', function() {
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=dc3d6aa086bf586cb91d8ffaa596c7f7')
        .then( response => response.json() )
        .then( data => {
                let nameValue = data['name'];
                let tempValue = data['main']['temp'];
                var descriptionValue = data['weather'][0]['description'] ;

                names.innerHTML = nameValue ;
                temp.innerHTML = tempValue + " F";
                desc.innerHTML = descriptionValue ;
        })
        .catch(error => alert("City Not Found !"))

})



