// Define a function 
function show_magicians(magicians: string[]): void {
    magicians.forEach(name => console.log(name));
}

// Function to make magicians great
function make_great(magicians: string[]): string[] {
    return magicians.map(name => `the Great ${name}`);
}

//Define an array
let magician_names: string[] = ["John", "Tonnny", "Claire", "Micheal"];
