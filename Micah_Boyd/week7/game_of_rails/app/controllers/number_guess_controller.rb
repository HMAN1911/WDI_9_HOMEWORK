class NumberGuessController < ApplicationController

  def guess
  end

  def answer

    number = [1, 2, 3, 4, 5, 6, 9, 8, 9, 10].shuffle
    random_number = number.pop.to_s

    if random_number == params[:number].to_s
      @response = 'You got it!'
    else
      @response = 'Sorry try again'
    end
  end

end
