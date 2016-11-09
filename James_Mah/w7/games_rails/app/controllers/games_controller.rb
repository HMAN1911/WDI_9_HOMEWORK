class GamesController < ApplicationController

  def magic_8_ball_result
    answers = [
      "It is certain", 
      "It is decidedly so", 
      "Without a doubt", 
      "Yes, definitely", 
      "You may rely on it", 
      "As I see it, yes", 
      "Most likely", 
      "Outlook good", 
      "Yes", 
      "Signs point to yes", 
      "Reply hazy try again", 
      "Ask again later", 
      "Better not tell you now", 
      "Cannot predict now", 
      "Concentrate and ask again", 
      "Don't count on it", 
      "My reply is no", 
      "My sources say no", 
      "Outlook not so good", 
      "Very doubtful"]

    @question = params[:question]
    @answer = answers.sample

    render :magic_8_ball_result
  end

  def secret_number_decide
    answer = rand(1..10).to_s

    if params[:number] == answer
      redirect_to '/games/secret_number_win'
    else
      redirect_to '/games/secret_number_lose'
    end
  end

  def rock_paper_scissors_play
    p1 = params[:throw]
    if p1 == 'rock' || p1 == 'paper' || p1 == 'scissors'
      render :rock_paper_scissors_play
    else
      redirect_to '/games/rock_paper_scissors/'
    end
  end

  def rock_paper_scissors_decide
    p1 = params[:p1]
    p2 = params[:p2]

    if (p1 == p2)
      redirect_to '/games/rock_paper_scissors_draw'

    elsif (p1 == 'rock' && p2 == 'scissors') || (p1 == 'scissors' && p2 == 'paper') || (p1 == 'paper' && p2 == 'rock')
      redirect_to '/games/rock_paper_scissors_p1_wins'

    else
      redirect_to '/games/rock_paper_scissors_p2_wins'
      
    end


  end

end
