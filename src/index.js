console.log("Hello world! From the index.js file!");

// //#region basic conditional logic and for loops

// let dinner = "cauldron of beans";

// if (dinner == "cauldron of beans"){
//     console.log("We've got so much leftovers!");
// } else {
//     console.log("What are having tomorrow?");
// }

// let luckyNumber = 666;

// if (luckyNumber === "666") {
//     console.log("That's the number of the beast, you heathen!");
// } else {
//     console.log("That's a cool lucky number alright, very demure")
// }

// for (let index = 0; index < 10; index++) {
//     console.log(index);
    
// }

// let animals = ["dog", "cat", "snake"]

// // better for performance
// for (let index = 0; index < animals.length; index++) {
//     const animal = animals[index];
//     console.log(animal)   
// }

// all other for loops wrap around FOR loops, so are better for readability but not as nice for performance
// fruits.forEach(fruit => {
//     console.log(fruit);
// });

// //#endregion

// //#region Functions

// function exampleFunction(){
//     console.log("Function code happens here!");
// }

// exampleFunction();

// exampleFunction();

// function messageRepeater(messageToRepeat){
//     console.log(messageToRepeat + messageToRepeat + messageToRepeat);
//     console.log("Regular function here! Here is the value of this: " + this)

// }

// for (let index = 0; index < 2; index++) {
//     messageRepeater("hello")
    
// }

// let favouriteDinners = [
//     "palak paneer",
//     "katsu curry",
//     "dumplings",
//     "laghman",
//     "lentil bolognese"
// ];

// // favouriteDinners.forEach(dinner => {
// //     messageRepeater(dinner);
// // })

// favouriteDinners.forEach(dinner => messageRepeater(dinner))

// const messageRepeaterArrowFunction = (messageToRepeat) => {
//     console.log("Arrow function here! Here is the value of this: " + this)
// }

// //#endregion

//#region Classes

class ExampleClass {
    constructor(){
        console.log("ExampleClass instance created!");
    }

    messageRepeater = (messageToRepeat) => {
        console.log(messageToRepeat + messageToRepeat + messageToRepeat);
        console.log("Arrow function of class instance has a values for this of: " + this)
    }
}

let exampleInstance = new ExampleClass();

console.log(exampleInstance);
console.log(typeof exampleInstance);
exampleInstance.messageRepeater("naners");

function functionThatThrowsAnError(){
    throw new Error("example error");
}

try {
    let exampleError = functionThatThrowsAnError();
    console.log("Example error value" + exampleError);
} catch (error) {
    console.log("Caught error is: " + error);
}

function add(num1, num2) {
    return num1 + num2;
}

console.log(add(7,7));
console.log(add(7,7) == 2)

//#endregion