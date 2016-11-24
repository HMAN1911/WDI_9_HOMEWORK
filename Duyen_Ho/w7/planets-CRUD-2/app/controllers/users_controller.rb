class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new
    @user.username = params[:username]
    @user.password = params[:password]
    if @user.save
      session[:user_id] = @user.id
      redirect_to '/planets'
    else
      render :new
    end
  end

end
