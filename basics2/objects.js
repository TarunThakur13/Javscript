// 1. Singleton (only one type of object)

// object literals (not singleton)

// Object.create (singleton constructor method)

const mySym = Symbol("key1")


const JsUser = {
    name : "tarun",
    "full name" : "Tarun",
    [mySym] : "mySym1",
    age : 18,
    location : "Jaipur",
    email : "hgnb",
    isLoggedIn : false,
    lastLoginDays : ["monday","saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]); // use of [] method

// console.log(JsUser[mySym]);



// Object.freeze(JsUser)  // will not give error on chaanging, but change will not reflect
JsUser.email = "jhvjbvghb"

// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greeting2 = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting); // reference of function
console.log(JsUser.greeting());
console.log(JsUser.greeting2());










