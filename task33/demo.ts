// Array of a numbers 1-9
const num : Number[] = [1,2,3,4,5,6,7,8,9];

//loop through the array
num.forEach(num2 => {
    if (num2==1) {
        console.log(`${num2}st`);
    }
    else if (num2==2) {
        console.log(`${num2}nd`);
    }
    else if (num2==3) {
        console.log(`${num2}rd`);
    }
    else{
        console.log(`${num2}th`);
    }
});