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
end
