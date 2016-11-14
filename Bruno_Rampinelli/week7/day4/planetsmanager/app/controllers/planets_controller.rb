  class PlanetsController < ApplicationController

    def index
      @planets = Planet.all
    end

    def new

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

  def edit
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
    @planet = Planet.find(params[:id])
    @planet.destroy
    flash[:notice] = "U have destroyed it"
    redirect_to '/planets'
  end

end
