// defines a type alias for an object
type item1 = {
    bookname    : string;
    colour      : string;
    price       : number;
    PublishYear : number; 
}

let BookName: item1 = {
    bookname       : "TypescriptBook",
    colour         : "blue",
    price          : 250.99,
    PublishYear    : 2001

};
console.log(BookName);
