//*CONDITIONALS

let isOn = false;


//if (<some expression>) {<do something>}


if (isOn == true){
    console.log('The light is on.');
};

//OR

if(isOn){
    console.log("The light is on!");
};

//

if (isOn == false) {
    console.log ("The light is off.");
};

//OR


//Other examples
weather = 82;

if (weather < 70){
    console.log('Wear a jacket.');
}

if (weather < 70){
    console.log('Wear a jacket.');
} else { 
    console.log('No jacket necessary!');
};

//else can follow and if statement and will fire if the above statements didn't 
//if statements MUST come before else statements

//*Dot Notation
let student = {
    name: "Justin",
    grade: 12
};

let names = [
    "Justin",
    "Adam",
    "Amy"
]

//Ways to access an object:
console.log(student.name);
console.log(student["name"]); //Don't use this! student.name is better

//Ways to access an array:
console.log(names[2]);


//*Switch Statements
let officeCharacter = "Pam";

switch (officeCharacter) { 
    //kind of like if officeCharacter == "Michael"
    case "Michael":
        console.log("My mind is going a mile an hour");
        break; //break will leave the switch after the block runs.
    case "Dwight":
        console.log("Perfectenschlag");
        break;
    case "Jim":
        console.log("Bears. Beets. Battlestar Galactica");
        break;
    default: //If none of the other conditions are met, it goes to the default!
        console.log(`I'm sorry ${officeCharacter}, but do I know you?`);
}

let dessert = 'carrots';

switch (dessert) {
    case 'pie':
        console.log('Pie, pie, me oh my!');
        break;
    case 'cake':
        console.log('Cake is great!');
        break;
    case 'ice cream':
        console.log('I scream you scream we all scream for ice cream!');
        break;
    default: 
        console.log('Not on the menu.');
}


//*Else/if tangent
//better to use case though

if (dessert == "cake") {
    console.log('Cake is great!');
} else if (dessert == "ice cream") {
    console.log('I scream you scream we all scream for ice cream!');
} else {
    console.log('Not on the menu.');
}


//*Ternaries
//a very simple way of writing a if/else statement

let num = 6;

//()? if true : if false
(num > 0) ? console.log('yes') : console.log('no');