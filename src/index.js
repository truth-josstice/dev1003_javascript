console.log("Hello world! From the index.js file!");

let dinner = "cauldron of beans";

if (dinner == "cauldron of beans"){
    console.log("We've got so much leftovers!");
} else {
    console.log("What are having tomorrow?");
}

let luckyNumber = 666;

if (luckyNumber === "666") {
    console.log("That's the number of the beast, you heathen!");
} else {
    console.log("That's a cool lucky number alright, very demure")
}

for (let index = 0; index < 10; index++) {
    console.log(index);
    
}

let animals = ["dog", "cat", "snake"]

// better for performance
for (let index = 0; index < animals.length; index++) {
    const animal = animals[index];
    console.log(animal)   
}

// all other for loops wrap around FOR loops, so are better for readability but not as nice for performance
fruits.forEach(fruit => {
    console.log(fruit);
});