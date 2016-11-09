class SecretnumberController < ApplicationController

  def show
    @ans = params[:id]
  end
  
end
