class SecretController < ApplicationController

  def guess

  end

  def result
    user_guess = params[:guess].to_i
    if user_guess == Random.rand(1..10)
      redirect_to '/secret/win'
    else
      redirect_to '/secret/lose'
    end
  end

  def win

  end

  def lose

  end
end
