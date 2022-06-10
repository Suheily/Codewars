#  Level: 8 Kyu

#  Welcome to the City
#  Date: 6/10
#  Instructions: Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state
#  to welcome a person. Note that name will be an array consisting of one or more values that should be 
#  joined together with one space between each, and the length of the name array in test cases will vary.
#  Example:
#  sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
#  This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

def say_hello(name, city, state):
    return "Hello, " + " ".join(name) + "! Welcome to " + city + ", " + state + "!"


#  Level: 5 Kyu

#  A Chain Adding Function
#  Date: 6/9
#  Instructions: We want to create a function that will add numbers together when called in succession.
#  add(1)(2); // == 3
#  We also want to be able to continue to add numbers to our chain.
#  add(1)(2)(3); // == 6
#  add(1)(2)(3)(4); //  == 10
#  add(1)(2)(3)(4)(5); // == 15
#  and so on.
#  A single call should be equal to the number passed in.
#  add(1); // == 1
#  We should be able to store the returned values and reuse them.
#  var addTwo = add(2);
#  addTwo; // == 2
#  addTwo + 5; // == 7
#  addTwo(3); // == 5
#  addTwo(3)(5); // == 10
#  We can assume any number being passed in will be valid whole number.

class add(int):
    def __call__(self, n):
        return add(self + n)

    
#  Level: 8 Kyu

#  To Square(Root) Or Not To Square(Root)
#  Date: 6/8
#  Instructions: Write a method, that will get an integer array as parameter and will process every number 
#  from this array. Return a new array with processing every number of the input-array like this:
#  If the number has an integer square root, take this, otherwise square the number.
#  Example
#  [4,3,9,7,2,1] -> [2,9,3,49,4,1]
#  Notes: The input array will always contain only positive numbers, and will never be empty or null.

import math

def square_or_square_root(arr):
    new_arr = []
    
    for i in arr:
        if math.sqrt(i).is_integer():
            new_arr.append(math.sqrt(i))
        else:
            new_arr.append(i**2)
    return new_arr


#  Level: 5 Kyu

#  Calculating with Functions
#  Date: 6/7
#  Instructions: This time we want to write calculations using functions and get the results. Let's have a 
#  look at some examples:
#  seven(times(five())); // must return 35
#  four(plus(nine())); // must return 13
#  eight(minus(three())); // must return 5
#  six(dividedBy(two())); // must return 3
#  Requirements:
#  There must be a function for each number from 0 ("zero") to 9 ("nine")
#  There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
#  Each calculation consist of exactly one operation and two numbers
#  The most outer function represents the left operand, the most inner function represents the right operand
#  Division should be integer division. For example, this should return 2, not 2.666666...:
#  eight(dividedBy(three()));

def zero(n = None): return 0 if not n else n(0)
def one(n = None): return 1 if not n else n(1)
def two(n = None): return 2 if not n else n(2)
def three(n = None): return 3 if not n else n(3)
def four(n = None): return 4 if not n else n(4)
def five(n = None): return 5 if not n else n(5)
def six(n = None): return 6 if not n else n(6)
def seven(n = None): return 7 if not n else n(7)
def eight(n = None): return 8 if not n else n(8)
def nine(n = None): return 9 if not n else n(9)

def plus(b): return lambda a: a + b
def minus(b): return lambda a: a - b
def times(b): return lambda a: a * b
def divided_by(b): return lambda a: int(a / b)


#  Level: 6 Kyu

#  Sum of Digits / Digital Root
#  Date: 6/6
#  Instructions: Digital root is the recursive sum of all the digits in a number. Given n, take the sum of 
#  the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit
#  number is produced. The input will be a non-negative integer.
#  Examples
#  16  -->  1 + 6 = 7
#  942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
#  132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
#  493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  --> 1 + 1 = 2

def digital_root(n):
    root = 0
    for i in str(n):
        root += int(i)
    if len(str(root)) > 1:
        root = digital_root(root)
    return root


#  Level: 7 Kyu

#  Find The Divisors!
#  Date: 6/4
#  Instructions: Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all 
#  of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime 
#  return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
#  Example:
#  divisors(12); #should return [2,3,4,6]
#  divisors(25); #should return [5]
#  divisors(13); #should return "13 is prime"

def divisors(integer):
    divisors_list = []
    
    for i in range(2, integer):
        if integer % i == 0:
            divisors_list.append(i)
    if len(divisors_list) == 0:
        return "%s is prime" %(integer)
    else: 
        return divisors_list


#  Level: 7 Kyu

#  Money, Money, Money
#  Date: 6/3
#  Instructions: Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how 
#  many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.
#  The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year
#  the new sum is re-invested. Note to Tax: not the invested principal is taxed, but only the year's accrued interest
#  Example:
#  Let P be the Principal = 1000.00      
#  Let I be the Interest Rate = 0.05      
#  Let T be the Tax Rate = 0.18      
#  Let D be the Desired Sum = 1100.00
#  After 1st Year -->  P = 1041.00
#  After 2nd Year -->  P = 1083.86
#  After 3rd Year --> P = 1128.30
#  Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum. Your task is to complete
#  the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.
#  Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take
#  into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.

def calculate_years(principal, interest, tax, desired):
    years = 0;

    while principal < desired:
        principal = (principal + (principal * interest)) - ((principal * interest) * tax)
        years +=1
    return years



#  Level: 4 Kyu

#  The Observed Pin
#  Date: 6/2
#  Instructions: Alright, detective, one of our colleagues successfully observed our target person, Robby the
#  robber. We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to this
#  warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw, 
#  when Robby entered it. The keypad has the following layout:
#  ┌───┬───┬───┐
#  │ 1 │ 2 │ 3 │
#  ├───┼───┼───┤
#  │ 4 │ 5 │ 6 │
#  ├───┼───┼───┤
#  │ 7 │ 8 │ 9 │
#  └───┼───┼───┘
#      │ 0 │
#      └───┘
#  He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another 
#  adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or
#  4. And instead of the 5 it could also be the 2, 4, 6 or 8. He also mentioned, he knows this kind of locks. You can 
#  enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. That's why we can try 
#  out all possible (*) variations. 
#  * possible in sense of: the observed PIN itself and all variations considering the adjacent digits
#  Can you help us to find all those variations? It would be nice to have a function, that returns an array (or a list in
#  Java/Kotlin and C#) of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function 
#  getPINs (get_pins in python, GetPINs in C#). But please note that all PINs, the observed one and also the results, must 
#  be strings, because of potentially leading '0's. We already prepared some test cases for you. Detective, we are counting
#  on you!

# WITHOUT itertools

neighbors = {
        "1":["2","4"], 
        "2":["3","5","1"], 
        "3":["2","6"], 
        "4":["1","5","7"], 
        "5":["2","6","8","4"],
        "6":["3","5","9"],
        "7":["4","8"],
        "8":["5","9","0","7"],
        "9":["6","8"],
        "0":["8"]
        }

def get_pins(observed):
    if len(observed) == 1:
        return neighbors[observed] + [observed]
    return [i + j for i in neighbors[observed[0]] + [observed[0]] for j in get_pins(observed[1:])]

# WITH itertools

import itertools

neighbors = {
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

def get_pins(observed):
    pins = [neighbors[i] for i in observed]
    return (["".join(neighbors) for neighbors in itertools.product(*pins)])


#  Level: 6 Kyu

#  Delete Occurrences Of An Element If It Occurs More Than N Times
#  Date: 6/1
#  Instructions: Enough is enough! Alice and Bob were on a holiday. Both of them took many pictures of the places
#  they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these 
#  sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times. He tells them 
#  that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are 
#  able to encode the motif as a number. Can you help them to remove numbers such that their list contains each 
#  number only up to N times, without changing the order?
#  Task: Given a list and a number, create a new list that contains each number of list at most N times, without 
#  reordering. For example, if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], 
#  drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to 
#  [1,2,3,1,2,3]. With list [20,37,20,21] and number 1, the result would be [20,37,21].

def delete_nth(order,max_e):
    list = []
    
    for i in order:
        if list.count(i) < max_e:
            list.append(i)
    return list


#  Level: 6 Kyu

#  Stop gninnipS My sdroW!
#  Date: 5/31
#  Instructions: Write a function that takes in a string of one or more words, and returns the same string, but
#  with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist 
#  of only letters and spaces. Spaces will be included only when more than one word is present.
#  Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => 
#  returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

def spin_words(sentence):
    spun_word = sentence.split()
    for i, element in enumerate(spun_word):
        if len(element) > 4:
            spun_word[i] = element[::-1]
    return " ".join(spun_word)


#  Level: 5 Kyu

#  Beeramid
#  Date: 5/30
#  Instructions: Let's pretend your company just hired your friend from college and paid you a referral bonus.
#  Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral 
#  bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those 
#  beers, because let's pretend it's Friday too.
#  A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in 
#  the next, 16, 25...
#  Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given 
#  the parameters of: your referral bonus, and the price of a beer can
#  For example:
#  beeramid(1500, 2); // should === 12
#  beeramid(5000, 3); // should === 16

def beeramid(bonus, price):
    levels = 0
    cans_sum = int(bonus/price)
    
    while cans_sum >= (levels + 1)**2:
        levels += 1
        cans_sum -= levels * levels
    return levels


#  Level: 4 Kyu

#  Snail Sort
#  Date: 5/28
#  Instructions: Given an n x n array, return the array elements arranged from outermost elements to the middle element, 
#  traveling clockwise.
#  array = [[1,2,3],
#          [4,5,6],
#          [7,8,9]]
#  snail(array) #=> [1,2,3,6,9,8,7,4,5]
#  For better understanding, please follow the numbers of the next array consecutively:
#  array = [[1,2,3],
#          [8,9,4],
#          [7,6,5]]
#  snail(array) #=> [1,2,3,4,5,6,7,8,9]
#  NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in 
#  a clockwise snailshell pattern.
#  NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

def snail(snail_map):
    snail_array = []
    
    while len(snail_map) > 0:
        snail_array += snail_map[0]
        del snail_map[0]
            
        if len(snail_map) > 0:
            for i in snail_map:
                snail_array += [i[-1]]
                del i[-1]
                    
            if snail_map[-1]:
                snail_array += snail_map[-1][::-1]
                del snail_map[-1]
                    
            for i in reversed(snail_map):
                snail_array += [i[0]]
                del i[0]
                    
    return snail_array


#  Level: 8 Kyu

#  Powers of 2
#  Date: 5/26
#  Instructions: Complete the function that takes a non-negative integer n as input, and 
#  returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
#  Examples
#  n = 0  ==> [1]        # [2^0]
#  n = 1  ==> [1, 2]     # [2^0, 2^1]
#  n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

import math
def powers_of_two(n):
    powers = []
    
    for i in range(0, n + 1):
        powers.append(math.pow(2,i))
    return powers


#  Level: 6 Kyu

#  Unpack Delicious Sausages!
#  Date: 5/25
#  Instructions: A food delivery truck carrying boxes of delicious sausages has arrived 
#  and it's your job to unpack them and put them in the store's display counter. 
#  The truck is filled with boxes of goods. Among the goods, there are various types of 
#  sausages. Straight sausages I, curvy sausages ), even twirly sausages @ and many more. 
#  The safest way to tell any type of sausage apart from other goods is by the packaging [],
#  used exclusively by sausages. Make sure to ignore other goods, those will be taken care of 
#  by someone else. Once you have unpacked all the sausages, just lay them out in the display 
#  counter (string) in the same order in which they came in boxes with one space " " in-between
#  every sausage. Oh, and watch out for spoiled or damaged sausage packs, did I tell you about 
#  those? The sausages are always packed in fours and each pack contains only one sausage type, 
#  so whenever there is any irregularity, the sausages are probably spoiled or damaged and the 
#  whole pack should be thrown out!
#  Now we're getting to the best part - your reward! Instead of money, you'll be paid in something
#  far better - sausages! Every fifth undamaged processed pack of sausages doesn't go to the counter,
#  instead it's yours to keep. Don't go spending it all at once!
#  If the truck arrives completely empty, only with empty boxes or only with goods that are not sausages,
#  the display counter will simply stay empty "". Unlike truck and boxes that may be empty, every existing
#  product is a non-empty string.
#  Example:
#  Input (truck with 5 boxes containing 11 products):
#  [("(-)", "[IIII]", "[))))]"), ("IuI", "[llll]"), ("[@@@@]", "UwU", "[IlII]"), ("IuI", "[))))]", "x"), ()]
#  "Truck is a list, boxes are tuples, packages of goods are strings"
#  Output (four sets of sausages):
#  "I I I I ) ) ) ) l l l l @ @ @ @"
#  Explanation:
#  The last box is empty and is therefore ignored
#  Packages with products that are not sausages are ignored - "(-)", "IuI", "UwU", "IuI", "x"
#  One damaged package gets thrown out - "[IlII]"
#  Fifth undamaged package is used as your reward and is therefore excluded from the output: "[))))]"
#  More examples of input and expected output can be seen in the example test cases

def unpack_sausages(truck):
    display_counter = ""
    package = []
    sausage_package_counter = 0
        
    for box in truck:
        for pack in box:
            if pack.startswith("["):
                package = pack[1:-1]

                if len(package) == 4 and len(set(package)) == 1:
                    sausage_package_counter += 1

                    if sausage_package_counter == 5:
                        sausage_package_counter = 0
                    else:
                        for k in range(len(package)):
                            display_counter += package[k] + " "
                        
    return display_counter[0:-1]


#  Level: 5 Kyu

#  Extract The Domain Name From A URL
#  Date: 5/24
#  Instructions:Write a function that when given a URL as a string, parses out just the domain name 
#  and returns it as a string. For example:
#  * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
#  * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
#  * url = "https://www.cnet.com"                -> domain name = "cnet"

def domain_name(url):
    domain = url.replace("https://","").replace("http://","").replace("www.","")
    return domain.split(".")[0]


#  Level: 4 Kyu

#  Split Comments
#  Date: 5/23
#  Instructions: Complete the solution so that it strips all text that follows any of a set
#  of comment markers passed in. Any whitespace at the end of the line should also be stripped
#  out.
#  Example:
#  Given an input string of:
#  apples, pears # and bananas
#  grapes
#  bananas !apples
#  The output expected would be:
#  apples, pears
#  grapes
#  bananas
#  The code would be called like so:
#  var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
#  result should == "apples, pears\ngrapes\nbananas"

def strip_comments(string, markers):
    result = string.split("\n")
    
    for i in range(len(result)):
        for j in markers:
            if j in result[i]:
                result[i] = result[i][:result[i].index(j)].rstrip()
    return "\n".join(result)


#  Level: 6 Kyu

#  Two Sum
#  Date: 5/22
#  Instructions: Write a function that takes an array of numbers (integers for the tests) and a target number.
#  It should find two different items in the array that, when added together, give the target value. The indices 
#  of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
#  For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
#  The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be 
#  numbers; target will always be the sum of two different items from that array).
#  Based on: http://oj.leetcode.com/problems/two-sum/
#  twoSum [1, 2, 3] 4 === (0, 2)

def two_sum(numbers, target):
    hashmap = {}
    
    for i in range(0, len(numbers)):
        if numbers[i] not in hashmap:
            hashmap[target - numbers[i]] = i
        else:
            return [i, hashmap[numbers[i]]]


#  Level: 5 Kyu

#  RGB To Hex Conversion
#  Date: 5/21
#  Instructions: The rgb function is incomplete. Complete it so that passing in RGB decimal values will result
#  in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that 
#  fall out of that range must be rounded to the closest valid value.
#  Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
#  The following are examples of expected output values:
#  rgb(255, 255, 255) // returns FFFFFF
#  rgb(255, 255, 300) // returns FFFFFF
#  rgb(0,0,0) // returns 000000
#  rgb(148, 0, 211) // returns 9400D3

def rgb(r, g, b):
    return "{:02X}{:02X}{:02X}".format(hex_convert(r), hex_convert(g), hex_convert(b))

def hex_convert(value):
    if value < 0:
        return 0
    if value > 255:
        return 255
    return value


# Level: 6 Kyu

# Your Order, Please
# Date: 5/20
# Instructions: Your task is to sort a given string. Each word in the string will contain a single number.
# This number is the position the word should have in the result.
# Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
# If the input string is empty, return an empty string. The words in the input String will only contain valid 
# consecutive numbers.
# Examples:
# "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
# "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
# ""  -->  ""

def order(sentence):
    sentence = sentence.split()
    new_sentence = []
    
    for i in range(1,10):
        for j in list(sentence):
            if str(i) in j:
                new_sentence.append(j)
    return " ".join(new_sentence)


# Level: 7 Kyu

# Binary Addition
# Date: 5/19
# Instructions: Implement a function that adds two numbers together and returns their sum in binary.
# The conversion can be done before, or after the addition. The binary number returned should be a string.
# Examples:(Input1, Input2 --> Output (explanation)))
# 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
# 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

def add_binary(a,b):
    sum = a + b
    return format(sum, "b")


# Level: 6 Kyu

# Does My Number Look Big in This?
# Date: 5/18
# Instructions: A Narcissistic Number is a positive number which is the sum of its own digits, 
# each raised to the power of the number of digits in a given base. In this Kata, we will restrict 
# ourselves to decimal (base 10).
# For example, take 153 (3 digits), which is narcisstic:
#  1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
# and 1652 (4 digits), which isn't:
#  1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
# The Challenge:
# Your code must return true or false (not 'true' and 'false') depending upon whether the given number
# is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.
# Error checking for text strings or other invalid inputs is not required, only valid positive non-zero 
# integers will be passed into the function.

def narcissistic( value ):
    narcissus = str(value)
    echo = 0
    for i in narcissus:
        echo += int(i) ** len(narcissus)
    return echo == int(narcissus)


# Level: 6 Kyu

# Write Number in Expanded Form
# Date: 5/17
# Instructions: Write Number in Expanded Form
# You will be given a number and you will need to return it as a string in Expanded Form. For example:
# expandedForm(12); // Should return '10 + 2'
# expandedForm(42); // Should return '40 + 2'
# expandedForm(70304); // Should return '70000 + 300 + 4'
# NOTE: All numbers will be whole numbers greater than 0.

def expanded_form(num):
    num_str = len(str(num))
    expanded = []
    for i,j in enumerate(str(num)):
        if j != "0":
            expanded.append(j + "0" * (num_str - i - 1))
    return " + ".join(expanded)


# Level: 6 Kyu

#  Find the Parity Outlier
#  Date: 5/16
#  Instructions: You are given an array (which will have a length of at least 3, but could be very large) 
#  containing integers. The array is either entirely comprised of odd integers or entirely comprised of even 
#  integers except for a single integer N. Write a method that takes the array as an argument and returns 
#  this "outlier" N.

def find_outlier(integers):
    odd = []
    even = []
    
    for i in integers:
        if i % 2 == 0:
            even.append(i)
        else:
            odd.append(i)
    if len(even) == 1:
        return even[0]
    else:
        return odd[0]
