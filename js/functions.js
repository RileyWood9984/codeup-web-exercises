"use strict";
function sayHello(name){
    return ("Hello, "+ name +"!")
}
var helloMessage = sayHello("Riley");
var myName = "Riley";
console.log(helloMessage);
console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);
function istwo(num){
    if(num===2) {
        return true
    }
    else{
        return false
    }
}
console.log(istwo(random))

function calculateTip(x,y){
    return(x * y)
}
var bill = prompt("Your bill is due how much do you owe?");
var tip = prompt("How much would you like to tip?(Decimal value not percentage please.)");
alert("You should tip $"+calculateTip(tip,bill)+" and your total should be $"+(calculateTip(tip,bill)+parseInt(bill)));

function applyDiscount(x, y){
    return (y-(x*y))
}
/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */