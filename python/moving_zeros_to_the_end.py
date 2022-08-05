#  Level: 5 Kyu

#  Moving Zeros To The End
#  Date: 7/15
#  Instructions: Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
#  move_zeros([1, 0, 1, 2, 0, 1, 3]) # returns [1, 1, 2, 1, 3, 0, 0]

def move_zeros(lst):
    counter = 0
    new_lst = []
     
    for i in lst:
        if i == 0: 
            counter +=1
        else:
            new_lst.append(i)
    while counter > 0:
        new_lst.append(0)
        counter -= 1
    return new_lst