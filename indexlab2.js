
// Control Flow Lab 308.2.1

// Prediction of the plant growth 

const PI = 3.1415;
const radius = 5; // Radius 
const plant = 20;  // Plant at the beginning
const spacePerPlant = 0.8;  // Space Per Plant
const area = PI * radius * radius; // Formula
const max = area / spacePerPlant; //Formula
const result = (plant / max) * 100;

console.log("Garden area:", area, " in square meters");
console.log("Maximum capacity:", max, "Number of plants");

console.log("--------------------------------------------------");
//------------------------------
console.log("Week 1");
//------------------------------
let week1 = 1;
let plantNum1 = plant *(week1 * 2);
let result1 = (plantNum1 / max) * 100;

console.log("--------------------------------------------------");

if (plant < 0 || isNaN(plant)) {
  console.log("Error: Invalid plant count\n");
} else if (result< 0 || result > 100 || isNaN(result)) {
  console.log("Error: Percentage calculation is invalid\n");

}else if (result1 > 80 ) {
    console.log(`Prune: The plant is exceeding the capacity of the garden,${result1}` + "%");
} else if (result1 >= 50 && result <= 80) {
    console.log(`Monitor: The plants are growing at an acceptable rate,${result1} ` + "%");
} else {
    console.log(`Plant: There is room to plant more plants,${result1}` + "%" );
}

console.log("--------------------------------------------------");
//------------------------------
console.log("Week 2");
//------------------------------
let week2= 2;
let plantNum2 = plant *(week2 * 2);
let result2 = (plantNum2 / max) * 100;
console.log("--------------------------------------------------");

if (plant < 0 || isNaN(plant)) {
  console.log("Error: Invalid plant count\n");
} else if (result< 0 || result > 100 || isNaN(result)) {
  console.log("Error: Percentage calculation is invalid\n");
}else if(result2 > 80 ) {
    console.log(`Prune: The plant is exceeding the capacity of the garden,${result2}` + "%");
} else if (result2 >= 50 && result2 <= 80) {
    console.log(`Monitor: The plants are growing at an acceptable rate,${result2}` + "%");
} else {
    console.log(`Plant: There is room to plant more plants,${result2}` + "%");
}

console.log("--------------------------------------------------");
//------------------------------
console.log("Week 3");
//------------------------------
let week3 = 3;
let plantNum3 = plant *(week3 * 2);
let result3= (plantNum3 / max) * 100;
console.log("--------------------------------------------------");

if (plant < 0 || isNaN(plant)) {
  console.log("Error: Invalid plant count\n");
} else if (result< 0 || result > 100 || isNaN(result)) {
  console.log("Error: Percentage calculation is invalid\n");
}else if (result3 > 80 ) {
    console.log(`Prune: The plant is exceeding the capacity of the garden,${result3}` + "%");
} else if (result3 >= 50 && result <= 80) {
    console.log(`Monitor: The plants are growing at an acceptable rate,${result3}` + "%");
} else {
    console.log(`Plant: There is room to plant more plants,${result3}` + "%");
}
console.log("--------------------------------------------------");
let newPlant = 100;
let week10 = 10;
let plantNum10 = newPlant *(week10 * 2);
let newSpace = newPlant * 0.8;
let newRadius = newSpace / PI; 

console.log(`The new plant number is ${plantNum10}`);
console.log("--------------------------------------------------");
//-----------------------------------------

console.log(`The new space will be if the scientists were to start with 100 plants and didn't 
prune them for 10 weeks is ${newSpace} square meters.`);
//-----------------------------------------
console.log("--------------------------------------------------");

console.log(`The new radius would be if the space is expanded ${newRadius} meters`);
//-----------------------------------------
console.log("--------------------------------------------------");
