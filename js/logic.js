console.log("logic js for functions and such");

const firstName = "Gradi"
const lastName = "Ellis"

function fullName () {
    const myName = `${firstName} ${lastName}`; 
    console.log("my name is", myName);
}

fullName();

const crayonColors = ["Green", "Pink", "Blue"];
const fullbox = 4;

function addColor (newColor) {
    crayonColors.push(newColor);
    return crayonColors.length;
}

let newColorNumberVal = addColor("salmon");
console.log(newColorNumberVal);

let crayonBoxNumber = addColor("salmon"); 
if (crayonBoxNumber < fullbox){
    console.log("pick more colors");
} else {
    console.log("your box  is full");
}

console.log("crayColorLength", crayonColors.length);