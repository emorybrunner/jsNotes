//* APIs
//Application Programming Interface

//Asynchronous programming: programming so that the page doesn't have to wait on certain elements to load before it gets other elements
//fetch "promises"

const baseURL = 'https://api.spacexdata.com/v2/rockets'; //grab the site API

const searchForms = document.querySelector('form'); //grab the form
// const spaceShips = document.querySelector('ul'); //grab the list
const spaceships = document.querySelector('table');

searchForms.addEventListener('submit', fetchSpace); //when the form submits, run the fetchSpace function (not the function call but the function identity)

function fetchSpace() { //fetchSpace is a callback function
    event.preventDefault(); //that thing that you were going to do? don't do it
    fetch(baseURL)
        .then(result => {
            return result.json();
            // console.log(result.json());
        })
        .then(json =>{
            // console.log(json);
            displayRockets(json);
        })
}

function displayRockets(json) {
    console.log('Results:', json);
//     let rockets = json.forEach( r => {
//         let rocket = document.createElement('li');
//         rocket.innerText = r.name;
//         spaceships.appendChild(rocket);
//     });

    let rockets = json.forEach(r => {
        let rocket = document.createElement('tr');
        let rocketName = document.createElement('td');
        let rocketCost = document.createElement('td');

        rocketName.innerText = r.name;
        rocketCost.innerText = r.cost_per_launch;

        spaceships.appendChild(rocket);
        rocket.appendChild(rocketName);
        rocket.appendChild(rocketCost);
        })
}




//fetch is undefined in node, but is actually part of the browser
//it tells you to call out to a website; //fetch is how you get json from the internet