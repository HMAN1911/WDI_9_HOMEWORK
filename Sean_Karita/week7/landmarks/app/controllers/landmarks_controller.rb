class LandmarksController < ApplicationController

  def index
    @landmarks = Landmark.all
  end

  def create
    landmark = Landmark.new
    landmark.name = params[:name]
    landmark.photo_url = params[:photo_url]
    landmark.country = params[:country]
    landmark.city = params[:city]
    landmark.user_id = session[:user_id]

    if landmark.save
      redirect_to '/landmarks'
    else
      render :new
    end
  end

  def show
    @landmark = Landmark.find(params[:id])
  end

  def edit
    @landmark = Landmark.find(params[:id])
  end

  def update
    landmark = Landmark.find(params[:id])
    landmark.name = params[:name]
    landmark.photo_url = params[:photo_url]
    landmark.country = params[:country]
    landmark.city = params[:city]

    if landmark.save
      redirect_to "/landmarks/#{landmark.id}"
    else
      render :new
    end
  end

  def destroy
    landmark.find(params[:id]).destroy
    redirect_to "/landmarks"
  end

end
