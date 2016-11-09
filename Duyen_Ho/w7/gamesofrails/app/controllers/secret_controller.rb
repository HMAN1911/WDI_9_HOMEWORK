class SecretController < ApplicationController

  def guess
  end

  def result
    number = rand(1..10)
    user_answer = params[:user_answer]
    reset = params[:reset]

    if user_answer == number
      @message = "You win. The number is #{number}."
    else user_answer != number
      @message = "You lose. The number is #{number}."
    end

    render :guess
  end

end
