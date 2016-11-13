class StarsController < ApplicationController

  def index
    @stars = Star.all
  end

  def show
    @star = Star.find(params[:id])
  end

  def new

  end

  def create
    star = Star.new
    star.name = params[:name]
    star.description = params[:description]
    star.user_id = session[:user_id]

    if star.save
      redirect_to "/users/#{session[:user_id]}"
    else
      render :new
    end
  end

  def edit
    @star = Star.find(params[:id])
  end

  def update
    star = Star.find(params[:id])
    star.name = params[:name]
    star.description = params[:description]
    star.user_id = session[:user_id]

    if star.save
      redirect_to "/users/#{session[:user_id]}"
    else
      render :edit
    end
  end

  def destroy
    star = Star.find(params[:id])
    star.destroy
    redirect_to "/users/#{session[:user_id]}"
  end

end
