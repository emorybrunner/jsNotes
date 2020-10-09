let a = 2;
//spacing doesnt really matter in JS! But for readability it is important. 
let     b     =     1; //Dont do this. Is mean.
//(1)   (2)   (3)   (4)
/*
1. Keyword
2. Variable name
3. Assignment Operator
4. Value
*/

console.log(a+b);

let hello = 'greet'
let Hello = "Greet"

// You can use '' or "" but remember to keep it consistent!

// VAR LET CONST
var x = 1;
let y = 2;
const z = 3;

// declaration vs initialization
let n; //this is the WHOLE declaration--you just havent given the variable any value
console.log(n);

n = 10; //this is INITIALIZATION; giving the variable value
console.log(n);


//LET vs CONST
let today = "Great!";
const elevenFifty = "Wonderful!";
console.log(today, elevenFifty);

today = "Lovely!"; //this is re-initializing the variable.
console.log(today, elevenFifty);

//* elevenFifty = "Awesome!"; 
//you cant re-initialize/change the value of a const. You will get an error!
console.log(today, elevenFifty);

