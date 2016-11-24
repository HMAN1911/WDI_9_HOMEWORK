class Api::PlanetsController < ApplicationController

  def index
    planets = Planet.all

    render json: planet.to_json
  end

end
