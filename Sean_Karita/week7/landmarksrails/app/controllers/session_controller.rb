class SessionController < ApplicationController

  def new
  end

  def create
    user = User.find(email: params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to to landmarks_path
    else
      render :new
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to planets_path
  end
end
