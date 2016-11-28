class CommentsController < ApplicationController
  def create
    @comment = Comment.new
    # binding.pry
    @comment.planet_id = params[:mango] #need to pass in dish_id when pass in the form
    @comment.user_id = session[:user_id] #pass in user id from the session
    @comment.body = params[:apricot]
    @comment.save
    # redirect_to '/planets'
    #changing from html to json

    # dish = Dish.find(like.dish_id)
    # like_number = dish.likes.count


    render json: { comment_object: @comment.body }

    #this is the response object
    # render json: {
    #   # like_count: Dish.find(like.dish_id).likes.count,
    #   strawberry: 'yes'
    # } #when make the request the server responds with this
    # redirect_to '/dishes' #dont want this anymore bc trying no to refresh the page - redirect is not useful
  end

end
