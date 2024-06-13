// console.log("T");
// console.log("A");

function sayMyName() {
    console.log("T");
    console.log("A");
}
sayMyName // reference
// sayMyName() // execute

function addTwoNumbers(number1, number2) {
    // console.log(number1 + number2);
    let result = number1 + number2
    return result // (number1 + number2)
    // console.log("Tarun");  not executed
}

const result = addTwoNumbers(3,7)  // console returns undefined
// addTwoNumbers(3,null)
console.log("Result : " ,result);


function loginUserMessage(username = "sam") {
    if (username === undefined ) {  // (!username) same
        console.log("Please enter a use name.");
    } else{
    return `${username} just logged in`
    }
}

console.log(loginUserMessage("Tarun"));
console.log(loginUserMessage()); // returns undefned





