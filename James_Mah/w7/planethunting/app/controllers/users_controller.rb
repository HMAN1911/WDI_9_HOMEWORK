class UsersController < ApplicationController

  def new
  end

  def create
    user = User.new
    user.email = params[:email]
    user.password_digest = BCrypt::Password.create(params[:password])

    if user.save
      session[:user_id] = user.id
      redirect_to planets_path
    else
      render :new
    end
  end

end
