class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
  end

  def new

  end

  def create
    user = User.new
    user.email = params[:email]
    user.name = params[:name]
    user.password = params[:password]
    if user.save
      redirect_to '/session/new'
    else
      render :new
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    user = User.find(params[:id])
    user.email = params[:email]
    user.name = params[:name]
    user.password = params[:password]
    if user.save
      redirect_to "/users/#{session[:user_id]}"
    else
      render :edit
    end
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    redirect_to "/users/#{session[:user_id]}"
  end
end
