//  Level: 8 Kyu

//  Convert Boolean Values to Strings 'Yes' or 'No'
//  Date: 7/21
//  Instructions: Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  if(bool == true){
    return "Yes"
  } else {
    return "No"
  }
}

// OR 

function boolToWord( bool ){
  return bool? "Yes" : "No"
}
