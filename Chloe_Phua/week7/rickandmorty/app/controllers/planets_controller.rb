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
    @planet.description = params[:description]
    @planet.species = params[:species]
    @planet.user_id = session[:user_id]

    if @planet.save
      redirect_to '/planets'
    else
      render :new
    end

  end

  def show
    @planet = Planet.find(params[:id])
  end

  def edit
    @planet = Planet.find(params[:id])
  end

  def update
    @planet = Planet.find(params[:id])
    @planet.update(title: params[:title], image_url: params[:image_url])
    if @planet.save
      redirect_to "/planets/#{params[:id]}"
    else
      render :edit
    end
  end

  def destroy
    @planet = Planet.find(params[:id])
    @planet.destroy
    redirect_to '/planets'
  end


end
