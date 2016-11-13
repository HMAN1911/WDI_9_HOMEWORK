class Api::CommentsController < ApplicationController

  def index
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
      render json: comment.to_json
    end
  end

end
