// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
//console.log(`Check one: add up to 50? ${isSum50}`);

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
//console.log(`Check two: at least two odd numbers? ${isTwoOdd}`);

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isUnder25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
//console.log(`Check three: any number larger than 25? ${isOver25}`);

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
//console.log(`Check four: all unique numbers? ${isUnique}`);

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;

// Finally, log the results.
console.log (`The four numbers are valid according to the provided criteria: ${isValid}.`);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

//Check if all numbers are divisible by 5. Cache the result in a variable.
const isDivby5 =(n1%5)+(n2%5)+(n3%5)+(n4%5) == 0;
console.log(`Are all numbers divisible by 5? ${isDivby5}`);

//Check if the first number is larger than the last. Cache the result in a variable.
const isFirstLargerThanLast = n1 > n4;
console.log(`Is the First number Larger Than the Last? ${isFirstLargerThanLast}`);

//Accomplish the following arithmetic chain:
//Subtract the first number from the second number.
console.log(`Subtract the first number from the second number: ${n2-n1}`);

//Multiply the result by the third number
console.log(`Multiply the result by the third number: ${(n2-n1)*n3}`);

//Find the remainder of dividing the result by the fourth number
console.log(`Find the remainder of dividing the result by the fourth number: ${((n2-n1)*n3)%n4}`);

//Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons.
//Rename the variable as appropriate > isUnder25