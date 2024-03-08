// Exercise 14 Guest list
let guestList: string[] = ["Hamza", "Usman", "Ali", "Saad"];

guestList.forEach(guest =>{
    console.log(`Assalam-u-Alaikum My Dear ${guest}, I would like to invite you to dinner with me`)});

// Inform about the number of ~ invited to dinner
let guestlength : number = guestList.length
console.log(`\nI am inviting ${guestlength} people to dinner.`);
