console


Uses REPT(Read-evaluate-print-loop)


primitive data types
 ---- Number  -+ve,-ve,integer,
 ---- boolean
 ---- undefined
 ---- String
 ---- Null
 ---- bigint
 ---- symbol







NaN -- Not a number


let,const,var keyword 

template literals 
comparison operator === value and type both compare krta h



n = 67;
if (n>=99) {
    console.log("pass")
    if (n>=90) {
        console.log("O grade")
    }
    else{
        console.log("A grade")
    }
    
}else{
    console.log("u failed")
}



alert("simple alert")
// alert("tough alert")
prompt("enter u name")
console.error("error")
console.warn("warning")
hello = "afesf";
console.alert(hello)





let firstname = prompt("Enter first name")
let secondname = prompt("Enter first name")
let msg = "Welcome " + firstname + " " + secondname + " !";
alert(msg);






let cars = ["maruti", "xuv", "bergamazn"];
// let cars1 = ["hell", "u", "u"];
// let con = cars.concat(cars1)
// console.log(con)


const student = {
    name: "Vishal",
    roll: 89,
    marks: 34.5
};

student["name"]
student.gender = "male";
student.name = "yaSH"


























objects
----------- are used to stoer keyed collections & complex entities


const student = {
    name : "yash",
    roll: 34,
    class: "B",
    colours: ["red", "pink"]
};

let student2 = ["yash", 34, "B"];

console.log(student , student2);









// nested object
const classinfo = {

    aman: {
        classs: "A",
        grade: "F"
    },

    vikas: {
        classs: "A",
        grade: "F"
    },

    vishal: {
        classs: "A",
        grade: "F"
    }
};









const officeinfo = [{

    classs: "A",
    grade: "F"
},

{
    classs: "A",
    grade: "F"
},

{
    classs: "A",
    grade: "F"
}
]











// guessing game
let max = prompt("Enter the max number");
const random = Math.floor(Math.random()* max) + 1;
let guess = prompt("Guess the number");



while (true) {
    if (guess === "quit") {
        console.log("User ended the game");
        break;
    }
    
    if (guess == random) {
        console.log("You are right congo!!" ,guess)
        break;
    }else if (guess>random) {
        guess = prompt("Hint:Choose number smaller than this", guess);
    }else (guess<random) 
        guess = prompt("Hint:Choose number greater than this", guess);
    
}















// fucntion

function hello() {
    console.log("hello")
}
hello();



function isadult() {
    let age = 18;
    if (age >= 18) {
        console.log("u r an adult")
    } else {
        console.log("u r not an adult")

    }
}

isadult();



function rolladice() {
    const result = Math.floor(Math.random() * 6) + 1;
    console.log("Dice roll result:", result);
    return result;
}



rolladice();
rolladice();


function printinfo(name, age) {
    console.log(`Student name is ${name} and age is ${age}`)
}

printinfo("vishal", 29);




function sum(n) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
        sum = sum + i
    }
    console.log("sum is", sum)
}

sum(5);







let str = ["hi", "hello", "bye", "!"]

function concat(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        result += str[i];
    }
    return result;

}

console.log(concat(str));












// scopes
// ------- scopes determines the accessibilty of the function,block,variable,objects

// global,function, block{} ye let aur const me use hota h { ke adr}

{
    let a = 3;
}

console.log(a);






// lexical scope
// a variable defined outside the function can be aacccessible inside the another funtion defined after the varibale declartion
// ----------bahar wale funtion ke variable andr wale function use krskte h
// ----------ander wale funtion bahar wale ko access nhi krpate
function outer(){
    let a = 2;
    let b = 2;
    function inner(){
        console.log(a)
    }
}

















// higher order funtion ----return

function oddeven(request) {
    if (request == "odd") {
        let odd = function (n) {
            console.log(!(n % 2 == 0))
        }
        return odd;
    } else if (request == "even") {
        let even = function (n) {
            console.log((n % 2 == 0))
            return even;

        }
    } else{
        console.log("wrong input")
    }
}





















// function expressions
// nameless funtions, variable ke name se access krskte h , it's like storing a funtion in variable
let sum = function (a, b) {
    return a + b;
}

sum(2, 3);




// higher order funtion

function greeting(fun, n) {
    for (let i = 0; i <= n; i++) {
        fun();
    }
}

function greet() {
    console.log("Hello ji")
}

greeting(greet, 1);




// higher order funtion ----return

function oddeven(request) {
    if (request == "odd") {
        return function (n) {
            console.log(!(n % 2 == 0))
        }
        // return odd;
    } else if (request == "even") {
        return function (n) {
            console.log((n % 2 == 0))
            // return even;

        }
    } else {
        console.log("wrong input")
    }
}

let request = "odd"











// methods 
// --- actions that performed on an object , jo function methods me bnte h usko hee bolte h

const calculator = {
    add: function (a, b) {
        return a + b;
    },

    sub: function (a, b) {
        return a - b;
    },

    mul: function (a, b) {
        return a * b;
    },

    div: function (a, b) {
        return a / b;
    }
}

console.log(calculator.add(2, 3))









// Qs1. Write a JavaScript function that returns array elements larger than a number.
let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;

//elements larger than a number num
function getElements(arr, num) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(getElements(arr, num));




// Qs2. Write a JavaScript function to extract unique characters from a strring.
// Example: strr = “abcdabcdefgggh”
// ans = “abcdefgh”

let strr = "AfsgdhfjgfvSDFaGDFDZsezdvxf";

// function t0 get unique stings 
function getUnique(strr) {
    let ans = "";
    // strr = strr.toLowerCase();
    strr = strr.toLowerCase();

    for (let i = 0; i < strr.length; i++) {
        let currChar = strr[i];
        if (ans.indexOf(currChar) == -1) {
            // if current character is not added , then add it in ans.
            // otherwise it is a duplicate.
            ans += currChar;
        }

    }
    return ans;

}
getUnique(strr);













// 
// Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Austrralia", "Germany", "United States of America"]


let country = ["Austrratlia", "india", "us"]
function longestName(country) {
    let ansidx = 0;
    for (let i = 0; i < country.length; i++) {
        let anslen = country[ansidx].length;
        let currlen = country[i].length;
        if (currlen > anslen) {
            ansidx = i
        }

    }
    return country[ansidx];
}















// Qs4. Write a JavaScript function to count the number of vowels in a strring argument.


let str = "aefzdvevzacziouooodzcd";
function countwovel(str){
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt() == "a" ||
            str.charAt() == "e" ||
            str.charAt() == "i" ||
            str.charAt() == "o" ||
            str.charAt() == "u" 
    ){
            count++;
        }
        
    }
    return count;
}















//  this ckeyword refer to the object that is executing code the current piece of code

const student = {
    name : "vishal",
    eng : 223,
    maths : 54,
    phy: 21,
    getavg(){
        console.log(this)
        let avg = (this.eng + this.maths + this.phy) / 3;
        console.log(`${this.name} got the avg marks of ${avg}`);
    } 
}

function getavg(){
    console.log(this)
}













//  try and catch



console.log("hello")
console.log("hello")
// console.log(a)
// let a = 2;

try {
    console.log(a);
} catch (error) {
    console.log("An error at a");
}
console.log("hello")







//  arrow functions
// -------- nameless functions, kisi variable ko assign krte h funtion keyword nhi hota

const sum = (a,b) => {
    console.log(a+b)
}

// arrow funtion me retun value hee hata skte h

const diff = (a,b) => (
    a-b
)





// setTimeout(function,timeout).  --- f=unction (callback) , 

console.log("Hi there");
let id1 = setTimeout(() => {
    console.log("House")
}, 4000);
console.log("Welcome to");



// setInterval( funtion,timeout). -- har us timeinterval ke baad print krdega
console.log("Hi there");
let id2 = setInterval(() => {
    console.log("House")
}, 3000);
// console.log("Hello ji");



// this with arrow function
// -----  arrow function-------
        //   ----- lexical scope
        
    
// -----  funtion-------
        //   ----- calling object scope
        





// Qs1. Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.

const arrayAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

// console.log(arrayAverage([2,3,4,45,6,7,78,3]));


