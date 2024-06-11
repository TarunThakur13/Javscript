const name = "Tarun"
const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Tar-un")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-6,2)
console.log(anotherString);

const newString1 = "  tarun   "
console.log(newString1);
console.log(newString1.trim());


const url = "https://tarun.com/tarun%20thakur"
console.log(url.replace('%20','-'));

console.log(url.includes('tarun'));
console.log(gameName.split('-'));