class LikesController < ApplicationController

  def create
    like = Like.new
    like.planet_id = params[:planet_id]
    like.user_id = session[:user_id]
    like.save
    render json: {
      like_count: Planet.find(like.planet_id).likes.count
    }
  end

end
