class CommentsController < ApplicationController
  def index
    @planet = Planet.find_by(id: params[:id])
    @comments = Comment.all
  end

  def add
    if !current_user
        redirect_to '/session'
    else
      @planet = Planet.find_by(id: params[:id])
      comment = Comment.new
      comment.body = params[:body]
      comment.planet_id = params[:id]
      comment.user_id = 2
      comment.save
      redirect_to '/planets'
    end
  end

end
