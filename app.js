console.log("HI");
console.log("Apna time ayega");
let a = 2;
let b = 4;
console.log("sum is: ", a + b)


let pencilprice = 10;
let eraserprice = 3;
// let output = "The price is " + (pencilprice + eraserprice ) + " rupees" ;
let output = `The price is ${pencilprice} rupees.`;
console.log(output);
console.log("The price is", pencilprice + eraserprice)


let day = "1"
switch (day) {
    case "1":
        console.log("Mon");
        break;

    case "2":
        console.log("tue");
        break;

    case "3":
        console.log("wed");
        break;


    case "4":
        console.log("thur");
        break;

    case "5":
        console.log("fri");
        break;


    case "6":
        console.log("sat");
        break;


    case "7":
        console.log("sun");
        break;



    default:
        console.log("invalid");
        break;


}

// alert("some ")
console.log("pront")
console.error("error")


// STring method

let str = "       heee    "

// str.trim();
// console.log(str);
// let firstname = prompt("Enter ur name")
// console.log(firstname);



//method chaining

console.log(str.toUpperCase())

console.log(str.indexOf("h"))
console.log(str.toUpperCase().trim());




//method slice
let str1 = "IloveCodeing"
console.log(str1.slice(1,3));
console.log(str1.slice(4));


// replace and repeat method
let str2 = "IloveCodeing"
console.log(str2.replace("love", "do"));
console.log(str2.repeat(4));







// array

// push: add to end                   // unshift: add to start
// pop: delete from end              // shift: delete from start

// array methods

cars = ["toyota" , "maruti", "suzuki"];
cars2 = ["burgman" , "bmw", "audi"];
// cars.push("alto");
// cars.pop("alto");

console.log(cars);
console.log(cars.includes("toyota"));
console.log(cars.concat(cars2));
console.log(cars.reverse());
// slice-- copy me chnages krta hai
// console.log(cars.slice(2,4));

//splice --- original array me change krta h /replace/remove/add
// console.log(cars.splice(2,4));
console.log(cars.sort());

// array references 




