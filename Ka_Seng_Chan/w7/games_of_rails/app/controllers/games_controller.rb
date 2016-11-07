class GamesController < ApplicationController
  def index
  end

  def magic_8_ball
  end

  def magic_8_ball_result
    answers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Most likely',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      'Don\'t count on it',
      'My reply is no',
      'My sources say no',
      'Outlook not so good',
      'Very doubtful'
      ]
    @answer = answers.sample
  end

  def secret_number
    @answer = Random.rand(1..10)
  end

  def secret_number_result
    @answer = params[:answer]
    if params[:number] == @answer
      render :secret_number_win
    else
      render :secret_number_lose
    end
  end

  def rock_paper_scissors_play
    @user = params[:throw]
    @computer = ['rock','paper','scissors'].sample
  end
end
