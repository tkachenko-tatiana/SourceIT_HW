'use strict'
// Task #1
let a = 1, b = 2;
a = a + b;
b = a - b;
a = a - b;

// Task #2
let firstNumber = +prompt("Please enter your first number", ""); 
let secondNumber = +prompt("Please enter your second number", "");
if (firstNumber > secondNumber){
    alert(firstNumber);
}
else alert(secondNumber);

// Task #3
let flatNumber = +prompt("Please enter the flat number");
if (1 <= flatNumber  &&  flatNumber <= 20){
    alert("The flat is in the first porch");
}
else if (21 <= flatNumber &&  flatNumber <= 48){
    alert("The flat is in the second porch");
}
else if (49 <= flatNumber &&  flatNumber <= 90){
    alert("The flat is in the third porch");
}

// Task #4
let yearOfBirth = +prompt("Please enter your year of birth");
let age = 2019 - yearOfBirth;
if (age >= 16){
    alert("Welcome");
}
else alert("No entry");

// Task #5
let x = +prompt("Enter the value of \"x\"");
let y;
if (x < -2){
    y = 3*x**2 - 8; 
}
else if (-2 <= x && x <=4){
    y = -9 * x**2 - 12;
}
else y = 32 + x;