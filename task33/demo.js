// Array of a numbers 1-9
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//for loop through the array
for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
    var num2 = num_1[_i];
    var ordinalending = void 0;
    if (num2 == 1) {
        ordinalending = "st";
    }
    else if (num2 == 2) {
        ordinalending = "nd";
    }
    else if (num2 == 3) {
        ordinalending = "rd";
    }
    else {
        ordinalending = "th";
    }
    console.log("".concat(num2).concat(ordinalending));
}
;
