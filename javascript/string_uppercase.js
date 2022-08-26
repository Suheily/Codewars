// Level: 8 Kyu

// Is The String Uppercase?
// Date: 8/26
// Instructions: Create a method to see whether the string is ALL CAPS.
// Examples:
// (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter
// so any string containing no letters at all is trivially considered to be in ALL CAPS.

String.prototype.isUpperCase = function() {
  if(this == this.toUpperCase()){
    return true
  } else {
    return false
  }
}