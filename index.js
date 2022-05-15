// Level: 6 Kyu

// Find the Parity Outlier
// Date: 5/16
// Instructions: You are given an array (which will have a length of at least 3, 
// but could be very large) containing integers. The array is either entirely 
// comprised of odd integers or entirely comprised of even integers except for a 
// single integer N. Write a method that takes the array as an argument and returns 
// this "outlier" N.

function findOutlier(integers){
  let odd = []
  let even = []
  for(let i = 0; i < integers.length; i++){
    if(integers[i] %2){
      even.push(integers[i])
    } else {
      odd.push(integers[i])
    }  
  }
  if(even.length === 1){
    return even[0]
  } else {
    return odd[0]
  }
}
