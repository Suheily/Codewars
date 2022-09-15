// Level: 7 Kyu

// Day Of The Week
// Date: 9/15
// Instructions: Your task is easy, write a function that takes an date in format d/m/Y(String) and return what day of the week it was(String).
// Example: "21/01/2017" -> "Saturday", "31/03/2017" -> "Friday"

function dayOfTheWeek(date){
  let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = new Date(date.split("/").reverse().join("/"));
  return weekdays[day.getDay()];
}
