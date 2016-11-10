class PlanetsController < ApplicationController
  def index
    @planets = Planet.all.order('id')
  end

  def new
  end

  def create
    planet = Planet.new
    planet.name = params[:name]
    planet.color = params[:color]
    planet.user_id = session[:user_id]

    if planet.save
      redirect_to "/planets/#{planet.id}"
    else
      render :new
    end
  end

  def show
    @planet = Planet.find_by(id: params[:id])

    if @planet
      render :show
    else
      @error = 'Planet not found'
      render :error
    end
  end

  def edit
    @planet = Planet.find_by(id: params[:id])

    if @planet
      render :edit
    else
      @error = 'Planet not found'
      render :error
    end
  end

  def update
    @planet = Planet.find_by(id: params[:id])

    if @planet
      @planet.name = params[:name]
      @planet.color = params[:color]

      if @planet.save
        redirect_to "/planets/#{@planet.id}"
      else
        render :edit
      end
    else
      @error = 'Planet not found'
      render :error
    end
  end

  def destroy
  end
end
