"use strict";
var userNum = undefined;
if (userNum===undefined) {
    for (i = 0; i >= 0; i++) {
        var userNum = prompt("Please type an odd number between 1 and 50")
        if (userNum !== undefined && isNaN(userNum) === false && (userNum <= 50 && userNum >= 0 && userNum % 2 != 0)) {
            break;
        } else {
            continue;
        }
    }
    if (userNum !== undefined) {
        for (i = 0; i <= 50; i++) {
            if (i == userNum){
                console.log("Yikes! skipping number: " + i)
                continue;
            }else if (i % 2 != 0) {
                console.log("Here is an odd number: " + i)
                continue;
            }

        }
    }
}

