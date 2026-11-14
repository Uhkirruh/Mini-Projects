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

// let timeoutId;

// function startTimer() {
//   timeoutId = setTimeout(() => window.alert("Hello"), 3000);
//   console.log("Started");
// }

// function clearTimer() {
//   clearTimeout(timeoutId);
//   console.log("Cleared");
// }

//Synchronous  and Asynchronous

// function func1(callback) {
//   setTimeout(() => {
//     console.log("Task 1");
//     callback();
//   }, 3000);
// }

// function func2() {
//   console.log("Task 2");
//   console.log("Task 3");
//   console.log("Task 4");
// }

// func1(func2);

// ADD AND CHANGE HTML

// STEP 1 CREATE THE ELEMENT
// const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
// newH1.textContent = "I like Pizza!";
// newH1.id = "myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center";

// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[1]);

// REMOVE THE HTML ELEMENT
// document.getElementById("box1").removeChild(newH1);

// EXAMPLE 3 <li>

// STEP 1 CREATE THE ELEMENT
// const newListItem = document.createElement("li");

// // STEP 2 ADD ATTRIBUTES/PROPERTIES
// newListItem.textContent = "coconut";
// newListItem.id = "coconut";
// newListItem.style.fontWeight = "bold";
// newListItem.style.backgroundColor = "lightgreen";

// // STEP 3 APPEND ELEMENT TO DOM
// // document.body.append(newListItem);
// // document.getElementById("fruits").prepend(newListItem);

// // const orange = document.getElementById("orange");
// // document.getElementById("fruits").insertBefore(newListItem, );

// const listItems = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItems[0]);

const myBox = document.getElementById("myBox");

// document.addEventListener("keydown", (event) => {
//   myBox.textContent = ":P";
//   myBox.style.backgroundColor = "tomato";
// });

// document.addEventListener("keyup", (event) => {
//   myBox.textContent = ":D";
//   myBox.style.backgroundColor = "lightblue";
// });

// const moveAmount = 100;
// let x = 0;
// let y = 0;

// document.addEventListener("keydown", (event) => {
//   myBox.textContent = ":P";
//   myBox.style.backgroundColor = "tomato";
// });

// document.addEventListener("keyup", (event) => {
//   myBox.textContent =  ":D";
//   myBox.style.backgroundColor = "lightblue";
// });

// document.addEventListener("keydown", (event) => {
//   event.preventDefault();

//   if (event.key.startsWith("Arrow")) {
//     switch (event.key) {
//       case "ArrowUp":
//         y -= moveAmount;
//         break;
//       case "ArrowDown":
//         y += moveAmount;
//         break;
//       case "ArrowLeft":
//         x -= moveAmount;
//         break;
//       case "ArrowRight":
//         x += moveAmount;
//         break;
//     }
//     myBox.style.top = `${y}px`;
//     myBox.style.left = `${x}px`;
//   }
// });

// const myButton = document.getElementById("myButton");

// const myImg = document.getElementById("myImg");

// myButton.addEventListener("click", (event) => {
//   if (myImg.style.visibility === "hidden") {
//     myImg.style.visibility = "visible";
//     myButton.textContent = "Hide";
//   } else {
//     myImg.style.visibility = "hidden";
//     myButton.textContent = "Show";
//   }
// });

// FETCH API

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch(console.error((error) => console.log(error)));

// ASYNC AND AWAIT

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
    );

    if (!response.ok) {
      throw new Error("Could not fetch resources");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_shiny;
    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
    console.log(data.types);
  } catch (error) {
    console.log(error);
  }
}
