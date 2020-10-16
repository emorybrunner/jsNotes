//* RETURN
//the JS keyword that brings the data out of the function
//When called, the function becomes the value of the return
//Return is the end of the function, anything after is useless once the return fires

let name = fName => {
    return 'Finn';
}

let myName = name();
console.log(myName);
//console.logged the variable that called the function

console.log(name());
//myName = name = fName => return 'Finn'


function capitalizeName(name) {
    let capName = '';
    for (letter in name) {
        //console.log(capName); --> makes it print letter by letter
        if (letter == 0) {
            capName += name[letter].toUpperCase();
        } else {
            capName += name[letter].toLowerCase();
        }
    }
    return capName
}
console.log(capitalizeName('emOrY'));


//* CHALLENGE:

let initialValues = (basePrice, tipPerc) => {
    return ((basePrice*(tipPerc/100)) + basePrice);
}
let tip = initialValues(107 , 25);
console.log(tip);

/*
function tipCalc(bill){
    let tip = bill * 0.2;
    return tip.toFixed(2); //.toFixed(2) refers to 2 decimal places
}

let totalTip = tipCalc(19.72);
console.log(totalTip);


let tipCalc = bill => bill * 0.2; //no "return"; the concise arrow function automatically returns
let totalTip = tipCalc(19.72);
console.log(totalTip);
*/