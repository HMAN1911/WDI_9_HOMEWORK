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
    user = params[:play].downcase

    if computer.sample == user
      @game = 'Draw'
    elsif user == 'paper' && computer.sample == 'rock'
      @game = 'You Win'
    elsif computer.sample == 'paper' && user == 'rock'
      @game = 'You Lose'
    elsif computer.sample == 'scissors' && user == 'rock'
      @game = 'You Win'
    elsif user == 'scissors' && computer.sample == 'rock'
      @game = 'You Lose'
    elsif computer.sample == 'paper' && user == 'scissors'
      @game = 'You Win'
    end

  end

end
