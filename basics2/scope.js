// let a = 10
// const b = 20
// // var c = 300
// let a = 300;
// if(true) {
//     let a = 10
//     const b = 20  // block  scope
//     // c = 30
//     console.log(a);
// }

// console.log(a);

// console.log(b); 

// console.log(c);   // a,b not found as declared in if scope

// myArr = [1,23,4]
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element);
// }

function one() {
    const username = "Tarun"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); not applicable
    two()
}
one()

if(true){
    const username = "tarun"
    if(username === "tarun"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++++++ interseting ++++++++++++++++
console.log(addone(5));
function addone(num) {
    return num + 1
}

console.log(addone(5));
// addtwo(5)  con't do this
const addtwo = function(num) {
    return num +2
}

addtwo(5)


