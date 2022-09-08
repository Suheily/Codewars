// Level: 7 Kyu

// Smallest Value Of An Array
// Date: 9/9
// Instructions: Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.
// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.
// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0

function min(arr, toReturn) {
  let smallestVal = Infinity
  let index = -1
  
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < smallestVal){
      smallestVal = arr[i]
      index = i
    }
  }
  if(toReturn == "index"){
    return index
  } else {
    return smallestVal
  }
}