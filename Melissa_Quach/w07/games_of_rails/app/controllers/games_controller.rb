class GamesController < ApplicationController
  @@eight_ball_responses = [
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

  # Generate 8-ball response to question
  def eight_ball
    @question = params[:question]

    if @question
      @response = @@eight_ball_responses.sample
    end
  end

  # Get user's guess
  # If guess received, check against computer's response
  # and display result
  def secret_number
    guess = params[:guess]

    if guess
      @answer = Random.rand(10) + 1
      if guess.to_i == @answer
        render :secret_number_win
      else
        render :secret_number_lose
      end
    end
  end
end
