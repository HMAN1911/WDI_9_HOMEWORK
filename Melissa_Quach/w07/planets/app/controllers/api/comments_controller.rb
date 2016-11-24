class Api::CommentsController < ApplicationController
  def create
    comment = Comment.new
    comment.content = params[:content]
    comment.planet_id = params[:planet_id]

    if comment.save
      render json: {
        success: true,
        comment: comment.to_json
      }
    else
      render json: {
        success: false
      }
    end
  end
end
