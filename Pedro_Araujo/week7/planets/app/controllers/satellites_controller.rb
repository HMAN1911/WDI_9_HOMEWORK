class SatellitesController < ApplicationController

  def index
    @satellites = Satellite.all
  end

  def show
    @satellite = Satellite.find(params[:id])
  end

  def new
    @planets = Planet.all
  end

  def create
    satellite = Satellite.new
    satellite.name = params[:name]
    satellite.img_url = params[:img_url]
    satellite.planet_id = params[:planet]
    satellite.description = params[:description]
    satellite.user_id = session[:user_id]
    if satellite.save
      redirect_to "/users/#{session[:user_id]}"
    else
      render :new
    end
  end

  def edit
    @satellite = Satellite.find(params[:id])
    @planets = Planet.all
  end

  def update
    satellite = Satellite.find(params[:id])
    satellite.name = params[:name]
    satellite.img_url = params[:img_url]
    satellite.planet_id = params[:planet]
    satellite.description = params[:description]
    satellite.user_id = session[:user_id]
    if satellite.save
      redirect_to "/users/#{session[:user_id]}"
    else
      render :edit
    end
  end

  def destroy
    satellite = Satellite.find(params[:id])
    satellite.destroy
    redirect_to "/users/#{session[:user_id]}"
  end

end
