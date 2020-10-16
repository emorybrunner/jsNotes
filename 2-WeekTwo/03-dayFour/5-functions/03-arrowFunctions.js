//* ARROW FUNCTIONS
//more concise, condensed way of writing a function

//* CONCISE BODY
let hi = () => console.log('Hi'); //must have callword 'let'

//* BLOCK BODY aka Fat Arrow Function
let hi = () => {
    console.log('Hi');
}

//* CONCISE VS. BLOCK
let apples = x => console.log(`There are ${x} apples.`);
apples(8);

let apples = x => {
    console.log(`There are ${x} apples.`);
}
apples(10);

//concise is better; if it can be on a single line, put it on a single line!

