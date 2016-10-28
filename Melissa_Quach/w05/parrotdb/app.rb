require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require_relative 'db_config'
require_relative 'models/post'

# display all submissions
# GET /
get '/' do
  # Fetch posts from DB
  @posts = Post.all

  erb :index
end

# display submission form
# GET /gifs/new
get '/posts/new' do
  erb :post_new
end

# create new post
post '/posts' do
  post = Post.new
  post.caption = params[:caption]
  post.image_url = params[:image_url]

  if post.save
    redirect to '/'
  else
    erb :post_new
  end
end

# display post
get '/posts/:id' do
  @post = Post.find(params[:id])
  erb :post_show
end

# display edit form
get '/posts/:id/edit' do
  @post = Post.find(params[:id])
  erb :post_edit
end

# save changes to post
put '/posts/:id' do
  post = Post.find(params[:id])
  post.image_url = params[:image_url]
  post.caption = params[:caption]

  if post.save
    redirect to "/posts/#{params[:id]}"
  else
    erb :post_edit
  end
end

# delete post
delete '/posts/:id' do
  post = Post.find(params[:id])
  post.destroy
  redirect to '/'
end
