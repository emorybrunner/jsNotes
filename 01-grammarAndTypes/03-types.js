//BOOLEANS: true/false
let on = true;
console.log(on);

let off = false;
console.log(off);


//NULL: an empty value
let empty = null;
console.log(empty);
//null != undefined

//UNDEFINED: undefined; dont use this because you dont want to confuse is as an error
let undef = undefined;
console.log(undef);

let x; 
console.log(x); //this is...undefined.


//NUMBERS
let degrees = 90
console.log(degrees);

let precise = 999999999999999; //15 9s
console.log(precise);

let rounded = 9999999999999999; //16
console.log(rounded);
//JS has some weird behavior once you get to 16 digits--like rounding

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

let a = Number('123'); //this '123' is a string, but we are going to numberify it!
console.log(a);


//STRINGS
let stringOne = "double quotes";
let stringTwo = 'single quotes';
let stringThree = 'I\'m home'; // \ shows that you're not breaking out of the string, you just need an apostrophe
let stringFour = `I'm home`; //you can also use backticks
let stringFive = `You can use ${stringOne} or ${stringTwo}`; //the ${} only works with backticks

console.log(stringFive);

let first = 1050 + 100; //adding numbers
let second = '1050' + '100'; // concatenation aka smashing them together; adding strings

console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);

let animal = 'dog';

console.log('I have a ' + animal + ', she is cute.'); //concatenation
console.log(`I have a ${animal}`); //string interpolation

//OBJECTS (storing a bunch of different data types)

let frodo = { //curly braces denote an object
    race: 'hobbit',
    //(1)   (2)
    rings: 1,
    isShort: true,
}
/* 
Key/Value pair:
1. Key
2. Value
*/

console.log(frodo);
console.log(typeof frodo);
console.log(frodo.rings); //gives back the number of rings frodo has aka the value for the "rings" key


//ARRAYS
let tacos = ['large', 4, true];

console.log(tacos);
console.log(typeof tacos); //comes back as 'object'; JS classifies arrays as objects
console.log(tacos[0]);
