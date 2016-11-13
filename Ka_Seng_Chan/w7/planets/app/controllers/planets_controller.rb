class PlanetsController < ApplicationController
  def index
    @planets = Planet.order(:id)
  end

  def create
    planet = Planet.new
    planet.name = params[:name]
    planet.image_url = params[:image_url]
    if planet.save
      redirect_to '/planets'
    else
      render :new
    end
  end

  def new
  end

  def edit
    @planet = Planet.find(params[:id])
  end

  def show
    @planet = Planet.find(params[:id])
  end

  def update
    @planet = Planet.find(params[:id])
    @planet.name = params[:name]
    @planet.image_url = params[:image_url]
    if @planet.save
      redirect_to '/planets'
    else
      render :edit
    end
  end

  def destroy
    Planet.find(params[:id]).destroy
    redirect_to '/planets'
  end
end
