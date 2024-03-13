//making function of two parameters
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    //message by heading case
    console.log("".concat(city.replace(/\b\w/g, function (ch) { return ch.toUpperCase(); }), " is in ").concat(country));
}
//call the function by three different cities
describe_city("karachi");
describe_city("lahore");
describe_city("ankara", "Turkiye");
