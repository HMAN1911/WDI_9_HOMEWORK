class SecretController < ApplicationController
  def numbers
  end

  def result
    @number = rand(1..10)
    @guess = params[:number].to_i
    if @guess == @number
      @message = 'You are correct!'
    else
      @message = 'Sorry game over'
    end
  end
end
