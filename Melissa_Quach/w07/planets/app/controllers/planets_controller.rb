class PlanetsController < ApplicationController
  def index
    @planets = Planet.all.order('id')
  end

  def new
  end

  def create
    planet = Planet.new
    planet.name = params[:name]
    planet.color = params[:color]
    planet.user_id = session[:user_id]

    if planet.save
      redirect_to "/planets/#{planet.id}"
    else
      render :new
    end
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
