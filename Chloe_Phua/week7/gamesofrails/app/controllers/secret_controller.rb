class SecretController < ApplicationController

  def play

  end

  def result
    click = params[:click]
    randNum = Random.new
    num = randNum.rand(1..10).to_s
    if click == num
      @result = "YOU WIN!"
    else
      @result = "YOU LOSE"
    end
  end


end
