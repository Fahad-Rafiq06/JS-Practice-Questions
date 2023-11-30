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