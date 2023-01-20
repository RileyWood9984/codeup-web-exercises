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

var googlePay = prompt("Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400,how much does google pay?");
var amazonPay = prompt("Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Amazon pays $380, how much does amazon pay?");
var facebookPay = prompt("Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Facebook pays $350 how much does facebook pay?");
var googleHours = prompt("You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon. How many hours did you work at google?");
var amazonHours = prompt("You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon. How many hours did you work at amazon?");
var facebookHours = prompt("You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon. How many hours did you work at facebook?");
alert("If you've enter the right values then you should made: " + ((+googlePay*(+googleHours))+(+amazonPay*(+amazonHours))+(+facebookHours*(+facebookPay))));
console.log(googlePay);
console.log(googleHours);
console.log(amazonPay);
console.log(amazonHours);
console.log(facebookHours);
console.log(facebookPay);

var offDay = prompt("Supose you are a student you have classes Monday, Tuesday, Thurday, and Friday. Excluding weekends what day do you have off?")
var pyschClassSize = prompt("Supose there is a psych course you want to take on wednesday. It is almost capcity with 6 below the max six of 35. how many people are in the class? ")
if (pyschClassSize<35 && (offDay.toLowerCase() === "wednesday")){
	alert("With what you have provided you seem to be in luck.")}
else {
	alert("Strange, it seemed like you could take it but I guess not.")
};
var premiumMembership = prompt("Would you like to become a premium Member?(It's free!)");
var sale = prompt("SALE! No not like the song by imaginary dragons. This is a sale on imaginary items, if you buy two you get one free. Would you like to buy two?");
var date = prompt("Warnig this sale is only valid in 2023. please enter the current date for no specific reason.");
if (((sale.toLowerCase() === "yes")||(premiumMembership === "yes")) && (date === "2023")){
	alert ("Congrats you get one free! Even if you didn't buy one!")}
else{
	alert("You'll get nothing and like it.")
};
