// let fb = 20;

// //* IF ELSE
// //! Always put the strictest condition you have first!! //
// if (fb % 3 === 0 && 5 === 0){
//     console.log("FizzBuzz");
// } else if (fb % 5 === 0) {
//     console.log("Buzz");
// } else if (fb % 3 === 0) {
//     console.log("Fizz");
// } else {
//     console.log(fb);
// };

// //if; else if; else if; else;//


// //* SWITCH
// let threeFive = (fb % 3 === 0 && 5 === 0);
// let divFive = (fb % 5 === 0);
// let divThree = (fb % 3 === 0);

// switch (fb) {
//     case threeFive: 
//         console.log("FizzBuzz");
//         break;
//     case divFive: 
//         console.log("Buzz");
//         break;
//     case divThree:
//         console.log("Fizz");
//         break;
// }

/* Her Solution
switch (true) {
    case (fb % 15 == 0): 
    ! You can use 15 (3*5) as a shorthand for 3 && 5
        console.log("FizzBuzz");
        break;
    case (fb % 5 == 0):
        console.log("Buzz");
        break;
    case (fb % 3 == 0):
        console.log("Fizz");
        break;
}
*/

//*TERNARY

// let fb = 30;
// (fb % 3 === 0 && 5 === 0) ? console.log("FizzBuzz") :  
// (fb % 5 === 0) ? console.log("Fizz") : 
// (fb % 3 === 0) ? console.log("Buzz") : console.log(fb);


//*FOR LOOP

for (let i = 0; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log("FizzBuzz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}