class PlanetsController < ActionController::Base

  def index
    @planets = Planet.all

  end

  def new

  end

  def create

    planet = Planet.new
    planet.title = params[:title]
    planet.image_url = params[:image_url]
    planet.description = params[:description]

    if planet.save
      redirect_to '/planets'
    else
      render :new #just showing template
    end
  end

  def edit

  end

  def show
    @planet = Planet.find_by(id: params[:id])

  end

  def update
    planet = Planet.find_by(id: params[:id])

    planet.update(title: params[:title], image_url: params[:image_url], description: params[:description])

    redirect_to '/planets'
  end

  def destroy
    planet = Planet.find_by(id: params[:id])
    planet.destroy

    redirect_to '/planets'
  end

end
