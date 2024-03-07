let PersonName : string = "hammad sheikh";
console.log(PersonName.toUpperCase());
console.log(PersonName.toLowerCase());
let reg = /\b\w/g;
console.log(PersonName.replace(reg, ch=> ch.toUpperCase()));
console.log(PersonName.replace(/\b\w/g, ch=> ch.toUpperCase()));
