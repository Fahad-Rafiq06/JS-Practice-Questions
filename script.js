// loop to get each key and value of any obejct

// let students = {
//     name: "Fahad",
//     number: 31,
//     age: 20,
// }

// console.log(students["name"]);

// for (let i in students){
//     console.log("keys " + i + " values " + students[i])
// }

// loop to print even numbers from 0 to 100

// for(let i = 0; i <=100; i++){
//     if(i%2 === 0){
//         console.log(i)
//     }
// }


// game to guess right number 

// let gamenum = 68;

// let usernum = prompt("enter your number");

// for (let i = 0; usernum!=gamenum; i++){
//     console.log("Wrong Answer");
//     usernum = prompt("Guess Again")
// }

// console.log("Correct;")

// Create a program in which user will give their full name and the final output will have @ before the username and 
// the length of the string at the end of the user name


// let username = prompt("Enter your name");

// let replace = username.replace(/s+/g, '') //this line is meant to replace space from the name but isn't working

// let output = `@${username}${username.length}`;

// console.log(output)

// Checking difference between for-of and for-in loop

// let heroes = ["Ironman", "Captain America", "Spider-man", "Thor", "Hulk"];
// let cities = ["Karachi", "islamabad", "lahore", "quetta"];

// for (let hero of heroes) { //prints value directly that's why used well for strings and arrays
//     console.log(hero)
// }

// for (let city in cities) { //prints keys/indices directly that's why works well for objects
//     console.log(cities[city])
// }

// // finding average of marks

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let i = 0; i < marks.length; i++) {
//     // console.log(sum+=marks[i])
//     sum += marks[i]
// }

// let avg = sum / marks.length;

// console.log(`the average marks of class = ${avg}`);

// // applying discount of 10% on each item.

// let originalPrice = [250, 645, 300, 900, 50];

// for (let i of originalPrice) {
//     let discountPrice = i / 100 * 10;
//     let finalPrice = i - discountPrice;
//     console.log(finalPrice)
// }

// // console.log(250/100*10)

// // Creating Array to Store Companies

// let companies = ["Netflix", "IBM", "Microsoft", "Google", "Twitter", "Uber", "Bloomberg"]

// // Remove first company from the array

// companies.shift();

// // Remover Uber and add Ola on it's palce

// companies.splice(4, 1, "Ola");

// // Add Amazon at the end

// companies.push("Amazon")

// console.log(companies)


// Create a function that takes string as an argument and returns the vowels in the string

// let ask = prompt("type your name") //asking name from user

// function str(val) {
//     let count = 0;
//     for (let i of val) {
//         if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
//             count++
//         }
//     }
//     console.log(count)
// }

// str(ask) //passing user value as argument


// doing same thing as above using arrow function

// let arrask = prompt("Type any word to find out how many vowels are in it");

// const arrstr = (arrval) => {
//     let arrcount = 0;
//     for (let i of arrval) {
//         if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
//             arrcount++
//         }
//     }
//     console.log(arrcount)
// }

// arrstr(arrask)


// // for a given number of array print a square of each value using foreach loop

// let num = [1,2,3,4,5];

// num.forEach((val) =>{
//     console.log(val*val);
// })


// let arr = [1,2,3,4];

// let darr = arr.map((val) => {
//     return val * val;
// })

// console.log(darr)

// let arrr = arr.filter((val) =>{
//     return val%2 === 0;
// })

// console.log(arrr)


// Filtering themarks from array that are 90+;

let marks = [55,92,85,90,78,99,100];

let stdMarks = marks.filter((val) => {
        return val > 90;
})

console.log(stdMarks)


// Ask the user a number and create an array till that number

let n = prompt("Give your number");

let arr = [];

for (let i = 1; i <= n; i++){
    arr[i-1] = i
}

console.log(arr)

// Using the Reduce method to sum all the numbers of the new array

let adding = arr.reduce((prev, curr) =>{
    return prev + curr
})

console.log(`Sum = ${adding}`)

// Using the Reduce method to generate a factorial of the new array

let factorial = arr.reduce((prev, curr) =>{
    return prev * curr
})

console.log(`Factorial = ${factorial}`)


// Appending value in HTML using js DOM Manipulation

let appendValue = document.querySelector("h2");

appendValue.innerText += " From the Greatest Businessman the world is going to witness";

// Accessing the boxes of HTML

let boxes = document.querySelectorAll(".box");
let idx = 1;
for (let div of boxes) {
    div.innerText = `Unique Value ${idx}`;
    idx++;
}
