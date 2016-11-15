class PlanetsController < ApplicationController

  def index
    @planets = Planet.all.order('distance_sun ASC')
  end

  def new
  end

  def create
    planet = Planet.new
    planet.name = params[:name]
    planet.photo_url = params[:photo_url]
    planet.distance_sun = params[:distance_sun]
    planet.volume = params[:volume]
    planet.density = params[:density]
    planet.user_id = session[:user_id]
    
    if planet.save
      redirect_to '/planets'
    else
      render :new
    end
  end

  def show
    planet = Planet.find(params[:id])
    render json: planet
  end

  def edit
    @planet = Planet.find(params[:id])
  end

  def update
    planet = Planet.find(params[:id])
    planet.name = params[:name]
    planet.photo_url = params[:photo_url]
    planet.distance_sun = params[:distance_sun]
    planet.volume = params[:volume]
    planet.density = params[:density]
    
    if planet.save
      # redirect_to "/planets/#{planet.id}"
      render json: planet
    else
      raise
      render json: {hi: 23}
    end
    
  end

  def destroy
    Planet.find(params[:id]).destroy
    # redirect_to '/planets'
  end


end