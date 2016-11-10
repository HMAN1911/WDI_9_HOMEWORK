class PlanetsController < ApplicationController
  def index
    @planets = Planet.all
  end

  def new
  end

  def show
    @planet = Planet.find params[:id]
    @moons = @planet.moons
  end

  def create
    planet = Planet.new
    planet.name = params[:name]
    planet.radius = params[:radius]
    planet.image_url = params[:image_url]
    planet.user_id = current_user.id
    planet.save
    redirect_to "/planets/#{ planet.id }"
  end
end
