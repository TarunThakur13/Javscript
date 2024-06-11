const score = 400

const balance = new Number(300) // explicitly type define

// console.log(score);
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 1123.8966
// console.log(otherNumber.toPrecision(2));
// console.log(otherNumber.toPrecision(5));

const hundreds = 10000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));


// +++++++++++ maths ++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.99));

console.log(Math.min(9,7,4,2));
console.log(Math.max(9,7,4,2));

console.log(Math.random());
console.log((Math.random()*10) + 1);

const min = 10;
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)) + min);

// console.log(Math.floor(Math.random()*(max-min+1)) + min); remember