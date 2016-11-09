class MagicController < ApplicationController

  def question
  end

  def answer
    randomNum = rand(1..6)
    @answer

    case randomNum
      when 1 then @answer = 'The answer my friend, is no.'
      when 2 then @answer = 'The outlook is not so good.'
      when 3 then @answer = 'Yes, you will.'
      when 4 then @answer = 'You can count on it.'
      when 5 then @answer = 'It is unlikely.'
      when 6 then @answer = 'You can\'t unscramble a scrambled egg.'
    end

    render :question
  end

end
