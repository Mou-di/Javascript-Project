
// Data Manipulation with JavaScript ; Lab 308.1.1

const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

//Add number up to 50

const isSum50 = (n1 + n2 + n3 + n4) == 50;

//Check number is divisible by 5

const isDiv5 = (n1 % 5) || (n2 % 5) || (n3 % 5) ||(n4 % 5);

console.log(`All numbers are divisible by 5 according to the provided criteria" :${isDiv5}.`);

//Check the the first number is larger than the last one
const isLarg = (n1 > 5 );

console.log(`The n1 is larger than the n5 according to the provided criteria" :${isLarg}.`)

// The arithmetic operation

const isSub = (n1 - n2);

console.log(isSub);

const isMult =(isSub * n3);

console.log (`The sum of the n1 and n2 multiply by n3 :${isMult}`);

const remai = (isMult % n4);

console.log  (`The remaining is :${remai}`);

// Number larger than 25

const isOver = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

console.log (`The comparison is :${isOver}`);


// Pratical Math

const dist = 1500;
const costPerGallon = 3;
const bud = 175;

const galOfFuel = 175 / 3;

const fuelExp = 1500 / 3;

const tripHrs = 1500 / 58;


console.log("Gallon of Fuel:", galOfFuel);

console.log("Fuel Expense:", fuelExp);

console.log("Trip in hours:", tripHrs);   

let avg = (50 + 60 + 75) / 3;

console.log("Average:", avg);

const names = "galOfFuel"; + "fuelExp"; + "tripHrs"; + "avg" ;
const res = `The Result of the calcutions are, ${names}!`; 
console.log("names");