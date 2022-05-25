//  Level: 6 Kyu

//  Unpack Delicious Sausages!
//  Date: 5/25
//  Instructions: A food delivery truck carrying boxes of delicious sausages has arrived 
//  and it's your job to unpack them and put them in the store's display counter. 
//  The truck is filled with boxes of goods. Among the goods, there are various types of 
//  sausages. Straight sausages I, curvy sausages ), even twirly sausages @ and many more. 
//  The safest way to tell any type of sausage apart from other goods is by the packaging [],
//  used exclusively by sausages. Make sure to ignore other goods, those will be taken care of 
//  by someone else. Once you have unpacked all the sausages, just lay them out in the display 
//  counter (string) in the same order in which they came in boxes with one space " " in-between
//  every sausage. Oh, and watch out for spoiled or damaged sausage packs, did I tell you about 
//  those? The sausages are always packed in fours and each pack contains only one sausage type, 
//  so whenever there is any irregularity, the sausages are probably spoiled or damaged and the 
//  whole pack should be thrown out!
//  Now we're getting to the best part - your reward! Instead of money, you'll be paid in something
//  far better - sausages! Every fifth undamaged processed pack of sausages doesn't go to the counter,
//  instead it's yours to keep. Don't go spending it all at once!
//  If the truck arrives completely empty, only with empty boxes or only with goods that are not sausages,
//  the display counter will simply stay empty "". Unlike truck and boxes that may be empty, every existing
//  product is a non-empty string.
//  Example:
//  Input (truck with 5 boxes containing 11 products):
//  [("(-)", "[IIII]", "[))))]"), ("IuI", "[llll]"), ("[@@@@]", "UwU", "[IlII]"), ("IuI", "[))))]", "x"), ()]
//  "Truck is a list, boxes are tuples, packages of goods are strings"
//  Output (four sets of sausages):
//  "I I I I ) ) ) ) l l l l @ @ @ @"
//  Explanation:
//  The last box is empty and is therefore ignored
//  Packages with products that are not sausages are ignored - "(-)", "IuI", "UwU", "IuI", "x"
//  One damaged package gets thrown out - "[IlII]"
//  Fifth undamaged package is used as your reward and is therefore excluded from the output: "[))))]"
//  More examples of input and expected output can be seen in the example test cases

function unpackSausages(truck) {
  let displayCounter = ""
  let package = []
  let sausagePackageCounter = 0
  
  function checkIfSpoiled(sausages){
    for(let sausage = 1; sausage < sausages.length; sausage++){
      if(sausages[sausage] !== sausages[0]){
        return false
      }
    } 
    return true    
  }
  
  for(i in truck){
    for(j in truck[i]){
      if(truck[i][j].startsWith("[")){ 
        let package = truck[i][j].split("")
        package.shift()
        package.pop()

        if(package.length === 4){ 
          if(!checkIfSpoiled(package))
            continue
          sausagePackageCounter++
          if(sausagePackageCounter === 5){
            sausagePackageCounter = 0
          } else {
            for(let k = 0; k < package.length; k++){
              displayCounter += package[k] + " "          
            }    
          }
        }        
      }
    }
  }  
  return displayCounter.slice(0, -1)
}


//  Level: 5 Kyu

//  Extract The Domain Name From A URL
//  Date: 5/24
//  Instructions:Write a function that when given a URL as a string, parses out just the domain name 
//  and returns it as a string. For example:
//  * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
//  * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
//  * url = "https://www.cnet.com"                -> domain name = "cnet"

function domainName(url){
  let domain = url.replace("https://","").replace("http://","").replace("www.","")
  
  return domain.split(".")[0]
}


//  Level: 4 Kyu

//  Split Comments
//  Date: 5/23
//  Instructions: Complete the solution so that it strips all text that follows any of a set
//  of comment markers passed in. Any whitespace at the end of the line should also be stripped
//  out.
//  Example:
//  Given an input string of:
//  apples, pears # and bananas
//  grapes
//  bananas !apples
//  The output expected would be:
//  apples, pears
//  grapes
//  bananas
//  The code would be called like so:
//  var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
//  result should == "apples, pears\ngrapes\nbananas"

function solution(input, markers) {
  let result = input.split("\n")
  
  for (let i = 0; i < result.length; i++)
    for (let j = 0; j < markers.length; j++)
      result[i] = result[i].split(markers[j])[0].trim()
  return result.join("\n") 
}


//  Level: 6 Kyu

//  Two Sum
//  Date: 5/22
//  Instructions: Write a function that takes an array of numbers (integers for the tests) and a target number.
//  It should find two different items in the array that, when added together, give the target value. The indices 
//  of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
//  For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
//  The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be 
//  numbers; target will always be the sum of two different items from that array).
//  Based on: http://oj.leetcode.com/problems/two-sum/
//  twoSum [1, 2, 3] 4 === (0, 2)

function twoSum(numbers, target) {
  let hashmap = {}
  
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] in hashmap){
      return [i, hashmap[numbers[i]]] 
    } else {
      hashmap [target - numbers[i]] = i
    }
  }
}


// Level: 5 Kyu

// RGB To Hex Conversion
// Date: 5/21
// Instructions: The rgb function is incomplete. Complete it so that passing in RGB decimal values will result
// in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that 
// fall out of that range must be rounded to the closest valid value.
// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
// The following are examples of expected output values:
// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

function rgb(r, g, b){
   function hexConvert(value){
     if(value < 0){
       return "00"
     } else if (value > 255){
       return "FF"
     } else {
       return ("0"+(Number(value).toString(16))).slice(-2).toUpperCase()
     }
  }
  return hexConvert(r) + hexConvert(g) + hexConvert(b)
}


// Level: 6 Kyu

// Your Order, Please
// Date: 5/20
// Instructions: Your task is to sort a given string. Each word in the string will contain a single number.
// This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid 
// consecutive numbers.
// Examples:
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words){
  words = words.split(" ")
  let newWords = []
  
  for(let i = 0; i <= words.length; i++){
    for(let j = 0; j < words.length; j++){
      if(words[j].indexOf(i) >= 0){
         newWords.push(words[j])
      }
    }
  }
  return newWords.join(" ")
}


// Level: 7 Kyu

// Binary Addition
// Date: 5/19
// Instructions: Implement a function that adds two numbers together and returns their sum in binary.
// The conversion can be done before, or after the addition. The binary number returned should be a string.
// Examples:(Input1, Input2 --> Output (explanation)))
// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a,b) {
  let sum = a + b
  
  return sum.toString(2)
}


// Level: 6 Kyu

// Does My Number Look Big in This?
// Date: 5/18
// Instructions: A Narcissistic Number is a positive number which is the sum of its own digits, 
// each raised to the power of the number of digits in a given base. In this Kata, we will restrict 
// ourselves to decimal (base 10).
// For example, take 153 (3 digits), which is narcisstic:
//  1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:
//  1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:
// Your code must return true or false (not 'true' and 'false') depending upon whether the given number
// is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.
// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero 
// integers will be passed into the function.

function narcissistic(value) {
  let narcissus = value.toString().split("")
  let pond = []
  
  for(let i = 0; i < narcissus.length; i++){
    if(narcissus[i] === "1"){
      pond.push(parseInt(narcissus[i]))
    } else {
    pond.push(parseInt(narcissus[i] ** narcissus.length))
    }
  }
  
  let echo = pond.reduce((a,b) => a + b, 0)
  
  if( echo === value){
      return true
    } else {
      return false
    }
}


// Level: 6 Kyu

// Write Number in Expanded Form
// Date: 5/17
// Instructions: Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  let expanded = num.toString().split("")

  for(let i = 0; i < expanded.length; i++){
    for(let j = expanded.length - i; j > 1; j--){
      expanded[i] += "0"
    }
  }
  expanded = expanded.filter(value => !value.startsWith(0))
  return expanded.join(" + ")
}


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
