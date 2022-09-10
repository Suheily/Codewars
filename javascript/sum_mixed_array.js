// Level: 8 Kyu

// Sum Mixed Array
// Date: 9/10
// Instructions: Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x){
  let counter = 0
  
  for(let i = 0; i < x.length; i++){
    counter += Number(x[i]);
  }
  return counter
}