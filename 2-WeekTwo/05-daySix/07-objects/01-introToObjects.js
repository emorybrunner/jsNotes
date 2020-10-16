let netflix = {
    id: 1,
    name: "The Office",
    seasonOne: {
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: "Pilot"
                },
                {
                    episode: 2,
                    episodeName: "Diversity Day"
                },
                {
                    episode: 3,
                    episodeName: "Health Care"
                },
                {
                    episode: 4,
                    episodeName: "The Alliance"
                },
                {
                    episode: 5,
                    episodeName: "Basketball"
                },
                {
                    episode: 6,
                    episodeName: "Hot Girl"
                },
            ]
        }
    },
    season2: {},
    season3: {}
}

// console.log(netflix); //the whole object
// console.log(netflix.name); //the name of the show
// console.log(netflix.seasonOne.seasonInfo.episodeInfo[3].episodeName); //the name of a specific episode


let showName = netflix.name; //Here, assign "The Office"
let seasonOneEpCount = netflix.seasonOne.seasonInfo.episodeInfo.length; //Here assign 6

console.log(showName);
console.log(seasonOneEpCount);

//listing episode names
let epDetails = netflix.seasonOne.seasonInfo.episodeInfo;
for (i = 0; i<6; i++) {
    let epNames = (epDetails[i].episodeName);
    console.log(epNames);
}

/*
//*Here use a for loop to assign to this # Gold +
let epNames = []; // ["<ep here>", "", ...]
console.log(netflix.season1.seasonInfo.episodeInfo[0].episodeName);
for (ep of netflix.season1.seasonInfo.episodeInfo){
    epNames.push(ep.episodeName);
    // console.log(ep.episodeName)
}
This gets season one data from the netflix object 
let epDetails = netflix.season1.seasonInfo.episodeInfo
epDetails.forEach((data) => epNames.push(data.episodeName))
console.log(epNames);
*/

//using an object constructor
let numString = String(5);
//using an object literal
let numString2 = "5"

//in an array, the keys are the indexes

let weather = {
    temp: 88,
    isRaining: false,

}

//* JSON <- JavaScript Object Notation

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}


console.log(Object.keys(spaceJam.toonSquad)); //Returns an array of the keys of an object
console.log(Object.keys(spaceJam.toonSquad.duck)); //Returns an array of the keys for each letter in the string
console.log(Object.keys(spaceJam.toonSquad).toString()); //Returns the *array* of the keys converted into a string

console.log(Object.values(spaceJam.toonSquad)); //Returns an array of the values
console.log(Object.values(spaceJam.toonSquad.duck)); //Returns the string broken up into the individual character values


let hello = "Hello world!"
let greetArray = ['h', 'e', 'l', 'l', 'o']

console.log("This is from object keys:", Object.keys(hello));
console.log("This is from object values:", Object.values(hello));

console.log("This is from object keys:", Object.keys(greetArray));
console.log("This is from object values:", Object.values(greetArray));
