class MagicController < ApplicationController
  def index
  end

  def get_answer
    @question = params[:question]
    @answers = ["Don't count on it",
    "Outlook not so good",
    "Ask again later",
    "My sources say no",
    "It is decidedly so",
    "Most likely",
    "Without a doubt",
    "Outlook good!",
    "Very doubtful"]
    index = rand(0..8)
    @answer = @answers[index]
    if @question == ''
      @answer = "you must ask to get a response"
    end
    render :index
    return
  end

end
