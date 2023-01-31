"use strict";
function showMultiplicationTable(x) {
    for (var i = 1; i <= 10; i++) {

    console.log(x * i);
    }
}
for(var i=1;i<=10;i++){
    let reseti = Math.floor(Math.random() * (201 - 20) + 20);
    if (reseti%2===0) {
        console.log(reseti+" is even")
    } else{
        console.log(reseti+" is odd")
    }
}
for(var i= 1;i<10;i++){
        console.log(i.toString().repeat(i))
}
for (var i=100;i>=0;i--){
    console.log(i)
}