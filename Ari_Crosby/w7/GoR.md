# Games of Rails

### Summary
Games on Rails is a web application with three games

*  Magic 8 Ball
*  Secret Number
*  Rock Paper Scissors

__Magic 8 Ball__

*  Magic 8 ball takes user's questions and returns an eerily prescient answer.

__Secret Number__

*  Users click a number between 1 and 10. The controller validates the guess and renders the win or lose view.

__Rock Paper Scissors__

*  Create a route that goes from `/games/rock_paper_scissors/:throw` to `games#rock_paper_scissors_play`
*  Use params[:throw] as the user's choice
*  Compare the 2!


pseudo code:
  make an index, with links to each game page(route)
  game page for each game
  magic8
  < rails generate model Magic_Balls answer:string > # just need the ID and an answer.
  then in the
