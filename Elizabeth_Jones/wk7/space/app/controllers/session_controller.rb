class SessionController < ApplicationController
  def new
    redirect_to '/planets'
  end

  def create
    # raise 'adfsdfa' #forces an error to crash so you can see a pry console #same as binding.pry
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to '/'
    else
      render :new
    end
  end

  def destroy
    session[:user_id] = nil
  end
end
