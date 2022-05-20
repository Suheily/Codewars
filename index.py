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
#  Instructions: You are given an array (which will have a length of at least 3, 
#  but could be very large) containing integers. The array is either entirely 
#  comprised of odd integers or entirely comprised of even integers except for a 
#  single integer N. Write a method that takes the array as an argument and returns 
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
