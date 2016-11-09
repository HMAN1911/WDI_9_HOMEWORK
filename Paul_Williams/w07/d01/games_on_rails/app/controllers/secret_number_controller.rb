class SecretNumberController < ApplicationController

  def index
  end

  def answer
    render :win and return if params[:button].to_i == rand(1..10)
    render :lose
  end

end
