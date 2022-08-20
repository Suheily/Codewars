#  Level: 7 Kyu

#  Switcheroo
#  Date: 8/20
#  Instructions: Given a string made up of letters a, b, and/or c, switch the position of letters a and b 
#  (change a to b and vice versa). Leave any incidence of c untouched.
#  Example:
#  'acb' --> 'bca'
#  'aabacbaa' --> 'bbabcabb'

def switcheroo(s):
    new_s = ""
    for letter in s:
        if letter == "a":
            new_s += "b"
        elif letter == "b":
            new_s += "a"
        else:
            new_s += letter
    return new_s