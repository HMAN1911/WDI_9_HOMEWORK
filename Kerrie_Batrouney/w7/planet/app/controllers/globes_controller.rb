class GlobesController < ApplicationController

  def index
    @globes = Globe.all

  end

  def new
    # new.html.erb
    # render :new
    # erb :new
  end

  def create
    globe = Globe.new
    globe.name = params[:name]
    globe.image_url = params[:image_url]
    globe.distance = params[:distance]
    globe.save

    if globe.save
      redirect_to '/globes'
    else
      render :new # just showing the template
    end
  end

  def edit
    @globe = Globe.find(params[:id])
  end

  def update
    @globe = Globe.find(params[:id])
    @globe.name = params[:name]
    @globe.image_url = params[:image_url]
    @globe.distance = params[:distance]
    if @globe.save
      redirect_to '/globes'
    else
      render :edit
    end
  end

end
