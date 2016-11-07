class RockPaperScissorsController < ApplicationController

  def rock_paper_scissors_play
    @user_throw = params[:throw].downcase
    options = ['rock','paper','scissors']
    @server_throw = options.sample
    if @user_throw == @server_throw
      @message = 'Draw'
    else
      case @user_throw
        when 'rock'
          if @server_throw == 'paper'
            @message = 'You lose'
          else
            @message = 'You win'
          end
        when 'paper'
          if @server_throw == 'rock'
            @message = 'You win'
          else
            @message = 'You lose'
          end
        when 'scissors'
          if @server_throw == 'rock'
            @message = 'You lose'
          else
            @message = 'You win'
          end
      end #case

    end #if

  end #def rock_paper_scissors
end #class
