class CommentsController < ApplicationController

  def create

    comment = Comment.new
    comment.body = params[:body]
    comment.planet_id = params[:planet_id]
    comment.save

    redirect_to planet_path

  end

end
