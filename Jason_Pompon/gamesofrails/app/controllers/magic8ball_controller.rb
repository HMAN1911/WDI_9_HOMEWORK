class Magic8ballController < ApplicationController

  def create
    @question = params[:name]
    redirect_to '/magic8ball'
  end

  def index
    @answers = ['blah', 'bye', 'no']
  end

end
