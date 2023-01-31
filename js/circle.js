(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,
        getArea: function () {
            var area = Math.PI*Math.pow(circle.radius,2)
            return area;
        },
        logInfo: function (doRounding) {
            if (doRounding===true) {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(circle.getArea()));
            } else if(doRounding===false) {
                console.log("Area of a circle with radius: " + this.radius + ", is: "+circle.getArea());
            }
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    circle.radius+=2
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();