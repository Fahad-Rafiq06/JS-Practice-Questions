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

// let marks = [55, 92, 85, 90, 78, 99, 100];

// let stdMarks = marks.filter((val) => {
//     return val > 90;
// })

// console.log(stdMarks)


// Ask from user a number and create an array till that number

// let n = prompt("Give your number");

// let arr = [];

// for (let i = 1; i <= n; i++){
//     arr[i-1] = i
// }

// console.log(arr)

// // Using Reduce method to sum all the numbers of new array

// let adding = arr.reduce((prev, curr) =>{
//     return prev + curr
// })

// console.log(`Sum = ${adding}`)

// // Using Reduce method to generate factorial of new array

// let factorial = arr.reduce((prev, curr) =>{
//     return prev * curr
// })

// console.log(`Factorial = ${factorial}`)


// Appending value in HTML using js DOM Manipulation

// let appendValue = document.querySelector("h2");

// appendValue.innerText += " From the Greatest Businessman the world is going to witness";

// // Accessing the boxes of html

// let boxes = document.querySelectorAll(".box");
// let idx = 1;
// for (let div of boxes) {
//     div.innerText = `Unique Value ${idx}`;
//     idx++;
// }


// creating a button using js and putting it as the first element of the body tag.

// let body = document.querySelector("body");

// let button = document.createElement("button");

// button.innerText = "Click Me";
// // button.style.backgroundColor = "red";
// // button.style.color = "white";
// button.className = "fahad"
// body.prepend(button)


// Adding new class to a paragraph using class list

// let para = document.querySelector("p");

// para.classList.add("newPara")


//=========== Dark/Light Mode using Events and dom maniuplation ===============

let togglebtn = document.querySelector("#togglebtn");
let currmode = "Light";

togglebtn.addEventListener("click", () => {
    if (currmode === "Light") {
        currmode = "Dark";
        togglebtn.innerText = "Light Mode";
        let body = document.querySelector("body");
        body.classList.remove("light")
        body.classList.add("dark");

    }
    else {
        currmode = "Light";
        togglebtn.innerText = "Dark Mode";
        let body = document.querySelector("body");
        body.classList.remove("dark")
        body.classList.add("light");

    }
    console.log(currmode)
})


// Practicing classes and constructor in javascript
// creating a class name as user and adding students in it. each student will add their name and email.

// let data = "This is College Data that users can access"

// class user {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email
//     }

//     viewData() {
//         console.log(data);
//     }

// }

// now adding an admin class and giving him rights to edit the data and all the properties that user class holds.

// class admin extends user { //extends keyword is used to inherit all the properties of parent class to child class.
//     constructor(name, email) { //Constructor method is automatically invoked by new keyword if we don't create it. Constructor is use when new object is creating and there is some work to do at the begining of the object so we use contsructor.
//         super(name, email) //super keyword is used to pass the information back to it's parents where the work is originally done.
//     }

//     editData() {
//         data = "This is the new data that will be update the data on calling of the function"
//     }
// }

// let admin1 = new admin("Rafiq", "abc@gmail.com"); //adding the object admin1 and passing it's values.

// let fahadStudent = new user("Fahad", "faddi7023@gmail.com");
// console.log(fahadStudent)
// let demoTeacher = new user("Random", "random@gmail.com");
// console.log(demoTeacher)


// Try Catch error handling. this method prints the error on the suspicious line where you think there might could be an error and run the remaining code without stopping.

// let a = 5;

// let b = 6;

// console.log(a + b);
// console.log(a + b);
// // console.log(a + c); //Now this line holds error or is a suspicious one so we can put it in try catch method. example in the next line.
// try {
//     console.log(a + c);
// }
// catch (error) {
//     console.log(error)
// }
// console.log(a + b);
// console.log(a + b);

// ========= Practising callback functions and call back hell ===========

// function getData(dataId) {
//     setTimeout(() => {
//         console.log("data " + dataId)
//     }, 2000);
// }

// getData(1) // ye hai aam zindagi but what if mujhe multiple data get krna hai after 2 secs of each result

// function getData(dataId, nextData) { //ye hai mentos zindagi mtlb callback pyramid that will show each output after 2 secs.
//     setTimeout(() => {
//         console.log("data " + dataId);
//         if (nextData) {
//             nextData();
//         }
//     }, 2000);
// }

// getData(2, () => { // ye hai callback function
//     getData(3, () => { // aur yeh structure kehlata hai callback hell
//         getData(4) // aur ye confusion create krta hai issliye bad way of writing code keh lata hai
//     })
// })

// now using promises

// function getData(dataId, nextData) { // using the same funciton to call a dta but after 5 seconds and what promise do is
//     return new Promise((resolve, reject) => { // promise takes 2 callbacks and js creates these functions automatically
//     setTimeout(() => { // promises return the value to me with a promise that this function will eventually run
//         console.log("data " + dataId); // and either this proise will be resolves, rejected or will be a pending if no result.
//         resolve("success") // here I am passing the success/resolve function so that when this function will console the dataID then the promise will be fulfilled.
//         if (nextData) {
//             nextData();
//         }
//     }, 5000);
// })
// }

// let fahad = getData("this is the Data"); //fahad is a promise and when you will get fahad you will receive pending till the above function runs and then fahad (promise) will be successful/resolve


// now lets create a function and return a promise

const getPromoise = () => {
    return new Promise((resolve, reject) => {
        console.log("this is a promise");
        // resolve("success");
        reject("error")
    })

}

let promise = getPromoise();

promise.then((res) => { //if promise is successful then run this function and execute this code
    console.log("promise is fulfilled")
})

promise.catch((err) => { //if promise is rejected then run this function and execute this code
    console.log("promise is rejected")
})


function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data " + dataId);
            resolve("success")
            // if (nextData) { // no need for callback(next data) in promise chain
            //     nextData();
            // }
        }, 2000);
    })
}

//===================== Callback hell problem =====================

// getData(2, () => { // ye hai callback function
//     getData(3, () => { // aur yeh structure kehlata hai callback hell
//         getData(4) // aur ye confusion create krta hai issliye bad way of writing code keh lata hai
//     })
// })

// ================ now using promise chain for the same result ===============

// getData(1)
//     .then(() => {
//         return getData(2);
// })
//     .then(() => {
//         return getData(3);
// })
//     .then(() => {
//         return getData(4);
// })
//     .then((res) => {
//         console.log(res)
// })

// ============ now using Async-Await for the same result but in more effecient way ===============

// async function gettingData () { //async is a keyword that we can use with any function that returns promises
//     await getData(1); // await keyword will only work under async function and this keyword will stop all the other work below it.
//     await getData(2); // this will run after the first await
//     await getData(3); // this will run after the second await and so forth and so forth
//     await getData(4);
//     await getData(5);
// }

// gettingData();

// now there is a way where I don't have to call the function unnecessarily and it is called IIFE (Immediately Invoked Function Expression)

(async function () {  // IIFE is a function that don't have any name and it will get executed at the moment it is created.
    await getData(1); // IIFe is used for one-time only or otherwise we will have to copy paste it for reusable.
    await getData(2); 
    await getData(3); 
    await getData(4);
    await getData(5);
}) ();

// now I don't have to call the above function as it will be invoked by itself the moment it created.
