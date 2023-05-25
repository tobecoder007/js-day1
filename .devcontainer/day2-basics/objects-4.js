// const tinderUser = new Object() 
const tinderUser = {}

 tinderUser.id = "123abc"
 tinderUser.name = "Sammy"
 tinderUser.isLoggedIn = false

// console.log(tinderUser); 


const regularUser = {
    email: "lk@gmail.com",
    fullName: {
        userfullName: {
            firstname: "lav",
            lastname: "k"
        }
    }
}

// console.log(regularUser.fullName.userfullName.firstname); 

const obj1 = {1: "a", 2: "b"} 
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = Object.assign(obj1, obj2)
const obj5 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj5);

const obj6 = {...obj1, ...obj2, ...obj3} 
// console.log(obj6); 

// console.log(obj4 === obj1);
// console.log(obj5 === obj1);

const users = [
    {
        id: 1,
        email: "vk@gmail.com"
    },
    {
        id: 1,
        email: "vk@gmail.com"
    },
    {
        id: 1,
        email: "vk@gmail.com"
    }
]

// console.log(users[1].id);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const course = {
    courseName: "js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor); 

const {courseInstructor: Inst} = course;

// console.log(courseInstructor)
console.log(Inst);