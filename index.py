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
