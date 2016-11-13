
class DishesController < ApplicationController
  def index
    @planets = Planets.all
  end
end
