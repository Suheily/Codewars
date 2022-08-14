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