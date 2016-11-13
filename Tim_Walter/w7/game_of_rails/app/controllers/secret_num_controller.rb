class SecretNumController < ApplicationController

  def index
    @num_to_guess = rand(1..9)
    @response = ''
  end

  def guess
    @guess = params[:guess].to_i
    @num_to_guess = params[:num_to_guess].to_i
    if @guess == @num_to_guess
      @response = "Thats correct!!!!!"
      render :win #redirect is another request
      return
    elsif @guess > @num_to_guess
      @response = "Tooo high!"
    else
      @response = "Toooo low!"
    end


  end
end
