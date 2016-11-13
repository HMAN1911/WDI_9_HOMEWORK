class RockPaperScissorsController < ApplicationController
  def index
  end

  def play
    options = ['rock', 'scissors','paper']
    @computer_choice = options[index = rand(0..2)]
    @user_choice = params[:user_choice]

    if @computer_choice == @user_choice
      @response = "Draw"
    elsif @user_choice == 'rock' && @computer_choice =='scissors'
      @response = "Computer Wins"
    elsif @user_choice == 'scissors'&& @computer_choice = "rock"
      @response = "Computer Wins"
    else
      @response = "You Win!"
    end

    render :index
    return
  end
end
