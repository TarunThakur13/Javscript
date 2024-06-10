"use strict"; // treat all js code as newer version

// alert(3+3);  we are using nodejs , not browser(isme alert nahi chalta)

// console.log(3+3); 
// console.log("hitesh")  // dono chalte hai

let name="tarun"
let age=3
let isLoggenIn=true

// Primitive data types
// number => 2 to power 53
// bigint (for big numbers ex. stocks)
// string => ""
// boolean => true/false
// null => standalone value
// undefined 
// symbol => unique

// objects

// console.log(typeof null) // object
// console.log(typeof undefined) // undefined


//   ******************* Operations ************
let value = 3
let negValue = -value
console.log(negValue);
console.log(2**3);


let str1 = "Hello"
let str2 = "Tarun"
let str3 = str1+str2
console.log(str3);

console.log("1"+2);
console.log("1"+2+2);
console.log(1+2+"2");

console.log((3+4)*5%3);

console.log(+true);
console.log(+"");

let num1,num2,num3
num1=num2=num3=2+2
console.log(num1);
num1++;
console.log(num1);