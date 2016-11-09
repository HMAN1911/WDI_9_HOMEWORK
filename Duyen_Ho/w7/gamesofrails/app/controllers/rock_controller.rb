class RockController < ApplicationController

  def throw
  end

  def play
    @player = params[:throw]
    @computer
    @winner

    randomNum = rand(1..3)

    case randomNum
      when 1 then @computer = 'rock'
      when 2 then @computer = 'paper'
      when 3 then @computer = 'scissors'
    end

    case @player
      when 'rock' then
        if @computer = 'rock'
          @winner = 'It\'s a draw.'
        end
        if @computer = 'paper'
          @winner = 'Computer / Paper wins.'
        end
        if @computer = 'scissors'
          @winner = 'Player / Rock wins.'
        end
      when 'paper' then
        if @computer = 'rock'
          @winner = 'Player / Paper wins.'
        end
        if @computer = 'paper'
          @winner = 'It\'s a draw.'
        end
        if @computer = 'scissors'
          @winner = 'Computer / Scissors wins.'
        end
      when 'scissors' then
        if @computer = 'rock'
          @winner = 'Player / Scissors wins.'
        end
        if @computer = 'paper'
          @winner = 'Player / Scissors wins.'
        end
        if @computer = 'scissors'
          @winner = 'It\'s a draw.'
        end
    end
  end

end
