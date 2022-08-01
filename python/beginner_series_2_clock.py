# Level: 8 Kyu

# Beginner Series #2 Clock
# Date: 7/30
# Clock shows h hours, m minutes and s seconds after midnight.
# Your task is to write a function which returns the time since midnight in milliseconds.
# Example:
# h = 0
# m = 1
# s = 1
# result = 61000

def past(h, m, s):
    return ((h * 3600) + (m * 60) + s) * 1000