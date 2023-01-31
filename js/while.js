"use strict";
var doubleIt = 2;
while(doubleIt<=65536){
    console.log(doubleIt);
    doubleIt=doubleIt*2;
}
var allCones = Math.floor(Math.random() * (50) + 50);
console.log(allCones);
do {
    var conesBought = Math.floor(Math.random() * 5)+1;
    if(allCones>=conesBought) {
        console.log(allCones -= conesBought);
    } else{
        console.log(conesBought+" exceeds your current inventory of "+allCones+ " so you can't sell to them.")
    }
}while(allCones >0);
if(allCones==0){
    console.log("All sold out time to go home.")
}