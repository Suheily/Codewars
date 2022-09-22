// Level: 7 Kyu

// Likes Vs Dislikes
// Date: 9/22
// Instructions: Create a function that takes in a list of button inputs and returns the final state. If no button is currently active, return Nothing. If the list is empty, return Nothing.
// Examples: 
// likeOrDislike([Dislike]) => Dislike
// likeOrDislike([Like,Like]) => Nothing
// likeOrDislike([Dislike,Like]) => Like
// likeOrDislike([Like,Dislike,Dislike]) => Nothing

function likeOrDislike(buttons) {
  let finalState = Nothing;
  
  for(let i = 0; i < buttons.length; i++){
    if(buttons[i] === finalState){
      finalState = Nothing
    } else {
      finalState = buttons[i]
    }
  }
  return finalState
}
