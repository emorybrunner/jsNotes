//*For In Loops

// let student = {
//     name: "Justin",
//     awesome: false,
//     degree: "JavaScript",
//     weak: 1
// }
// //"item" can be any word; it is an alias referring to the keys ie name, awesome, degree, weak
// for (item in student){
//     // console.log(item);
//     // console.log(student[item]);
//     console.log(student[item]);
// }

// let cats = [ 'tabby', 'british shorthair', 'burmese']
// for (cat in cats){
//     console.log(cat);
//     console.log(cats[cat]);
//}
//You don't see the keys in the array but they are still there; the key to an array is an index

//*Challenge

let name = "eMory" 
let nameTwo= "bRunNEr"

// for (letters in name){
//     console.log(name[0].toUpperCase() + name.slice(1, 5).toLowerCase() + " "  name[6].toUpperCase() + name.slice(7).toLowerCase());
// }

let capName;

for(let i in name){
    if (i == 0){
        capName = name[i].toUpperCase();
    } else {
        capName += name[i].toLowerCase();
    }
}

for(let i in nameTwo){
    if (i == 0){
        capName = nameTwo[i].toUpperCase();
    } else {
        capName += nameTwo[i].toLowerCase();
    }
}


console.log(capName);