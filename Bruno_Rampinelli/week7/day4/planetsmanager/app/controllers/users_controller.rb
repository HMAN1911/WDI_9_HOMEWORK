class UsersController < ApplicationController


  def new

  end


  def create

    user = User.new
    user.username = params[:name]
    user.email = params[:email]
    user.password = params[:password]
    if user.save
      redirect_to '/session/new'
    else
      render :new
    end

  end
end
