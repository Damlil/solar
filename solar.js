const BASE_URL = 'https://fathomless-shelf-54969.herokuapp.com';   // API adress saved in variable
const main = document.querySelector('main')
const article = document.querySelector('article')
const header = document.querySelector('header')
const allPlanets = document.querySelectorAll('aside')
const theMoon = document.querySelectorAll('.theMoon')


function spaceShip() {
    location.reload()
}


getKey()
    .then(() => {
        getPlanets()

    })


async function getKey() {
    const options = { method: 'POST' }; // Method POST saved in Variable 

    const response = await fetch(`${BASE_URL}/keys`, options);
    data = await response.json()   //   
    KEY = data.key    /// SAVE DATA.KEY  IN variable KEY

}

async function getPlanets() {
    const options = { method: 'GET', headers: { 'x-zocom': KEY } };

    const response = await fetch(`${BASE_URL}/bodies/`, options);
    const data = await response.json();
    planets = data.bodies

    selectedPlanet(planets)
}




function selectedPlanet(planets) {
    for (let i = 0; i < allPlanets.length; i++) {

        allPlanets[i].addEventListener('click', () => {
            header.style.opacity = 0
            article.style.display = 'flex'
            main.style.display = 'none'




            if (planets[i].moons <= 0) {

                let displayInfoNoMoons = `
                <i class="fa-brands fa-space-awesome" onclick="spaceShip()"></i>
                <h1>${planets[i].name}</h1>
                <h2>${planets[i].latinName}</h2>
                <p>${planets[i].desc}</p>
            
                <h5></h5>
                <div class="baseContainer">
                    <div class="row-1">
                        <h3>Omkrets</h3>
                        <p>${planets[i].circumference}</p>
                        <h3>Max temperatur</h3>
                        <p>${planets[i].temp.day}</p>
            
                    </div>
            
                    <div class="row-2">
                        <h3>KM FRÅN SOLEN</h3>
                        <p>${planets[i].distance}</p>
                        <h3>Min temperatur</h3>
                        <p>${planets[i].temp.night}</p>
                    </div>
            
                    
                </div>
                <h5></h5>
            
                <div class="row-3">
                    <h3>Månar</h3>
                    <p>Denna planet har inga Månar.</p>
                </div>
                `
                article.insertAdjacentHTML('beforeend', displayInfoNoMoons)

            } else {

                let displayInfo = `
                <i class="fa-brands fa-space-awesome" onclick="spaceShip()"></i>
                <h1>${planets[i].name}</h1>
                <h2>${planets[i].latinName}</h2>
                <p>${planets[i].desc}</p>
               
                <h5></h5>
                <div class="baseContainer">
                    <div class="row-1">
                        <h3>Omkrets</h3>
                        <p>${planets[i].circumference}</p>
                        <h3>Max temperatur</h3>
                        <p>${planets[i].temp.day}</p>
            
                    </div>
            
                    <div class="row-2">
                        <h3>KM FRÅN SOLEN</h3>
                        <p>${planets[i].distance}</p>
                        <h3>Min temperatur</h3>
                        <p>${planets[i].temp.night}</p>
                    </div>
            
                    
                </div>
                <h5></h5>
            
                <div class="row-3">
                    <h3>Månar</h3>
                    <p>${planets[i].moons}</p>
                </div>
                `

                article.insertAdjacentHTML('beforeend', displayInfo)
            }
        })
    }
}




