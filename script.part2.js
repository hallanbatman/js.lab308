// The distance of the trip, in total, is 1,500 miles.
const totalTripDistanceInMiles = 1500

// Your car’s fuel efficiency is as follows:

// At 55 miles per hour, you get 30 miles per gallon.
const milesPerGallonAt55Miles = 30
//ratio = 1 gallon = 30 miles = 55 mph

// At 60 miles per hour, you get 28 miles per gallon.
const milesPerGallonAt60Miles = 28
//ratio = 1 gallon = 28 miles = 60 mph

// At 75 miles per hour, you get 23 miles per gallon.
const milesPerGallonAt75Miles = 23
//ratio = 1 gallon = 23 miles = 75 = mph

// You have a fuel budget of $175.
const fuelDollars = 175

// The average cost of fuel is $3 per gallon.
let avgFuelCostPerGallon = 3

// How many gallons of fuel will you need for the entire trip?
console.log (`How many gallons of fuel will you need for the entire trip?`)

//Best case scenario = 1500 miles / 30 miles = 50 Gallons
let bestEfficiencyGallons = totalTripDistanceInMiles / milesPerGallonAt55Miles
//console.log(bestEfficiencyGallons);
console.log (`Best case scenario will need ${bestEfficiencyGallons} Gallons`)

//Medium scenario = 1500 miles / 28 miles = 53.5 Gallons
let mediumEfficiencyGallons = totalTripDistanceInMiles / milesPerGallonAt60Miles
// console.log(mediumEfficiencyGallons);
console.log (`Medium case scenario will need ${mediumEfficiencyGallons} Gallons`)

//Worst case scenario = 1500 miles / 23 miles = 65.2 Gallons
let worstEfficiencyGallons = totalTripDistanceInMiles / milesPerGallonAt75Miles
// console.log(worstEfficiencyGallons);
console.log (`Worst case scenario will need ${worstEfficiencyGallons} Gallons`)

// Will your budget be enough to cover the fuel expense?
console.log(`Will your budget be enough to cover the fuel expense?`);
console.log(`Most likely no. Only if we maintain an average speed up to 60 miles per hour`);
// Avg cost of fuel = 3 dollars/gallon * efficiency

// Best case scenario
console.log(`At 55 miles per hour, we'll need $${bestEfficiencyGallons*avgFuelCostPerGallon}`);

// Medium case scenario
console.log(`At 60 miles per hour, we'll need $${mediumEfficiencyGallons*avgFuelCostPerGallon}`);

// Worst case scenario
console.log(`At 75 miles per hour, we'll need $${worstEfficiencyGallons*avgFuelCostPerGallon}`);

// How long will the trip take, in hours?
// 1500 miles at 60 miles / hour
// 1 hour = 60 miles
// X hour = 1500 miles
// x hours = 1500 / 60 miles

console.log(`How long will the trip take, in hours?`);
console.log(`at 55 miles/hours ${tripDurationHours = (totalTripDistanceInMiles/55)} hours`);
console.log(`at 60 miles/hours ${tripDurationHours = (totalTripDistanceInMiles/60)} hours`);
console.log(`at 60 miles/hours ${tripDurationHours = (totalTripDistanceInMiles/75)} hours`);

// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
// Log the results of your calculations using string concatenation or template literals.