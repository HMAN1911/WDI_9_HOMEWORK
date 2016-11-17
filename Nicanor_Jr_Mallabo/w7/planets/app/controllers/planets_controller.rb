class PlanetsController < ApplicationController
    def show 
        @planet = Planet.find(params[:id])
        render 'show'
    end
    
    def index
        @planets = Planet.all()
        # binding.pry
    end

    def new
        @planet = Planet.new()

    end 

    def create
        # binding.pry
        @planet = Planet.new(planet_params)
        if @planet.save
            flash[:success] = "Successfully save planet"
            # redirect_to planet_url(@planet)
            redirect_to planets_path
        else
            render 'new'
        end
    end

    def edit 
        @planet = Planet.find(params[:id])
    end

    def update
        @planet = Planet.find(params[:id])
        if @planet.update_attributes(planet_params)
            redirect_to planet_path
        else
            render 'edit'
        end
    end

    def destroy
        Planet.find(params[:id]).destroy
        redirect_to planets_path
    end

    private

        def planet_params
            params.require(:planet).permit(:name, :image_url, :description, :location)
        end
end
