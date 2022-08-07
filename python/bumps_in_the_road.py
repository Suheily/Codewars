#  Level: 7 Kyu

#  Bumps in the Road
#  Date: 8/8
#  Instructions: Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.
#  Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead.

def bumps(road):
    count = 0
    for i in road:
        if i == "n":
            count += 1
    if count > 15:
        return "Car Dead"
    else:
        return "Woohoo!"