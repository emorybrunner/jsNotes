//*For Loops
// let i = 7;

// //i++: i = i + 1;
// for (i = 0; i < 10; i++){
//     console.log(i);
// }

// console.log('Global Variable: ', i);
// //this lists as 10. why?
// //when you increment something in a for loop, it actually changes the variable.
// //so, don't use a variable that is used anywhere else


//*Challenges

// //1
// for (i = 10; i >= 0; i--){
//     console.log(i);
// }

// //2
// for (i = 0; i >= -24; i -= 2){
//     console.log(i);
// }

//*Examples

let name = "Emory Brunner";

// for (i = 0; i < name.length; i++){
//     console.log(name[i]);
// }

//*For Of Loops
// for (letter of name) { 
//     console.log(letter);
//}
//generally more concise and specific. super powerful.
//'for' is the for loop declaration
//of is a built in word saying "for all things in this collection"

//*Challenge

let sum = 0;
for (let i = 1; i <= 50; i++){
    sum += i;
}

console.log(sum);


function test (myCondition) {
    if (myCondition) {
        return "It was true";
    }
    return "It was false";
}

test(true);
test(false);