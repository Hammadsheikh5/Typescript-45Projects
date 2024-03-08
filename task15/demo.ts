let guestList: string[] = ["Hamza", "Usman", "Ali", "Saad"];
guestList.forEach(guest =>{
    console.log(`Assalam-u-Alaikum My Dear ${guest}, I would like to invite you to dinner with me`)});
    
let MissingFriend = guestList[1];
console.log(MissingFriend, "can't make it to dinner.");
console.log("Your New Friend is Umer");

guestList.splice(1, 1, "Umer");
guestList.forEach(guest =>{
    console.log(`Assalam-u-Alaikum My Dear ${guest}, I would like to invite you to dinner with me`)});
   