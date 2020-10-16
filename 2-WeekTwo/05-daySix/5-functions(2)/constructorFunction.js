//* Constructor Functions

function Person(name, age, canVote){
    //Person.name = name
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}
//when creating a constructor function, you should start it with a capital letter


console.log(typeof Person);

let personFour = new Person('Justin', 80, true);
let personFive = new Person('Amy', 54, true);

console.log(personFour.name);
console.log(personFive.name);

personFour.name = 'Adam';
//OR
personFour9['name'] = 'Adam'
console.log(personFour.name);