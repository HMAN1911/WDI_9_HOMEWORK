class MagicController < ApplicationController

  def play

  end

  def ask
    @question = params[:question]

    case !!@question
    when @question.include?('hello')
      @response = "Greetings Inferior Species of the Universe"
    when @question.include?('bye')
      @response = "Bye"
    end

  end


end
