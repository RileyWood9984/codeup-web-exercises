"use strict";

/* ########################################################################## */
// function analyzeColor (color){
//     console.log (color);
//     if (color.toLowerCase() =="red"){
//         return"Red is the color of painful mistakes."
//     }
//     else if (color.toLowerCase() =="blue"){
//         return "Blue is the color of emptiness and potential."
//     }
//     else{
//         return "I dont know much about "+ color.toLowerCase() +", but it sounds nice."
//     }
// }
/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
var colorChoice = prompt("What color would you like to know about? Red, Blue, Green, Yellow, Orange, Indigo, or Violet?");
switch (colorChoice.toLowerCase()){
    case "red":
        alert("Red the color of a painful lesson, it is the color painc, pain and vitaility.");
        break;
    case "blue":
        alert("Blue is the color of vast emptiness,  it is the color of a beatutiful sky yet lingering too long you might realize that blue is an empty facade.");
        break;
    case "green":
        alert("Green is the color of thriving wilderness, and posionous toxic death laying hidden.");
        break;
    case "yellow":
        alert("Yellow is the gift warmth, and withing of vibrancy, the blessing of young and curse of age.");
        break;
    case "orange":
        alert("Orange is the color peace, sweet yet bitter fruit, it is the color of a dying flame.");
        break;
    case "indigo":
        alert("Indigo is the color of coming darkness, the danger of night and relaxation of rest.");
        break;
    case "violet":
        alert("Violet is soft and dark, dangerous yet inviting. Violet is curosity.");
        break;
    default :
        alert(colorChoice+" is not a color I'm familiar with, either I can't read or you're trying to mess with me.");
        break;
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */
function calculateTotal(x,y){
    switch (x){
        case 5:
            return(y*0);
            break;
        case 4:
            return(+y-(0.5*y));
            break;
        case 3:
            return(+y-(0.35*y));
            break;
        case 2:
            return(+y-(0.25*y));
            break;
        case 1:
            return(+y-(0.1*y));
            break;
        default:
            return (y);
            break;
    }
}

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalBill = prompt("What is your total bill?")
alert("Your lucky number was, "+luckyNumber+" and your total was, "+totalBill+". After you discount was applied your total is, " +calculateTotal(luckyNumber,totalBill))
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
var what= confirm("Would you like to enter a number?");
if(what===true){
    var num1=prompt("Please enter a number.")
    if (isNaN(parseInt(num1))===false){
        if(num1%2!==0){
            alert(num1+" is odd.")
        }
        else{
            alert(num1+" is even.")
        }
        alert(parseInt(num1)+100+" is your number plus 100.")
        if(num1<0){
            alert(num1+" is negative.")
        }
        else{
            alert(num1+" is positive.")
        }
    }
    else{
        alert("Oh ha ha, you think its funny to bully the website don't you?")
    }

}
