// VARIABLES ---

// Var can be declared and re-declared, though its use is sunsetting and should be avoided
// var a = 1;
// var a = 2;
// console.log(a);

// Let can be declared only once, attempting to declare again will result in SyntaxError
// let b = 2;
// let b = 4;
// console.log(b);

// Const can be declared and initialised only once, attempting either again will result in SyntaxError (redeclare) or TypeError(reinitialise)
// const c = 52;
// // c = 34;
// console.log(c);

// Var can be delared without being initialised, the below prints "undefined"
var a;
console.log(a);

// Var can be initialised after being declared.
a = 1;
console.log(a);

// Let can be declared without being intialised, the below prints undefined
let b;
console.log(b);

// Let can be initiliased after being declared
b = 2;
console.log(b);

// Const cannot be declared without being intiliased, attempting will result in SyntaxError

// Identifiers are case sensitive: Incorrect case will result in ReferenceError
let animal = "cat";
console.log(animal);
// console.log(Animal); -> ReferenceError

// camelCase is conventional for var and let variables, const are UPPER_CASE_WITH_UNDERSCORES
const FIRST_NAME = "John";
let lastName = "Doe";
let number = 5;
let veryLongSentence = "This is a very long sentence";

// Other conventional cases will still function however
let snake_case = "Snakessss";
let PascalCase = true;
let WILL_THIS_WORK = 4;

// Kebab case will not function due to the constraints in JS against spaces, dashes or special characters other than $ or _
// let kebab-case = "Kebab!" -> SyntaxError

// The below words are disallowed as variables due to their use as native functions in JS (/*More flexible multi-line allowable comments go here using the surrounding characters*/)
    /* 
    break
    case
    catch
    class
    const
    continue
    debugger
    default
    delete
    do
    else
    export
    extends
    false
    finally
    for
    function
    if
    import
    in
    instanceof
    new
    null
    return
    super
    switch
    this
    throw
    true
    try
    typeof
    var
    void
    while
    with
    */
// Otherwise follow meaningful naming conventions (avoid x y z make your code human readable!)

let year = 1995;

console.log(year); // 1995
console.log("JavaScript was born in " + year); // JavaScript was born in (str) 1995 (variable) -> concatenated using +
console.log(`JavaScript was born in ${year}`); // JavaScript was born in 1995 (interpolated using backticks and ${} wrapper)

/* JavaScript has 7 primitive data types -> primitive = immutable, unchangeable, no can change, can re-initilise though
They are the below:
String
Number
BigInt
Boolean
Symbol
Null
Undefined
*/

// String values/characters cannot be changed once they have been assigned
let animal1 = "kangaroo";
console.log(animal1[0]); // => k using index value

animal[0] = "b"; //reset first character to b
// no error was thrown, did it work?

console.log(animal1[0]); // => k
console.log(animal1); // => kangaroo

// It didn't work. It is impossible to change a primitive value. Silent, no error is thrown, but process cannot be completed.

// Floats and ints are all numbers
console.log(typeof 3); // => number
console.log(typeof 3.33); // => number

// Floats are complicated, in binary they are neverending 000000000 s, JS does not round like other languages
let numf = 0.1 + 0.2; 
console.log(numf); // => 0.30000000000000004

// JS covers math functions similar to Python
/*
+ (addition)
- (subtraction)
/ (division)
* (multiplication)
% (remainder)
** (exponentiation)
+= (self-addition)
++ (same as += 1)
-= (self-subtraction)
-- (same as -= 1)
*/

let num = 3;

num += 4; // this is the same as num  = num + 4
console.log(num); // => 7

num++; // this is the same as num += 1 or num = num + 1
console.log(num); // => 8

// JS also allows diving by zero! Fun facts!
console.log(12 / 0); // => Infinity

// JS allows positive and negative infinity, pos and neg zero, and a special type NaN - Not a Number

// Multiplying a number but a not number results in Not a Number (makes sense)
// console.log(1 * 'test'); // => NaN
console.log(1 / "2"); // => 0.5 (can read 2 number from string, but not 'two')

// Large numbers can be separated by _ with no effect on code execution
console.log(1_000_000) // => 1000000

// JS also has built in math functions, for example:
console.log(Math.floor(1.2)); //always rounds down
console.log(Math.ceil(1.2)); //always rounds up
console.log(Math.PI); // Damn good pie!
console.log(Math.round(4.5)); // Rounds to closest int (.5 is up)
console.log(Math.trunc(4.9)); // Removes any decimals and returns the int
console.log(Math.sign(-4)); // Returns 1 for positive int, -1 for negative int, 0 for zero
console.log(Math.random()); // Returns random decimal between 0 inclusive and 1 exclusive

// BigInt handles excessively large numbers

// The maximum safe number, if incremented, may cause errors
const maxNumber = Number.MAX_SAFE_INTEGER;
console.log(maxNumber); // => 9007199254740991
console.log(maxNumber + 4); // => 9007199254740996 - 1+4 is not 6
console.log(maxNumber + 10); // => 9007199254741000 - 1+10 is not 10

// Adding n at the end of ANY number makes it a BigInt, even small numbers
let notMax = 9007199254740991n;
console.log(notMax + 4n); // => 9007199254740995n - Value is correct now!

// Bool is Bool!
let isHungry = false;
let isFull = !isHungry;

console.log(isFull); // => true

// Undefined refers to any variable which SHOULD be there but isnt - unexpected empty
let theName;
console.log(theName); // => undefined

theName = "the name";
console.log(theName[2]); // => e
console.log(theName[16]); // => undefined, there is no character with index 16

// Null is EXPLICITLY empty, not unexpectedly empty

// Symbol is mostly used in objects, and act as special keys in key value pairs (think Python dict)
const age = Symbol("age"); // Set age as a symbol 
console.log(typeof age); // => symbol
console.log(age); // => Symbol(age) not just "age", not "Symbol", no quotations around age despite being in the initilisation! Spooky!

// Objects, Functions, Arrays - non-primitive OR objects!

//Object Literals are basically Python dictionaries (hello again JSON)
/*
python: dictionaries with key pairs
person = {
   "name": "John",
   "hair_colour": "brown",
   "eye_colour": "green",
}
*/

// JS Object Literal: (JSON Returns - the battle for new york)
let person = {
    name: "John",
    hairColour: "brown",
    eyeColour: "green",
};

console.log(person) // => { name: 'John', hairColour: 'brown', eyeColour: 'green' }

// Adding properties:

// JS Create a blank object literal
let object = {};

// Dot notation: add using <object>.<key>
object.name = "square";
console.log(object); // => {name: "square" }

// Bracket notation: add using <object>["<key>"]
object["sides"] = 4;
console.log(object); // => {name: "square", sides: 4}

// Retrieving properties:

// // Create student object literal
// let student = {
//   name: "Bob",
//   age: 22,
//   address: {
//     street: "Bennelong Point",
//     city: "Sydney",
//     state: "NSW",
//   },
// };

// // Dot notation: retrieve using <object>.<key>
// console.log(student.name); // => "Bob"

// // Bracket notation: retrieve using <object>["<key>"]
// console.log(student["age"]); // => 22

// // Dot notation for nested: <object>.<key>.<nestedKey>
// console.log(student.address.city); // => Sydney

// // Bracket notation for nested: <object>["<key>"]["<nestedKey>"]
// console.log(student["address"]["state"]); // => NSW

// Keys are always interpreted as strings in JS
let secrets = {
  1: 1,
  1.5: 1.5,
  precious: "special secret",
};

console.log(secrets["precious"]); // => special secret
console.log(secrets.precious); // => special secret
console.log(secrets[1]); // => 1 
console.log(secrets["1"]); // => 1

// Dot notations do not work for numerical keys:
// console.log(secrets.1); // => SyntaxError missing ) after argument list (does not see the .1)

// Deleting and updating:

let person1 = {
  name: "Bob",
  age: 24,
  dob: 1998,
};
console.log(person1);

// Updating age with Dot notation
person1.age = 25;
// or Bracket notation
person1["age"] = 25;

console.log(person1); // => { name: 'Bob', age: 25, dob: 1998 }

// Deleting age using Bracket notation
delete person1["age"];
// or Dot notation
delete person1.age;
// or by setting a variable for the key
key = "age";
delete person1[key];

console.log(person1); // => { name: 'Bob', dob: 1998 }

let student = {
  name: "Bob",
  sAge: 22,
  address: {
    street: "Bennelong Point",
    city: "Sydney",
    state: "NSW",
  },
};
console.log(student);


let {
  sAge,
  address: { street },
} = student;

console.log(sAge); // Calls Age from student => 22
console.log(street); // Calls street from student.address => Bennelong Point

// Arrays! Lists! Weeew!

// Create an Array
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
console.log(fruits); // => entire list
console.log(fruits[0]); // => Bananas
console.log(fruits[-1]); // => undefined. Cannot search from the end of list in JS. Invalid elements in array are also undefined (eg index too high)

// Destructuring
let [fruit1, fruit2] = fruits;
console.log(fruit1); // => Bananas
console.log(fruit2); // => Oranges

// Adding and deleting array elements

// Empty array
let myArray = [];
myArray.push(4); //append to the end with push
myArray.unshift(2); //prepend to the beginning with unshift
console.log(myArray); // => [2, 4]

myArray.pop(); //remove from the end with pop
myArray.shift(); //remove form the beginning with shift
console.log(myArray); // => []

myArray[2] = 6; //add with index
console.log(myArray) // => [<2 empty items>, 6 ] JS is SMART and notices empty indexes

myArray[1] = 4; //add with index
myArray[0] = 2; //add with index
console.log(myArray);

// Arrays are not immutable, we can change index values here!
myArray[0] = 1; // change with index
console.log(myArray);

console.log(typeof []); // => returns Object (is an object but has array inheritance, more on this later)

// Functions ahoy!

/* python version
def print_word(word):
    print(word)
print_word('Hello!') # => Hello!
*/

// JS Version: does not care about indentation however for readability and consistency should do them anyway.
function printWord(word) { // curly brace in stead of :
  console.log(word);
} // must close curly brace
printWord("Hello!"); // => Hello!

// returning values through functions again:
function sum(num1, num2) {
  result = num1 + num2; // nothing is returned explicitly, so the function operates but does not know what to do with its operation
} 
console.log(sum(2, 3)); // => undefined

function sum1(num1, num2) {
  result = num1 + num2;
  return result; // return the result ya stoopid function!
}
console.log(sum1(2, 3)); // => 5