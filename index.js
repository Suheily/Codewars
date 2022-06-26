//  Level: 7 Kyu

//  Truthy and Falsy
//  Date: 6/26
//  Instructions: In JavaScript there are truthy and falsy values. You are given two empty arrays (truthy and falsy) and you have to 
//  fill this array with at least 5 elements in each which will evaluate to true or false accordingly.
//  truthy: a value that when evaluated in a boolean context returns true
//  falsy: a value that when evaluated in a boolean context returns false
//  MDN links:
//  https://developer.mozilla.org/en/docs/Glossary/Truthy
//  https://developer.mozilla.org/en-US/docs/Glossary/Falsy

const truthy = [1,2,3,4,5]
const falsy = [0,"", NaN, false, null]


//  Level: 7 Kyu

//  COnsecutive Items
//  Date: 6/24
//  Instructions: You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a
//  and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise). It is guaranteed 
//  that a and b are both present in arr.

function consecutive(arr, a, b) {
  for(let i = 0; i < arr.length; i++){
    if((arr[i] == a) && (arr[i + 1] == b) || (arr[i] == b) && (arr[i + 1] == a)){
       return true
       }
  }
  return false
}


//  Level: 8 Kyu

//  Regular Ball Super Ball
//  Date: 6/23
//  Instructions: Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.
//  If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
//  ball1 = new Ball();
//  ball2 = new Ball("super");
//  ball1.ballType     //=> "regular"
//  ball2.ballType     //=> "super"

class Ball {
  constructor(ballType = "regular") {
    this.ballType = ballType
  }
}


//  Level: 6 Kyu

//  What's Your Running Pace?
//  Date: 6/22
//  Instructions: In this Kata, we will calculate running pace. To do that, we have to know the distance and the time. Create the
//  following function: runningPace(distance, time) where distance is a float with the number of kilometres and time is a string 
//  containing the time it took to travel the distance. It will always be minutes:seconds. For example "25:00" means 25 minutes. 
//  You don't have to deal with hours. The function should return the pace, for example "4:20" means it took 4 minutes and 20 
//  seconds to travel one kilometre. Note: The pace should always return only the number of minutes and seconds. You don't have to 
//  convert these into hours. Floor the number of seconds.

function runningPace(distance, time){
  time = time.split(":")
  
  let velocity = distance / (parseInt(time[0]) * 60 + parseInt(time[1]))
  let newTime = 1 / velocity
  let seconds = Math.floor(newTime % 60)
  let minutes =Math.floor(newTime/60)
  let pace = minutes + ":" + (seconds  < 10 ? "0" + seconds : seconds)
  return pace
}


//  Level: 6 Kyu

//  Condensentences
//  Date: 6/21
//  Instructions: In this kata, you must condense a given string. Condensing a string means removing all spaces, and then also removing 
//  any extra characters while making sure that all words of the original string are still contained in the same order. This is possible
//  because words can overlap in the compressed string, allowing it to be much shorter. 
//  Consider the following examples:
//  condense("fat tat attack")
//  + fat
//  +   tat
//  +    attack
//  = fatattack 
//  condense("pugs so cool")
//  + pugs
//  +    so
//  +      cool
//  = pugsocool
//  condense("ladder adders")
//  + ladder
//  +  adders
//  = ladders
//  The function must work with numbers, words that can't be condensed and empty strings as well. The credit for this algorithm goes to a youtuber 
//  by the name of The Daily Programmer.

const condense = (str) =>{
  str = str.split(" ")
  
  for (let i = 0; i < str.length - 1; i++){
    for (let j = 0; j < str[i].length; j++){  
      if (str[i + 1].startsWith(str[i].slice(j))){
        str[i] = str[i].substring(0,j)  
      }
    }
  }
  return str.join("")
}


//  Level: 7 Kyu

//  Filtering Lists
//  Date: 6/20
//  Instructions: In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list 
//  with the strings filtered out.
//  Examples:
//  filter_list([1,2,'a','b']) == [1,2]
//  filter_list([1,'a','b',0,15]) == [1,0,15]
//  filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
  return l.filter(function(i) {return typeof i != "string"})
}


//  Level: 8 Kyu

//  Convert a Number to a String!
//  Date: 6/18
//  Instructions: We need a function that can transform a number into a string.
//  What ways of achieving this do you know?
//  Examples:
//  123 --> "123"
//  999 --> "999"

function numberToString(num) {
  return num.toString()
}


//  Level: 7 Kyu

//  Creating a Bitset, Part 1
//  Date: 6/16
//  Instructions: A byte is a sequence of 8 bits. One could imagine implementing a small set data structure using a single byte.
//  The set would hold at most the elements 0 through 7. The value of each bit in the byte would indicate whether the index of that
//  bit was included in the set. Consider the following byte, where the index of each bit is marked below.
//  Byte: 0 1 1 0 0 1 0 1
//  Index: 0 1 2 3 4 5 6 7
//  This byte would represent the set {1, 2, 5, 7}. Similarly,
//  10101010 ==> {0, 2, 4, 6}
//  11100000 ==> {0, 1, 2}
//  Your task is to write a function byte_to_set which takes a single byte (an integer 0-255), and returns the corresponding set.
//  >> byte_to_set(0)
//  set()
//  >> byte_to_set(255)
//  {0,1,2,3,4,5,6,7}
//  >> byte_to_set(3)
//  {6,7}

function byteToSet (byte) {
  let bin = byte.toString(2).padStart(8, "0")
  let result = new Set()
  
  for(let i = 0; i < 8; i++){
    if(bin[i] == "1"){
      result.add(i)
    }
  }
  return result
}


//  Level: 8 Kyu

//  Find Maximum and Minimum Values of a List
//  Date: 6/14
//  Instructions: Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the 
//  language) that receive a list of integers as input and return, respectively, the largest and lowest number in 
//  that list.
//  Examples (Input -> Output)
//  * [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
//  * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
//  * [42, 54, 65, 87, 0]             -> min = 0, max = 87
//  * [5]                             -> min = 5, max = 5
//  Note: You may consider that there will not be any empty arrays/vectors.

var min = function(list){  
    return Math.min(...list)
}

var max = function(list){  
    return Math.max(...list)
}


//  Level: 5 Kyu

//  Tic-Tac-Toe Checker
//  Date: 6/12
//  Instructions: If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state
//  is solved, wouldn't we? Our goal is to create a function that will check that for us! Assume that the board 
//  comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is
//  an "O", like so:
//  [[0, 0, 1],
//   [0, 1, 2],
//   [2, 1, 0]]
//  We want our function to return:
//  -1 if the board is not yet finished AND no one has won yet (there are empty spots),
//  1 if "X" won,
//  2 if "O" won,
//  0 if it's a cat's game (i.e. a draw).
//  You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

function isSolved(board) {
  
  function checkRow() {
  let result
  
  board.forEach(function(choice){
    if (choice[0] == choice[1] &&
        choice[0] == choice[2] &&
        choice[1] == choice[2] &&
        choice[0] != 0){
      result = choice[0]
    }
  })
    return result
  }
  
  function checkCol() {
    for (let i = 0; i < 3; i++){
      if (board[0][i]==board[1][i]&&
          board[1][i]==board[2][i]&&
          board[2][i]==board[0][i]&&
          board[0][i]!=0){
        return board[0][i]
      }  
    }
  }
  
  function checkDiagonal(){
    if ((board[0][0]==board[1][1]&&
         board[1][1]==board[2][2]&&
         board[2][2]==board[0][0])||
        (board[0][2]==board[1][1]&&
         board[1][1]==board[2][0]&&
         board[2][0]==board[0][2])){
      return board[1][1]
      }
  }  
 
  function gameOver() {
    for (let x = 0; x < 3; x++){
      for (let y = 0; y < 3; y++){
        if  (board[x][y] == 0){
          return -1
        }
      }
    }
  return 0
  }
  
  return checkRow() || checkCol() || checkDiagonal() || gameOver()
}


//   Level: 8 Kyu

//   How Many Stairs Will Suzuki Climb in 20 Years?
//   Date: 6/11
//   Instructions: Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some
//   days he climbs more stairs than others depending on the number of students he must train in the morning.
//   He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down 
//   his daily progress. The sum of all the stairs logged in a year will be used for estimating the number he
//   might climb in 20.
//   20_year_estimate = one_year_total * 20
//   You will receive the following data structure representing the stairs Suzuki logged in a year. You will 
//   have all data for the entire year so regardless of how it is logged the problem should be simple to solve.
//   stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]
//   Make sure your solution takes into account all of the nesting within the stairs array.
//   Each weekday in the stairs array is an array.
//   sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 
//   9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097,
//   6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]
//   Your function should return the 20 year estimate of the stairs climbed using the formula above.

function stairsIn20(s){
  let estimate = 0
  
  for(let i = 0; i < s.length; i++){
    for(let j = 0; j < s[i].length; j++){
      estimate += s[i][j]
    }
  }
  return estimate * 20
}


//  Level: 8 Kyu

//  Welcome to the City
//  Date: 6/10
//  Instructions: Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state
//  to welcome a person. Note that name will be an array consisting of one or more values that should be 
//  joined together with one space between each, and the length of the name array in test cases will vary.
//  Example:
//  sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
//  This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

function sayHello( name, city, state ) {
    return "Hello, " + name.join(" ") + "! Welcome to " + city + ", " + state + "!"
}


//  Level: 5 Kyu

//  A Chain Adding Function
//  Date: 6/9
//  Instructions: We want to create a function that will add numbers together when called in succession.
//  add(1)(2); // == 3
//  We also want to be able to continue to add numbers to our chain.
//  add(1)(2)(3); // == 6
//  add(1)(2)(3)(4); //  == 10
//  add(1)(2)(3)(4)(5); // == 15
//  and so on.
//  A single call should be equal to the number passed in.
//  add(1); // == 1
//  We should be able to store the returned values and reuse them.
//  var addTwo = add(2);
//  addTwo; // == 2
//  addTwo + 5; // == 7
//  addTwo(3); // == 5
//  addTwo(3)(5); // == 10
//  We can assume any number being passed in will be valid whole number.

function add(n){
  var fn = function(i) {
    
  return add(n + i)
  }
  fn.valueOf = function() {
    return n
  }
  return fn
}


//  Level: 8 Kyu

//  To Square(Root) Or Not To Square(Root)
//  Date: 6/8
//  Instructions: Write a method, that will get an integer array as parameter and will process every number 
//  from this array. Return a new array with processing every number of the input-array like this:
//  If the number has an integer square root, take this, otherwise square the number.
//  Example
//  [4,3,9,7,2,1] -> [2,9,3,49,4,1]
//  Notes: The input array will always contain only positive numbers, and will never be empty or null.

function squareOrSquareRoot(array) {
  let newArray = []
  
  for(let i = 0; i < array.length; i++){
    if(Number.isInteger(Math.sqrt(array[i]))){
      newArray.push(Math.sqrt(array[i]))
    } else {
      newArray.push(array[i]**2)
    }
  }
  return newArray 
}


//  Level: 5 Kyu

//  Calculating with Functions
//  Date: 6/7
//  Instructions: This time we want to write calculations using functions and get the results. Let's have a 
//  look at some examples:
//  seven(times(five())); // must return 35
//  four(plus(nine())); // must return 13
//  eight(minus(three())); // must return 5
//  six(dividedBy(two())); // must return 3
//  Requirements:
//  There must be a function for each number from 0 ("zero") to 9 ("nine")
//  There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
//  Each calculation consist of exactly one operation and two numbers
//  The most outer function represents the left operand, the most inner function represents the right operand
//  Division should be integer division. For example, this should return 2, not 2.666666...:
//  eight(dividedBy(three()));

function zero(n) {return n? n(0):0 }
function one(n) {return n? n(1):1}
function two(n) {return n? n(2):2}
function three(n) {return n? n(3):3}
function four(n) {return n? n(4):4}
function five(n) {return n? n(5):5}
function six(n) {return n? n(6):6}
function seven(n) {return n? n(7):7}
function eight(n) {return n? n(8):8}
function nine(n) {return n? n(9):9}

function plus(b) { return function(a) {return a + b}}
function minus(b) {return function(a) {return a - b}}
function times(b) {return function(a) {return a * b}}
function dividedBy(b) {return function(a) {return Math.floor(a / b)}}


//  Level: 6 Kyu

//  Sum of Digits / Digital Root
//  Date: 6/6
//  Instructions: Digital root is the recursive sum of all the digits in a number. Given n, take the sum of 
//  the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit
//  number is produced. The input will be a non-negative integer.
//  Examples
//  16  -->  1 + 6 = 7
//  942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
//  132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
//  493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  --> 1 + 1 = 2

function digital_root(n) {
  let root = 0
  
  if(n < 10){
    return n 
  } else {
    n = n.toString()
    for(let i = 0; i < n.length; i++){
    root += parseInt(n[i])
  }
    return digital_root(root)
  }
}


//  Level: 7 Kyu

//  Find The Divisors!
//  Date: 6/4
//  Instructions: Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all 
//  of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime 
//  return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
//  Example:
//  divisors(12); #should return [2,3,4,6]
//  divisors(25); #should return [5]
//  divisors(13); #should return "13 is prime"

function divisors(integer) {
  let divisors = []
  let i = 1
  
  while(++i < integer){
    (integer % i !== 0) || divisors.push(i)
  }
  return divisors.length <= 1? (integer + " is prime") : divisors
}


//  Level: 7 Kyu

//  Money, Money, Money
//  Date: 6/3
//  Instructions: Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how 
//  many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.
//  The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year
//  the new sum is re-invested. Note to Tax: not the invested principal is taxed, but only the year's accrued interest
//  Example:
//  Let P be the Principal = 1000.00      
//  Let I be the Interest Rate = 0.05      
//  Let T be the Tax Rate = 0.18      
//  Let D be the Desired Sum = 1100.00
//  After 1st Year -->  P = 1041.00
//  After 2nd Year -->  P = 1083.86
//  After 3rd Year --> P = 1128.30
//  Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum. Your task is to complete
//  the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.
//  Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take
//  into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  while (principal < desired) {
    principal = (principal + (principal * interest)) - ((principal * interest) * tax);
    years++;
  }
  return years; 
}


//  Level: 4 Kyu

//  The Observed Pin
//  Date: 6/2
//  Instructions: Alright, detective, one of our colleagues successfully observed our target person, Robby the
//  robber. We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to this
//  warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw, 
//  when Robby entered it. The keypad has the following layout:
//  ┌───┬───┬───┐
//  │ 1 │ 2 │ 3 │
//  ├───┼───┼───┤
//  │ 4 │ 5 │ 6 │
//  ├───┼───┼───┤
//  │ 7 │ 8 │ 9 │
//  └───┼───┼───┘
//      │ 0 │
//      └───┘
//  He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another 
//  adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or
//  4. And instead of the 5 it could also be the 2, 4, 6 or 8. He also mentioned, he knows this kind of locks. You can 
//  enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. That's why we can try 
//  out all possible (*) variations. 
//  * possible in sense of: the observed PIN itself and all variations considering the adjacent digits
//  Can you help us to find all those variations? It would be nice to have a function, that returns an array (or a list in
//  Java/Kotlin and C#) of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function 
//  getPINs (get_pins in python, GetPINs in C#). But please note that all PINs, the observed one and also the results, must 
//  be strings, because of potentially leading '0's. We already prepared some test cases for you. Detective, we are counting
//  on you!

function getPINs(observed) {
  let neighbors = {
        "1":["1","2","4"], 
        "2":["2","3","5","1"], 
        "3":["3","2","6"], 
        "4":["4","1","5","7"], 
        "5":["5","2","6","8","4"],
        "6":["6","3","5","9"],
        "7":["7","4","8"],
        "8":["8","5","9","0","7"],
        "9":["9","6","8"],
        "0":["0","8"]
        }
  
  function neighborsCombos(i,j){
    var pins = []
    
    i.forEach(function(a,b) {
      j.forEach(function(c,d) {
        pins.push(a + c)
      })
    })
    return pins
  }
  return observed.length == 1 ? neighbors[observed[0]] : neighborsCombos(neighbors[observed[0]], getPINs(observed.slice(1)));
}


//  Level: 6 Kyu

//  Delete Occurrences Of An Element If It Occurs More Than N Times
//  Date: 6/1
//  Instructions: Enough is enough! Alice and Bob were on a holiday. Both of them took many pictures of the places
//  they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these 
//  sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times. He tells them 
//  that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are 
//  able to encode the motif as a number. Can you help them to remove numbers such that their list contains each 
//  number only up to N times, without changing the order?
//  Task: Given a list and a number, create a new list that contains each number of list at most N times, without 
//  reordering. For example, if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], 
//  drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to 
//  [1,2,3,1,2,3]. With list [20,37,20,21] and number 1, the result would be [20,37,21].

function deleteNth(arr,n){
  let list = []
  let hashmap = {}
  
  for(let i = 0; i < arr.length; i++){
    let motif = arr[i]
    let count = hashmap[motif] = ((hashmap[motif]) || 0) + 1
    
    if (count <= n){
      list.push(motif)
    }
  }
  return list
}


//  Level: 6 Kyu

//  Stop gninnipS My sdroW!
//  Date: 5/31
//  Instructions: Write a function that takes in a string of one or more words, and returns the same string, but
//  with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist 
//  of only letters and spaces. Spaces will be included only when more than one word is present.
//  Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => 
//  returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string){
  let strArr = string.split(" ")
  for(let i = 0; i < strArr.length; i++){
     if(strArr[i].length > 4){
        strArr[i] = strArr[i].split("").reverse().join("")
    }
  }
  return strArr.join(" ")
}

//  Level: 5 Kyu

//  Beeramid
//  Date: 5/30
//  Instructions: Let's pretend your company just hired your friend from college and paid you a referral bonus.
//  Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral 
//  bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those 
//  beers, because let's pretend it's Friday too.
//  A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in 
//  the next, 16, 25...
//  Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given 
//  the parameters of: your referral bonus, and the price of a beer can
//  For example:
//  beeramid(1500, 2); // should === 12
//  beeramid(5000, 3); // should === 16

var beeramid = function(bonus, price) {
  let levels = 0
  let cansSum = Math.trunc(bonus/price)
  
  while(cansSum >= (levels + 1)**2){
    levels += 1
    cansSum -= levels * levels
  } 
  return levels
}


//  Level: 7 Kyu

//  Strings, strings, strings (Easy)
//  Date: 5/29
//  Instructions: Oh no, there were some problems with your computer and now you cannot convert any data type to strings!
//  Task: The toString() method has been disabled for booleans, numbers, arrays and objects. Your goal is to retrive toString() 
//  for the following data types.
//  I. Booleans
//  For booleans:
//  true should be converted to "true"
//  false should be converted to "false"
//  II. Numbers
//  For numbers, conversion should be as follows:
//  (3).toString() === "3"
//  (3.14).toString() === "3.14"
//  (-78).toString() === "-78"
//  Math.PI.toString() === "3.141592653589793"
//  III. Arrays
//  For the purposes of this Kata, you will only be expected to convert arrays with numbers only into strings. However, on top of 
//  fixing it, we would also like to improve it as well. We would like to keep the square brackets ([]) around the "stringified" array 
//  as it would be seen in Javascript code. For example:
//  [].toString() === "[]"
//  [1].toString() === "[1]"
//  [2,4,8,17].toString() === "[2, 4, 8, 17]"
//  [Math.PI, Math.E].toString() === "[3.141592653589793,2.718281828459045]"
//  As you may have noticed in the examples above, when the array has more than one element, some of the strings have spaces as well as
//  commas separating each item but some strings do not. For the purposes of this Kata whether there are whitespaces or not does not matter
//  for stringified arrays - before conducting the tests your input is stripped of all whitespace.
//  Final Note - IMPORTANT
//  Your recovered toString() methods should only return the stringified version of the input - it should NOT alter the original value. Test 
//  cases have been created to confirm this.

String.prototype.toString = function(){
  return `${this}`
}


//  Level: 4 Kyu

//  Snail Sort
//  Date: 5/28
//  Instructions: Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
//  array = [[1,2,3],
//         [4,5,6],
//         [7,8,9]]
//  snail(array) #=> [1,2,3,6,9,8,7,4,5]
//  For better understanding, please follow the numbers of the next array consecutively:
//  array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
//  snail(array) #=> [1,2,3,4,5,6,7,8,9]
//  NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.
//  NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

snail = function(array) {
  let snailArray = []
  
  while(array.length > 0) {
    snailArray = snailArray.concat(array.shift());
    
    array.forEach(function (current) {
      snailArray.push(current.pop())
      current.reverse()
    })
    array.reverse()
  } 
  return snailArray
}


//  Level: 8 Kyu

//  Powers of 2
//  Date: 5/26
//  Instructions: Complete the function that takes a non-negative integer n as input, and 
//  returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
//  Examples
//  n = 0  ==> [1]        # [2^0]
//  n = 1  ==> [1, 2]     # [2^0, 2^1]
//  n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n){
  let powers = []
  
  for (let i = 0; i <= n; i++) {
    powers.push(Math.pow(2, i))
  }
  return powers
}


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
