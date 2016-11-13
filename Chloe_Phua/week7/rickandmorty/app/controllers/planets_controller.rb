class PlanetsController < ApplicationController

  def index
    @planets = Planet.all
  end

  def new
  end

  def create
  end

end
