class PlanetsController < ApplicationController

  def index
    @planets = Planet.all

  end


  def new

    render :new

  end

  def create
    planet = Planet.new
    planet.name = params[:name]
    planet.image_url = params[:image_url]
    planet.distance = params[:distance]
    planet.save

    if planet.save
      redirect_to '/planets'
    else
      render :new # just showing the template
    end
  end

  def edit
    @planet = Planet.find(params[:id])
    render :edit
  end

  def update
    @planet = Planet.find(params[:id])
    @planet.name = params[:name]
    @planet.image_url = params[:image_url]
    @planet.distance = params[:distance]
    if @planet.save
      redirect_to '/planets'
    else
      render :edit
    end
  end

  def destroy
    @planet = Planet.find(params[:id])
    @planet.delete
    redirect_to '/planets'
  end


end
