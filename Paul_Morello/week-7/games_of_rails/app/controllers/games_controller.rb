class GamesController < ApplicationController

  def index
  end

  def magic_play

  end

  def magic_ask

    answer = params[:answer]
    random_answer = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes, definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes']

    @return = random_answer.sample

  end

  def secret_number_play
  end

  def secret_number_guess
    if params[:number] == '7'
      @result = 'You Win'
    else
      @result = 'You Lose'
    end
  end

  def rock_paper_scissors_play
  end

  def rock_paper_scissors_result

    computer = ['rock', 'paper', 'scissors']
    computer_guess = computer.sample
    user = params[:play].downcase

    if computer_guess == user
      @game = 'Draw'
    elsif computer_guess == 'rock' && user == 'paper'
      @game = 'You Lose'
    elsif computer_guess == 'paper' && user == 'rock'
      @game = 'You Win'
    elsif computer_guess == 'scissors' && user == 'rock'
      @game = 'You Win'
    elsif computer_guess == 'rock' && user == 'scissors'
      @game = 'You Lose'
    elsif computer_guess == 'paper' && user == 'scissors'
      @game = 'You Win'
    else
      @game = 'You Lose'
    end

  end

end
