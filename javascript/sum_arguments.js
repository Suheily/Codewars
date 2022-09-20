// Level: 7 Kyu

// Sum Of All Arguments
// Date: 9/20
// Instructions: Write a function that finds the sum of all its arguments.
// Examples:
// sum(1, 2, 3) // => 6
// sum(8, 2) // => 10
// sum(1, 2, 3, 4, 5) // => 15

function sum() {
  let sum = 0;
  
  for(let i = 0; i < arguments.length; i++){
    sum += arguments[i]
  }
  return sum
}