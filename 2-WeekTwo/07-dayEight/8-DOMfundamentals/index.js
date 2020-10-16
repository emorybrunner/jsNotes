//* DOM MANIPULATION
//Document Object Model
//Document = the html document


let listTitle = document.getElementById('listTitle');
console.log(listTitle);

let listItem = document.querySelector('ul li');
console.log(listItem);

listTitle.style.textAlign = 'center';

listItem.style.color = 'red';
//only makes the first one red because it focuses on the first element

let grocery = document.getElementsByClassName('groceryItem');
console.log(grocery);
console.log(grocery[2]);

let liTag = document.getElementsByTagName('li');
console.log(liTag);

let selectAll = document.querySelectorAll('ul li'); //selects the same as getElementsByTagName but with a slightly different method
console.log(selectAll);

console.log(document.body.childNodes);

let listDiv = document.getElementById('list');
console.log(listDiv.firstChild);

for (tag of liTag) {
    tag.style.fontFamily = 'cursive';
}

document.getElementsByClassName('listItem')[4].innerText = 'Buy a new cauldron';

document.getElementsByClassName('groceryItem')[0].innerHTML = 'Moondew Drops';

document.getElementById('clickMe').addEventListener('click', (event) => {
    console.log(event);
    console.log(event.target);
    event.target.style.backgroundColor = 'lightBlue';
})

document.getElementById('listInput').addEventListener('keyup', (event) => {
    console.log(event.target.value);
})

let newGrocery = document.createElement('li');
let groceryList = document.getElementById('groceryList');

groceryList.appendChild(newGrocery);
newGrocery.innerText = "Ginger Root";

let groceryTitle = document.createElement('h3');
let groceryDiv = document.getElementById('groceryDiv');

groceryDiv.appendChild(groceryTitle);
groceryTitle.innerText = "Grocery List"

groceryDiv.insertBefore(groceryTitle, groceryDiv.childNodes[0]);