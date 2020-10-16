let list = ['chips', 'apples', 'coffee', 'milk'];

console.log(list[1]);
console.log(list[2]);

let students = ['Ro', 'Travis', 'Taylor', 'Justin', 23, true, ['Isiah', 'Jason', 'Adam']];

console.log(typeof students); //returns object because arrays are technically objects with invisible keys
console.log(students instanceof Array); //must be capitalized; asks if this is specifically an array (true/false)


//* CHALLENGE
console.log(`Hello ${students[6][1]}!`);
