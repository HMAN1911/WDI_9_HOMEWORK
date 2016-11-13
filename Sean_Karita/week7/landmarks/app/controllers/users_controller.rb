class UsersController < ApplicationController

  def new
  end

  def create
    user = User.new
    user.email = parms[:email]
    user.password_digest = Bcrypt::Password.create(params[:password])

    if user.save
      session[:user_id] = user.id
      redirect_to landmarks_path
    else
      render :new
    end
  end
end
