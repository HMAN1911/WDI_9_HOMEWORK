class SessionController < ApplicationController

  def new
  end

  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:passoword])
      session[:user_id] = user.id
      redirect_to '/'
    else
      render :new
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to 'session/new'
  end

end
