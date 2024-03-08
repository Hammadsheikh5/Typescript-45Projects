var guestList = ["Hamza", "Usman", "Ali", "Saad"];
guestList.forEach(function (guest) {
    console.log("Assalam-u-Alaikum My Dear ".concat(guest, ", I would like to invite you to dinner with me"));
});
var MissingFriend = guestList[1];
console.log(MissingFriend, "can't make it to dinner.");
console.log("Your New Friend is Umer");
guestList.splice(1, 1, "Umer");
guestList.forEach(function (guest) {
    console.log("Assalam-u-Alaikum My Dear ".concat(guest, ", I would like to invite you to dinner with me"));
});
console.log("\nGood news! We found a bigger dinner table!\n");
// Add one new guest to the middle of the array
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Shahbaz");
// Add one new guest to the beginning of the array
guestList.unshift("Osama");
// Add one new guest to the end of the array
guestList.push("Moiz");
//Updated list of the Guests
console.log("Updated List:\n");
guestList.forEach(function (guest) {
    console.log("Assalam-u-Alaikum Dear ".concat(guest, ", I would like to invite you to dinner with me"));
});
