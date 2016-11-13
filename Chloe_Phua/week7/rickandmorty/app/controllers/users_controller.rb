class UsersController < ApplicationController

  def new
  end


  def create
    @user = User.new
    @user.email = params[:email]
    @user.password = params[:password]

    if @user.save
      redirect_to '/login'
    else
      render :new
    end

  end

end
