class Magic8Controller < ApplicationController

  def question

  end

  def answer
    @question = params[:question]
    @answer = ['Yes', 'No', 'Maybe', 'Try not to think about that']
  end

end
