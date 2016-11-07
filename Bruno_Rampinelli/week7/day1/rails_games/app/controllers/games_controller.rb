class GamesController <ApplicationController

  def games
  render :index
  end


  def magic_8_ball

  end

  def answer
  question = params[:question]
  random_answer = ['yes', 'no', 'maybe', 'keep going','U know']
  @answer=random_answer.sample

  end



  def secret_number
  end

  def magic_number


    magic_number = '8';

    @user_number = params[:number]

    if @user_number == magic_number

      @result = "You win"
    else
      @result = "You lose"
    end
  end

  def rock_paper_scissor
  end

end
