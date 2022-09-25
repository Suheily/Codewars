// Level: 8 Kyu

// Traffic Light
// Date: 9/25
// Instructions: You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// For example, when the input is green, output should be yellow.

function updateLight(current) {
 let lights = ["green", "yellow", "red"]
 
 for(let i = 0; i < lights.length; i++){
   if(current == lights[i]){
     return lights[i + 1]
   } else if(current == "red"){
     return lights[0]
   }
 }
}

// In one line

function updateLight(current) {
  
  return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

}