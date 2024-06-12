// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);


let myCreatedDate = new Date(2023 , 0 ,23)
// console.log(myCreatedDate.toDateString());

// let date1 = new Date("2023-01-14")
let date1 = new Date("12-12-2023")
// console.log(date1.toLocaleString());



let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(date1.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday : "long",
    era : "long"
}))
