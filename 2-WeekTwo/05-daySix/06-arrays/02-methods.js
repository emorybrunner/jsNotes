let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheesecake', 'Hot Dog'];

food.push('Pizza'); //this appends (adds) something into the array
console.log('push:', food);

//         (1) (2)   (3)
food.splice(1, 1, 'Bananas'); //cut from position one, one thing, and add bananas
console.log('splice:', food);
/*
1. Position
2. How many to delete
3. What to add in its place
*/

food.splice(2, 0, 'Sweet Potato Pie'); //adds before the one that youve selected
console.log('splice2:', food);

// food.splice(0, 3, 'Turkey');
// console.log('splice3:', food);

food.pop(); //"pops" the last item in the array off of the end
console.log('pop:', food);

food.shift(); //removes the first item of the array
console.log('shift:', food);

food.unshift('Popcorn', 'Steak'); //adds something to the beginning of the array
console.log('unshift:', food);

let dogs = ['Shiba Inu', 'Greyhound', 'Shih Tzu', 'German Shepherd'];

dogs.push('Bull Terrier');
dogs.unshift('Husky', 'Great Dane');

console.log(dogs);

//you can't really chain array methods together because it mutates the original array

//* regular for loop
let dogs = ['Shiba Inu', 'Greyhound', 'Shih Tzu', 'German Shepherd'];

// for (let i = 0; i < dogs.length; i++) {
//     console.log(dogs[i]);
// }

//* forEach()
dogs.forEach(dog => console.log(dog)); //run this method for each item contained in the array

dogs.forEach(function(dog) {
    console.log(dog)
}) //this is better if you have multiple things that you want to do to the array

dogs.forEach((dog, index) => { 
//the parameters can be named anything, but the first refers to the value and the second to the key/index number
    console.log(dog);
    console.log(index);
})

//* CHALLENGE

let movies = ['Mona Lisa Smile', 'The Devil Wears Prada', 'Chef', 'The Lord of the Rings'];

movies.forEach(movie => console.log(movie)); //list the movies
movies.push('The Help'); //add another movie at the end
movies.splice(2, 1, 'Inglorious Bastards'); //replace one of the existing movies with another one

console.log(movies);

//*


let arr = [1, 2, 3, 4, 5];

if (arr instanceof Array){
    let revArr = arr.reverse();
    revArr.forEach(num => console.log(num));
} else {
    console.log('Not an array.');
}
