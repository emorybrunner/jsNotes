//* SCOPE
//in JS, there is a global scope and a local scope (global:local::Earth:Indianapolis)

let x = 12; //within the *global scope* of the file, x = 12

function scope() { //within the *local scope* of this function, x = 33
    let x = 33;
    console.log(x);
}

scope();
console.log(x);


let y = 12;
function scope() {
    y = 33;
    console.log(y);
}
scope();
console.log(y)
//you see two 33's
//why?
//you only declared y once, and then you re-initialized it WITHIN the function. Then you console.logged it twice via different methods!


//* VAR vs. LET

/* 3 Keywords for variables:
var
let
const
*/

//the difference between var and let is noticeable in scope
//var is scoped to the nearest function block while let is scoped to the nearest enclosing block

var x = 12;
function varTest() {
    var x = 33;
    if (1 == 1) {
        var x = 45;
        console.log(x); //x=45
    }
    console.log(x); //x=33 but this DOESNT PRINT because varTest() is closer to 45 than 33
}

varTest()
console.log(x) //x=12


let x = 12;
function letTest() { //anything inside of a function is a function block
    let x = 33;
    if (1 == 1) {
        let x = 45; //this let respects the scope of the if statement/its enclosing block
        console.log(x); //x=45
    }
    console.log(x); //x=33 
}

letTest()
console.log(x) //x=12