# Summary
# Games on Rails is a web application with three games
# Magic 8 Ball
# Secret Number
# Rock Paper Scissors
# Magic 8 Ball
#
# Magic 8 ball takes user's questions and returns an eerily prescient answer.
# Secret Number
#
# Users click a number between 1 and 10. The controller validates the guess and renders the win or lose view.
# Rock Paper Scissors
#
# Create a route that goes from /games/rock_paper_scissors/:throw to games#rock_paper_scissors_play
# Use params[:throw] as the user's choice
# Compare the 2!

class GamesController < ApplicationController
  def index
  end

  def show8ball
  end

  def answer8ball
    @question = params[:question]
    answerArray = ["That seems likely!", "Who knows!", "It may or may not happen!", "Yes", "No", "Probably", "Unlikely" ]
    @answer = answerArray[rand(answerArray.length)]

    render :show8ball
  end

  def getSecretNumber
  end

  def guessSecretNumber
    @guess = params[:guess]
    if @guess.to_i < 5
      render :win
    else
      render :lose
    end
  end

  def showRockPaperScissors
  end

  def guessRockPaperScissors
    @compThrow = ["rock", "paper", "scissors"].sample
    @playerThrow = params[:throw]
    if @playerThrow == @compThrow
      @result = "draw"
    elsif @playerThrow == "rock" && @compThrow == "scissors"
      @result = "win"
    elsif @playerThrow == "paper" && @compThrow == "rock"
      @result = "win"
    elsif @playerThrow == "scissors" && @compThrow == "paper"
      @result = "win"
    else
      @result = "loss"
    end
    render :showRockPaperScissors
  end
end
