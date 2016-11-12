class PlanetsController < ApplicationController
  def index
    @planets = Planet.all
    @comments = Comment.all
  end

  def new
  end

  def create
    planet = Planet.new
    planet.name = params[:name]
    planet.image_url = params[:image_url]
    planet.distance = params[:distance]
    planet.moons = params[:moons]
    planet.rotation = params[:rotation]
    planet.radius = params[:radius]
    if planet.save
      redirect_to '/planets'
    else
      render :new
    end
  end

  def edit
    @planet = Planet.find_by(id: params[:id])
  end

  def update
    @planet = Planet.find_by(id: params[:id])
    @planet.name = params[:name]
    @planet.image_url = params[:image_url]
    @planet.distance = params[:distance]
    @planet.moons = params[:moons]
    @planet.rotation = params[:rotation]
    @planet.radius = params[:radius]
    if @planet.save
      redirect_to "/planets"
    else
      render :edit
    end
  end

  def delete
    @planet = Planet.find_by(id: params[:id])
    @planet.delete
    redirect_to "/planets"
  end
end
