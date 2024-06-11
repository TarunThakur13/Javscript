//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++

// Stack (primitive) , Heap (Non - primitive)

let myName = "Tarun";
let anotherName = myName // takes copy of my name so doesn't show change in Myname
anotherName = "keshav"

console.log(myName);
console.log(anotherName);

let user1 = {
    email : "user@google.com",
    upi : "yfhfb"
}

let user2 = user1
user2.email = "tarun"

console.log(user1);
console.log(user2.upi);
