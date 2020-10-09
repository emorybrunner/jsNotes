// Equality
console.log('3' == 3); //only compares the value not the type //true
console.log(3 == 3);
console.log('3' == '3');

// Strict Equality
console.log('3' === 3); //compares the value and the type //false
console.log(3 === 3); //true

// Inequality
console.log('3' != 3);
console.log(3 != 3);

// Strict Inequality
console.log('3' !== 3);

/*
Greater than: >
Greater than or equal: >=
Less than: <
Less than or equal: <=
*/

//And
2 && 3

//Or
2 || 3

console.log(3>2>1);
console.log(3>2);
console.log(true>1); //booleans are processed as 0=false, 1=true. so it thinks that "1>1? --> false"
console.log(3>2>=1); //this is true!