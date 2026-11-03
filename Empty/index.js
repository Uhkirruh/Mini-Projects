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
let username = window.prompt("Enter your username:");

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraLetters = username.slice(1);
// extraLetters = extraLetters.toLowerCase();
// username = letter + extraLetters;

// console.log(username);

// METHOD CHAINING

username =
  username.trim().charAt(0).toUpperCase() +
  username.trim().slice(1).toLowerCase();

console.log(username);
