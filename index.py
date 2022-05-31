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
#  Instructions: Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
#  array = [[1,2,3],
#          [4,5,6],
#          [7,8,9]]
#  snail(array) #=> [1,2,3,6,9,8,7,4,5]
#  For better understanding, please follow the numbers of the next array consecutively:
#  array = [[1,2,3],
#          [8,9,4],
#          [7,6,5]]
#  snail(array) #=> [1,2,3,4,5,6,7,8,9]
#  NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.
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
