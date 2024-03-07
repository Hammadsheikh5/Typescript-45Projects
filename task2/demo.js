var PersonName = "hammad sheikh";
console.log(PersonName.toUpperCase());
console.log(PersonName.toLowerCase());
var reg = /\b\w/g;
console.log(PersonName.replace(reg, function (ch) { return ch.toUpperCase(); }));
console.log(PersonName.replace(/\b\w/g, function (ch) { return ch.toUpperCase(); }));
