/**
 * 1.5.1 Async JS intro, Event Loops, Callbacks
 * Code examples from the lesson on Ed are below:
 */

/**
 * Challenge for ED content:
 * 1. Write a for loop which counts to one billion
 * 2. At 800 million, log "FOUND!" and the time it took to reach that point
 * 3. At the end of the loop, log the total time taken and "We will, we will block you!"
 */ 

// function countToOneBillion() {
//     let foundTime;
//     const startTime = Date.now();
    
//     console.log("Start");

//     for (let index = 0; index <= 1_000_000_000; index++) {
//         if (index === 800_000_000) {
//             foundTime = Date.now();
//             console.log("FOUND!")
//         };
//     };

//     const endTime = Date.now();
//     console.log(`Time to reach 800 million: ${foundTime - startTime} ms`);
//     console.log(`Time taken: ${endTime - startTime} ms`);
//     console.log("We will, we will block you!");

// };

// countToOneBillion();


// const fs = require("fs");

// function checkList(searchName, callback) {
//   fs.readFile("./names.txt", "utf8", (error, data) =>
//     callback(error, data, searchName)
//   );
// }

// function findName(error, data, searchName) {
//   //code here
//   if (error) {
//     console.error(`An error has occured: ${error.message}`);
//     return False;
//   };

//  if (data.includes(searchName)) {
//     console.log(`${searchName} was found!`);
//  } else {
//     console.log(`${searchName} was not found.`);
//  }
// };

//our first example will use a named function.

// function spookyFunction() {
//   console.log("BOO!");
// }

// const waitTime = 2000;
// console.log(`In ${waitTime / 1000} seconds prepare for a fright`);

// setTimeout(spookyFunction, waitTime);

// //more often than not we'll simply pass in an anonymous function
// // usually to execute another function or do another simple process

// setTimeout(() => {
//   console.log("AHH!");
// }, 1000);

// console.log("1");

// //we can use an anonymous function that isn't fat arrow syntax
// setTimeout(function () {
//   console.log("2");
// }, 1000);

// console.log("3");

// function rememberName(inputName, callback) {
//   setTimeout(() => {
//     // if input not a string, return early with error in the first argument position
//     if (typeof inputName !== "string") {
//       const error = new Error("That's not a real name, Elon");
//       return callback(error, null);
//     }
//     // otherwise use null in the first position, indicating there's no error
//     callback(null, inputName);
//   }, 2000);
// }

// function greetIfValid(error, name) {
//   // if an error is passed in the first argument (i.e. not null) return early with console.error
//   if (error) {
//     return console.error(error.message);
//   }
//   console.log(`Hello, ${name}! Good to see you again.`);
// }

// // try invoking the function with a data type that isn't a string.
// rememberName(1564321, greetIfValid);

// const list = ["totoro", "simba", "mort"];

// function checkList(name, callback) {
//   setTimeout(() => {
//     callback(list, name);
//   }, 0);
// }

// function findName(data, name) {
//   const result = data.includes(name);
//   console.log(result);
//   return result;
// }

// checkList("totoro", findName);

/**
 * 1.5.2 Promises
 */

// function waitThenSquare(input) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (typeof input === "number") {
//         resolve(input * input);
//       } else {
//         reject(new Error("Input must be a number"));
//       }
//     }, 3000);
//   });
// }

// waitThenSquare(877)
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Promise settled"));

// console.log("I'm not blocked");

// // we'll start with a simple function that resolves or rejects a Promise based on input
// function isNumber(input) {
//   return new Promise((resolve, reject) => {
//     if (typeof input === "number") {
//       resolve(input);
//     }
//     reject(new Error("Must be a number"));
//   });
// }

// // double will only double positive numbers - we aren't interested in double negativity here ...
// function double(number) {
//   return new Promise((resolve, reject) => {
//     if (number < 0) {
//       reject(new Error("Must be positive"));
//     }
//     resolve(number * 2);
//   });
// }

// //try changing the input to create an error and see if the .catch handles it
// isNumber(1.10)
//   .then(double)
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error.message));

// const list = ["totoro", "simba", "mort"];

// function checkList(name, callback) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             try {
//                 resolve(callback(list, name));
//             } catch (error) {
//                 reject(`An error has occurred: ${error.message}`);
//             }
//         }, 0);
//     });
// }

// function findName(data, name) {
//   return (data.includes(name));
// };

// const result = checkList("yo mama", findName)
//     .then((result) => console.log(`Is the name on the list? --> ${result}`  ))
//     .catch((err) => console.error(err));

/** Challenge for Ed Content:
 * 
 * 
 */

const fs = require("fs");
const { get } = require("http");

// For testing in terminal
const testFile = "./students.txt";
const emptyFile = "./empty.txt";

// We're giving you this one - but make sure you understand what is happening in this function
function getData(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (error, data) => {
      if (error) {
        reject(error.message);
      }
      resolve(data);
    });
  });
}

// Given the string `data`, return an array of names
function createList(data) {
  return data.split("\n").filter((val) => val.length > 0);
}

function createGroup(list, size) {
  /*
      If list is empty and size > 0, throw an Error with the message:
      "List is empty. Cannot create a group of size " + size

      If size is not a positive number, throw an Error with the message: 
      "Invalid group size. Size must be a positive number"

      If size is larger than array.length, throw an Error with the message:
      "Group too large. Size limited to " + list.length

      If size and list are valid, return a array of size with random values from list
    */
   if (list.length === 0 && size > 0) {
    throw new Error("List is empty. Cannot create a group of size " + size);
   }
   if (size <= 0) {
    throw new Error("Invalid group size. Size must be a positive integer"); 
   }
    if (size > list.length) {
    throw new Error("Group too large. Size limited to " + list.length);
   };
    const listCopy = [...list];
    const group = [];
    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * listCopy.length);
        group.push(listCopy.splice(randomIndex, 1)[0]);
    }

    return group;
};

function getStudentList(file, size) {
  /*
      Use calls to getData, createList, and createGroup to return a Promise from this function that either resolves
      to the list of students, or rejects with the correct error message.

      Hint: Using promise chaining to make the implementation simpler
    */
   return getData(file)
    .then((data) => createList(data))
    .then((list) => createGroup(list, size))
    .catch((error) => { throw error.message });
};

// For testing in terminal
getStudentList(testFile, 4).then((list) => console.log(list)); // should print an array with 2 names
// getStudentList(emptyFile, 2)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error)); // should print List is empty error
// getStudentList(testFile, 50)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error)); // should print Group too large error

// module.exports = { getData, createGroup, getStudentList };
