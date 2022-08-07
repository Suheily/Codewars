#  Level: 6 Kyu

#  What's Your Running Pace?
#  Date: 6/22
#  Instructions: In this Kata, we will calculate running pace. To do that, we have to know the distance and the time. Create the
#  following function: runningPace(distance, time) where distance is a float with the number of kilometres and time is a string 
#  containing the time it took to travel the distance. It will always be minutes:seconds. For example "25:00" means 25 minutes. 
#  You don't have to deal with hours. The function should return the pace, for example "4:20" means it took 4 minutes and 20 
#  seconds to travel one kilometre. Note: The pace should always return only the number of minutes and seconds. You don't have to 
#  convert these into hours. Floor the number of seconds.

def running_pace(distance, time):
    minutes, seconds = map(int, time.split(':'))
    overall_seconds = minutes * 60 + seconds
    pace = overall_seconds / distance
    new_minutes = int(pace//60)
    new_seconds = int(pace% 60)
    return f'{new_minutes}:{new_seconds:02}'
