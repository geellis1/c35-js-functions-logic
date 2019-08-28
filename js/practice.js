//Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" 
//instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". 
//For numbers which are multiples of both five and seven print "ChickenMonkey".

//To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.

//You can start with this simpler version that outputs even numbers to the console and ignores odd numbers. 
//you need to refactor this code to meet the requirements above.

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    if (currentNumber % 5 === 0) {
        console.log(currentNumber, "chicken") 
    }
    if (currentNumber % 7 === 0) {
        console.log(currentNumber, "Monkey")
    }
    if (currentNumber % 35 ===0) {
        console.log(currentNumber, "ChickenMonkey")
    }
}

//__________________________________________________

/*Your job is to write a function that accepts any band name as an argument. The function will 
increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

The let bandNumber is a global variable meaning that any function can access it and change it's value. If it said const in front 
of it you wouldn't be able to increment the number, it wouldn't run. */

let bandNumber = 1

const takeNumber = function (bandName) {
    let sentence = `${bandName}, ${bandNumber}`
    bandNumber++
    return sentence
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console

//__________________________________________________
//Cookout Exercise 

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);

};

for (let i = 0; i < foods.length; i++) {
    grill(foods[i]);
}

console.log(cookedFood)

/*Your task is to iterate over the array of foods and invoke the function 
for each item so that the cookedFood array contains all of the items after they are cooked. */

/* Create an object representing your breakfast.
Write a function that will accept your breakfast object and 
return a component. Display the component on the DOM 
along with your name. You will need index.html and main.js.*/

const breakfast = [
    {
    drink: "tea",
    meat: "none",
    energy: "larabar",
    },
    {
    drink: "zija",
    meat: "chicken sausage",
    energy: "none",
    }
]


const createBreakfast = (item) => {
    return ` <div>
        <h2>${item.drink}</h2>
        <p>${item.meat}</p>
        <p>${item.energy}</p>
    </div>`
}

console.log(createBreakfast)

const breakfastContainer = document.querySelector("#container")

breakfast.forEach(item => {
    breakfastContainer.innerHTML += createBreakfast(item);
});


