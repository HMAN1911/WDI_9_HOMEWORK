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
  
  def edit
    @planet = Planet.find params[:id]
    @moons = @planet.moons
    if current_user && @planet.user.id == current_user.id
      render :edit
    else
      redirect_to '/'
    end
  end

  def update
    planet = Planet.find params[:id]
    planet.update(name: params[:name], radius: params[:radius], image_url: params[:image_url])
    redirect_to "/planets/#{ planet.id }"
  end

  def destroy
    Planet.find(params[:id]).destroy
    redirect_to '/'
  end
end
