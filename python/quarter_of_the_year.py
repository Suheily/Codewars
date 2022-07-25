#  Level: 8 Kyu

#  Quarter of the Year
#  Date: 7/25
#  Instructions: Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
#  Examples: Month 2 (February) is part of the first quarter, month 6 (June) is part of the second quarter, and month 11 (November) is part of the fourth quarter.

def quarter_of(month):
    if month <= 3:
        return 1
    elif month <= 6:
        return 2
    elif month <= 9:
        return 3
    elif month <= 12:
        return 4