class PlanetsController < ApplicationController
  def index
    @planets = Planet.all
  end

  # the new method needs to be before the show method
  # need this for the new form page to show and populate form
  def new
    @planet = Planet.new    #new page object with empty attributes to base form off
  end

  #need this on form submission - posting to the create method
  def create
    #to quickly see what params is saving on click do
    # render text: params.to_json - should show new page with json object with params data
    @planet = Planet.new(post_params)
    if @planet.save
      redirect_to @planet
    else
      render :new
    end
  end

  def show
    @planet = Planet.find(params[:id])
    @comments = Comment.where(planet_id: @planet['id'])
  end

  #renders the edit planet form
  def edit
    @planet = Planet.find(params[:id])
  end

  #patches the edit form when submitted
  def update
    @planet = Planet.find(params[:id])
    @planet.update(post_params)
    redirect_to @planet
  end

  def destroy
    @planet = Planet.find(params[:id])
    @planet.destroy
    redirect_to planets_path
  end

  #strong paramaters library
  #used to protect app from unwanted paramaters
  #use the private keyword so no one else can you insert
  private

    def post_params
      params.require(:planet).permit(:title, :image_url)
    end

end
