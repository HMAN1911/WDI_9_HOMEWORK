class PlanetsController < ApplicationController

  def index
    @planets = Planet.all
  end

  def show
    @planet = Planet.find(params[:id])
  end

  def new
    @stars = Star.all
  end

  def create
    planet = Planet.new
    planet.name = params[:name]
    planet.img_url = params[:img_url]
    planet.star_id = params[:star]
    planet.description = params[:description]
    planet.user_id = session[:user_id]
    if planet.save
      redirect_to "/users/#{session[:user_id]}"
    else
      render :new
    end
  end

  def edit
    @planet = Planet.find(params[:id])
    @stars = Star.all
  end

  def update
    planet = Planet.find(params[:id])
    planet.name = params[:name]
    planet.img_url = params[:img_url]
    planet.star_id = params[:star]
    planet.description = params[:description]
    planet.user_id = session[:user_id]
    if planet.save
      redirect_to "/users/#{session[:user_id]}"
    else
      render :edit
    end
  end

  def destroy
    planet = Planet.find(params[:id])
    planet.destroy
    redirect_to "/users/#{session[:user_id]}"
  end


end
