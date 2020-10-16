/*
What we've learned:

fetch()
    .then(x) //if you use one callback; if promis is Fulfilled
    .then(x, y) //x will happen if promise is Fulfilled, y if promise is Rejected
    .catch(x) //if you use one callback; if Rejected

fetch()
    .then(x<if worked>, y<if failed>)

fetch()
    .then(x) <if it worked>
    .catch(x) <if it failed>

const result = await fetch();
const json = await result.json();
console.log(json);
*/

//* ASYNC FUNCTION

const request = async () => { //you need to make it an async function because it may or may not succeed
    const response = await fetch('https://random.dog/woof.json');
    const json = await response.json(); 
    return json;
}

request().then(json => {
    console.log(json);
})

//best place to debug json is in the console of the browser b/c fetch will break node
//create a dummy html file and run it in the browser