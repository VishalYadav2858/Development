////////////  DOM (Document and object model)      //////////////
// --- It represents a a document with logical tree
// --- It allows us to manipulate HTML content





// //////// Selecting Elements /////////////////
// -------getelementsbyId ,  getelementsbyclass, getelementsbytag       return the element as an object or null if not found
//  -------- query selector.  ,   
console.dir(document.querySelector("h1"));
console.dir(document.querySelectorAll("h1"));
console.dir(document.querySelector("#img3"));
console.dir(document.querySelectorAll("#img3"));
console.dir(document.querySelector(".card"));
console.dir(document.querySelectorAll(".card"));
console.dir(document.querySelector("div a"));


// Changes using properties and methods

// ----- innertext -> shows the visible text conteained in a node
// ----- textcontent -> shows all the full text
// ----- innerHTML -> shows the full markup


// ///////// Attribute manipulation //////////
getAttibute();
setAttibute();


// //////// Manipulating styles with style attributes
let heading = document.querySelector("h1");
heading.style.color = "pink";
heading.style.backgroundColor = "yellow";


let liinks = document.querySelectorAll(".div li")
for (let i = 0; i < liinks.length; i++) {
    liinks[i].style.color = "red";
    
}



//   ////. Manipulating styles using classlist///// /

classList.add();
classList.remove();
classList.contain();   // to check if exist
classList.toggle();    // to toggle between add and remove

