class MoonsController < ApplicationController
  def create
    moon = Moon.new
    moon.name = params[:name]
    moon.user_id = current_user.id
    moon.planet_id = params[:planet_id]
    moon.radius = params[:radius]
    moon.save
    redirect_to "/planets/#{ params[:planet_id] }"
  end
end