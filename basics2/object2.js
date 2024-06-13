const gitUser = new Object() // singleton
gitUser.id = "123abc"
gitUser.name = "keshi"
gitUser.isLoggedIn = false

// console.log(gitUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Tarun",
            lastname : "Thakur"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname?.userfullname.firstname); // ? checks whether key exist

const obj1 = {
    1:"a",2:"b"
}

const obj2 = {
    3:"a",4:"b"
}

const obj6 = {
    5:"a",6:"b"
}

// const obj3 = {obj1,obj2}
const obj3 = Object.assign(obj1,obj2,obj6)
// console.log(obj3);

// console.log(obj1); // obj1 and obj3 same

const obj4 = Object.assign({},obj1,obj2,obj6)
// console.log(obj4); // same but assures the joining {} act as target others are joined as sources


const obj9 = {...obj1,...obj2}

// database

const users = {
    id : 1,
    email : "h@gmail.com"
}


// users[1].email 

// console.log(gitUser);
// console.log(Object.keys(gitUser));
// console.log(Object.values(gitUser));
// console.log(Object.entries(gitUser));

// console.log(gitUser.hasOwnProperty('name'));


const course = {
    courseName : "JS",
    price : "999",
    courseInstructor : "Tarun"
}

const {courseInstructor: cours} = course
console.log(cours);
 
// JSON
// {
//     "name" : "Tarun",
//     "courseName" : "JS",
//     "price" : "free"
// }

// [
//     {},
//     {},
//     {}
// ]


