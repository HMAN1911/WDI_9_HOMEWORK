class RpsController < ApplicationController

  def index
    @throw = params[:throw]
  end

  def play
    @throw = params[:throw]
    options = ['rock','scissors','paper']
    @result = options.sample

    if @throw == @result
      @outcome = "you have drawn with #{@throw} against computer's #{@result}"
    elsif (@throw == 'paper' && @result == 'rock') || (@throw == 'scissors' && @result == 'paper') || (@throw == 'rock' && @result == 'scissors')
      @outcome = "you won with #{@throw} against computer's #{@result}!"
    else
      @outcome = "you lose with #{@throw} against computer's #{@result}!"
    end
  end


end
