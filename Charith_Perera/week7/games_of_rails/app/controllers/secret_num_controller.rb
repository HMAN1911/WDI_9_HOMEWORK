class SecretNumController < ApplicationController
  def guess
    ran = rand(1..10)
    @answer = (params["guess"].to_i == ran) ? "You guessed CORRECT! Answer was #{ran}" : "You guessed WRONG! Answer was #{ran}"
    render :index
  end
end
