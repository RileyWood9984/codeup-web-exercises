"use strict";
console.log("Hello from external JavaScript");
alert("Welcome to my Website!");
var favColor = prompt("What is you favorite color?");
console.log (favColor);
var lowerFav = favColor.toLowerCase();
if(lowerFav ==="red"){
	alert("That's great! Red is my favoirte too!");
}
else{
	alert("That's not as good as red, but "+ favColor + " is nice too.");
	}
var moviesTotal = prompt("If you have borrowed The Little Mermaid, Brother Bear and Hercules how many moives have you borrowed?:");
var daysTotal = prompt("if you borrow the first for three days, the second for five days, and the last for one day how many total days have you borrowed movies for?:");
var priceForADay = prompt("The price per day is the same as the number of movies borrowed though the two have no further correlation. How much is the price per day?:");
alert("If what you've enter is correct then the total price is $"+ (daysTotal*priceForADay));
