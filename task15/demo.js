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
