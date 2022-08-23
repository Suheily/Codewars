// Level: 6 Kyu

// Count Characters In Your String
// Date: 8/23
// Instructions: The main idea is to count all the occurring characters in a string. 
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

function count (string) {  
  let output = {};
  
  for(let i = 0; i < string.length; i ++) {
    if(output.hasOwnProperty(string[i])){
      output[string[i]] += 1;
    } else {
      output[string[i]] = 1;
    }
  }
   return output;
}