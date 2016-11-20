class PlanetsController < ApplicationController

  def index
    @planets = Planet.all
  end

  def new
  end

  def create
    @planet = Planet.new
    @planet.title = params[:title]
    @planet.image_url = params[:image_url]

    if @planet.save
      redirect_to '/'
    else
      render :new
    end
  end

  def edit
    @planet = Planet.find(params[:id])
  end

  def update
    @planet = Planet.find(params[:id])
    @planet.title = params[:title]
    @planet.image_url = params[:image_url]

    if @planet.save
      redirect_to '/planets/params[:id]'
    else
      render :edit
    end
  end

  def show
    @planet = Planet.find(params[:id])
  end

  def destroy
    @planet = Planet.find(params[:id])
    @planet.destroy
    if @planet.save
      redirect_to '/'
    else
      render :show
    end
  end

end
