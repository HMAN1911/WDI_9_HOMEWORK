class PlanetsController < ApplicationController

  def index
    @planets = Planet.all.reverse_order
  end

  def new

  end

  def create

    planet = Planet.new
    planet.title = params[:title]
    planet.image_url = params[:image_url]
    planet.description = params[:description]
    planet.user_id = session[:user_id]

    if planet.save
      redirect_to planets_path
    else
      render :new #just showing template
    end
  end

  def edit
    @planet = Planet.find_by(id: params[:id])
  end

  def show
    @planet = Planet.find_by(id: params[:id])
    @comments = Comment.where( planet_id: @planet.id )

  end

  def update
    planet = Planet.find_by(id: params[:id])

    planet.update(title: params[:title], image_url: params[:image_url], description: params[:description])

    redirect_to planets_path
  end

  def destroy
    planet = Planet.find_by(id: params[:id])
    planet.destroy

    redirect_to planets_path
  end

end
