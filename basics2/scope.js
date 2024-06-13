// let a = 10
// const b = 20
// var c = 300
let a = 300;
if(true) {
    let a = 10
    const b = 20  // block  scope
    // c = 30
    console.log(a);
}

console.log(a);

// console.log(b); 

// console.log(c);   // a,b not found as declared in if scope

myArr = [1,23,4]
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}
