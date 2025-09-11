let age = 1;

if (age >= 20) {
  console.log("You're an adult");
} else if (age < 20 && age >= 13) {
  console.log("You're a teenager");
} else {
  console.log("You're a child");
}

function changeNumber(number) {
  // if (number % 2 === 0) {
  //   return number;
  // } else {
  //   return number + 1;
  // }
  let result = number % 2 === 0 ? number : number + 1;
  console.log(result)
  return result

}

// changeNumber(2)
// changeNumber(5)
// changeNumber(-3)

function loopPractice() {
  // your code here
  for (let i = 0; i < 10; i++) {
    console.log("Hello world");
  }
}
// loopPractice();

function loopWithCount(number) {
  // your code here
  for (let i=0; i < number; i++) {
    console.log("Hello world")
  }
}
// loopWithCount(5);

function loopWithString(number) {
  let string = "";
  
  // Your code here
  for (let i=1; i <= number; i++) {
    string += i;
  }

  return string;
}

// loopWithString(5);


function loopOverArray(directions) {
  // your code here
  let result = {}

  for (let direction of directions) { // for each direction in directions array
    if (result[direction]) { // if the direction is already there
      result[direction]++; // add it to the direction value
    } else {
      result[direction] = 1; // if the direction is not there, make the direction value 1
    }
  }
  console.log(result)
  return result
}
loopOverArray(["n", "s", "e", "w", "right", "left", "s", "e", "w", "right"])

function loopOverObject(object) {
  // your code here
  for (let key in object) {
    console.log(`"Key: ${key}; Value: ${object[key]}"`)
  }
}
loopOverObject({foo: "bar", ding: "dong"})

let users = [
  {
    username: "John",
    password: "password123",
    role: "public",
  },
  {
    username: "xXxSn1p3rK1lLaxXx",
    password: "newbDestroyer",
    role: "public",
  },
  {
    username: "admin",
    password: "admin",
    role: "admin",
  },
];

function findUser(users, usr, pwd) {
  // your code here
  for (let user in users) {
    if (user.username === usr && user.password === pwd) {
      return user;
    }
  }
  return false;
}


findUser(users, "xXxSn1p3rK1lLaxXx", "newbDestroyer"); // => returns that user
findUser(users, "xXxSnip3rK1lLaxXx", "foobar"); //        => returns false
findUser(users, "foobar", "newbDestroyer"); //            => returns false
findUser([], "admin", "admin"); //                        => returns false