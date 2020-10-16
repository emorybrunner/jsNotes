let garden = {
    vegetable: 'zucchini',
    flower: 'sunflower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
};

let test = Object.keys(garden);
console.log(test);
//what is not immediately obvious about objects is that the keys are strings
//if you're creating an object in JS, you need to make sure that there arent any spaces in the keys
//If you don't, dot notation will break

console.log(garden['vegetable']); //if the key has a space, you have to use square bracket notation to call the key as a string

let baking = {}
baking['zucchini'] = 'Better make some bread!'; //this creates a key value pair!
//(1)     (2)                  (3)
/*
1. the object that you want to add the new pair to
2. the key that you want to add 
3. the value for that key 
*/
console.log(baking); 