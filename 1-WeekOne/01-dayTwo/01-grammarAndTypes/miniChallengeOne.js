let me = {
    firstName: 'Emory',
    lastName: 'Brunner',
    houseNumber: 1204,
    street: 'N Grant Ave.',
    city: 'Indianapolis',
    state: 'Indiana',
    zipCode: 46201
}

console.log(me.firstName + ' ' + me.lastName);
console.log(me.houseNumber + ' ' + me.street);
console.log(me.city + ', ' + me.state + ' ' + me.zipCode);


//String properties and methods
let name = 'Emory';
console.log(name.length); //letters in the string (including spaces)
console.log(name.toUpperCase); //change the string to uppercase

let home = 'My home is Indy.';
console.log(home.includes('Indy')); //search the string for the *exact* input.