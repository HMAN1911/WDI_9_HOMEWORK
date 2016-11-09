class RockPaperScissorsController < ApplicationController
  def throw
    @user_answer = params[:throw].downcase.to_sym
    @ran_choice = [:rock, :paper, :scissors].sample
    game = {
      :rock => {:rock => 'draw', :paper => 'paper', :scissors => 'rock'},
      :paper => {:rock => 'paper', :paper => 'draw', :scissors => 'scissors'},
      :scissors => {:rock => 'rock', :paper => 'scissors', :scissors => 'draw'}
    }

    @outcome = game[@user_answer][@ran_choice]

    render :index
  end
end
