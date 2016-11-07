class RockPaperScissorsController < ApplicationController

  def index
  end

  def play
    moves = ['rock', 'paper', 'scissors']
    @selected_move = moves.sample
    @player_move = params[:throw]
    render :draw and return if @player_move == @selected_move
    render :win and return if @player_move == 'rock' && @selected_move == 'scissors'
    render :win and return if @player_move == 'paper' && @selected_move == 'rock'
    render :win and return if @player_move == 'scissors' && @selected_move == 'paper'
    render :lose
  end

end
