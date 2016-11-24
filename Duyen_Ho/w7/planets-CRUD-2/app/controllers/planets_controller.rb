class PlanetsController < ApplicationController

  def index
    @planets = Planet.all
  end

  def new
  end

  def create
    planet = Planet.new
    planet.title = params[:title]
    planet.image_url = params[:image_url]
    planet.user_id = current_user.id
    if planet.save
      redirect_to '/planets'
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
      redirect_to '/planets'
    else
      render :edit
    end
  end

end
