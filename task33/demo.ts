// Array of a numbers 1-9
const num : Number[] = [1,2,3,4,5,6,7,8,9];

//for loop through the array
for(let num2 of num){
    let ordinalending :string ;
    if (num2==1) {
        ordinalending = "st"
    }
    else if (num2==2) {
        ordinalending = "nd"
    }
    else if (num2==3) {
        ordinalending = "rd"
    }
    else{
       ordinalending = "th"
    }
    console.log(`${num2}${ordinalending}`);      
};