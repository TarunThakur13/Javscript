// array 

const myArr = [0,1,2,3,true,"tarun"]
const myHeroes = ['spiderman','batmman']
// console.log(myArr[0]);


const myArr2 = new Array(0,1,2,3)

// Array Methods

// myArr.push(6)
// myArr.push(8)
// console.log(myArr);
// myArr.pop()

myArr.unshift(6);
// console.log(myArr);
myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(9));

const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);

// slice , splice

// console.log("A ",myArr);

const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log("B ",myArr);

const myn2 = myArr.splice(1,3)
// console.log(myn2);
// console.log("B ",myArr); // original se remove ho gayi spiliced array

// 2nd part 

const marvel_heros = ["thor","ironman","spiderman"]
const dc = ["superman","flash","batman"]
marvel_heros.push(dc)
console.log(marvel_heros);
