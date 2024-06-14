const user = {
    username : "tarun",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

const chai = () => {
    let usename = "tarun"
    console.log(this.username);
}

// chai()

// const addtwo = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addtwo(3,4))
//  explicit 

const addtwo = (num1,num2) => (num1 + num2)   // implicit return

const addthree = (num1,num2) => ({username: "Tarun"})

console.log(addthree(3,4));

const myArr = [1,2,3,4]
// myArr.forEach(()=> (1)) // use of arrow function