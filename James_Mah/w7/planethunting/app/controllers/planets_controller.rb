class PlanetsController < ApplicationController

  def index
    @planets = Planet.all
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
    planet.save

    redirect_to '/planets'
  end

  def show
    @planet = Planet.find(params[:id])
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
    planet.save

    redirect_to "/planets/#{planet.id}"
  end

  def destroy
    Planet.find(params[:id]).destroy
    redirect_to '/planets'
  end


end