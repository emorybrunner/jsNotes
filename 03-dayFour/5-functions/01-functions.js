//* DECLARATIONS
//declare the function:
function hi() {
    console.log("Hi!");
}
//run/call the function:
hi();


//* EXPRESSIONS
let hello = function() { //initialize a function with a variable
    console.log("Hey!");
}

hello();

//* FUNCTION EXAMPLES:

//1.
function addIt() {
    console.log(5 + 10)
};

addIt()

//2. For loop inside a function! //You can put pretty much anything inside a function.
function counting() {
    for (i = 1; i <= 10; i++){
        console.log(i)
    }
}

counting();

//* CHALLENGE
let arr = ['This', 'is', 'really', 'cool'];

//string interpolation in a for loop
function cool() {
    for (i = 0; i < 1; i++){
        console.log(`${arr[0]} ${arr[1]} ${arr[2]} ${arr[3]}!`)
    }
}
cool()

//for in loop
function cooler() {
    for (words in arr) {
        console.log(arr[words]);
    }
}
cooler()

/*
*For Of Loop:
function arrList() {
    for (item of arr) {
        console.log(item);
    }
}

arrList();
*/

