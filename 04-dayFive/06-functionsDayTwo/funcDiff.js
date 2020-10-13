//* HOISTING
//* DIFFERENCE BETWEEN SYNTAXES

let arr_func = () => {
    console.log("This is a fat arrow function");
}

arr_func();
std_func();


function std_func () {
    console.log("This is a std function");
} //even if a function is below the call, it is still available for use
