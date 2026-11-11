// const fullName = "Justin Baritua";

// let firstName = fullName.slice(0, 6);
// let lastName = fullName.slice(7, 14);
// console.log(firstName);
// console.log(lastName);

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);
// console.log(firstName);
// console.log(lastName);

// const email = "justinbaritua60@gmail.com";

// let username = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") + 1);
// console.log(username);
// console.log(extension);

// NO METHOD CHAINING
// let username = window.prompt("Enter your username:");

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraLetters = username.slice(1);
// extraLetters = extraLetters.toLowerCase();
// username = letter + extraLetters;

// console.log(username);

// METHOD CHAINING

// username =
//   username.trim().charAt(0).toUpperCase() +
//   username.trim().slice(1).toLowerCase();

// console.log(username);

// FUNCTION EXPRESSION
// const numbers = [1, 2, 3, 4, 5, 6];

// const squares = numbers.map(function (element) {
//   return Math.pow(element, 2);
// });

// const cubes = numbers.map(function (element) {
//   return Math.pow(element, 3);
// });

// const evenNums = numbers.filter(function (element) {
//   return element % 2 === 0;
// });

// const total = numbers.reduce(function (accumulator, element) {
//   return accumulator + element;
// });
// console.log(total);

// ARROW FUNCTIONS

// const numbers = [1, 2, 3, 4, 5, 6];

// const squares = numbers.map((element) => Math.pow(element, 2));
// const cubes = numbers.map((element) => Math.pow(element, 3));
// const isSquares = numbers.filter((element) => element % 2 === 0);
// const isCubes = numbers.filter((element) => element % 2 !== 0);

// const total = numbers.reduce((accumulator, element) => accumulator + element);
// console.log(total);

// Objects

// const person1 = {
//   firstName: "Justin Manuel",
//   lastName: "Baritua",
//   sayHello: () => {
//     console.log("Say Hello!");
//   },
// };

// person1.sayHello();

// Constructors
// function Car(make, model, year, color) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.drive = function () {
//     console.log(`You drive a ${this.model}`);
//   };
// }

// const car1 = new Car("Ford", "Mustang", 2025, "Red");

// car1.drive();

// SORT

// const people = [
//   { name: "Justin", age: 24, gpa: 1.5 },
//   { name: "Ken", age: 23, gpa: 2.5 },
//   { name: "Lance", age: 26, gpa: 3.5 },
//   { name: "Eric", age: 25, gpa: 4.5 },
// ];

// people.sort((a, b) => b.name.localeCompare(a.name));
//localCompare is for strings to be arranged in lexical order

// console.log(people);

//setTimeout(callback, delay)

// clearTimeout(timeoutID)

let timeoutId;

function startTimer() {
  timeoutId = setTimeout(() => window.alert("Hello"), 3000);
  console.log("Started");
}

function clearTimer() {
  clearTimeout(timeoutId);
  console.log("Cleared");
}
