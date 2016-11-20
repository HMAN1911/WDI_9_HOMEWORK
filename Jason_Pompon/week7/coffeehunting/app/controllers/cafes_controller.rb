class CafesController < ApplicationController

  def index
    @cafes = Cafe.all
  end

  def new
  end

  def create
    cafe = Cafe.new
    cafe.name = params[:name]
    cafe.image_url = params[:image_url]

    if cafe.save
      redirect_to '/cafes'
    else
      render :new
    end
  end

end
