let score ="33AB"
let score1=undefined

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber);

console.log(valueInNumber);
console.log(valueInNumber1);

// 33 => 33
//  33Ab => NaN(not a number)
// true => 1
// undefined => NaN

let IsLoggedIn= 1;
let booleanIsLoggedIn = Boolean(IsLoggedIn)

let IsLoggedIn1= "";
let booleanIsLoggedIn1 = Boolean(IsLoggedIn1)
console.log(booleanIsLoggedIn1);

// 1=> true ; 0=> false
// "hitesh" => true ; "" => false

let someNumber = 33*2
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber);
