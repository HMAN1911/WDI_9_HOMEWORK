class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by(email: params[:session][:email])
    if user && user.authenticate(params[:session][:password])
      session[:user_id] = user.id
      redirect_to '/planets'
    else
      render :new
    end
  end

  def destroy
    # binding.pry
    session[:user_id] = nil
    redirect_to '/sessions/new'
  end

end


# https://www.railstutorial.org/book/basic_login
