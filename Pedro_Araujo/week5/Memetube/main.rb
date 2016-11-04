
require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require_relative 'db_config'
require_relative 'models/video'
require_relative 'models/comment'
require_relative 'models/video_genre'
require_relative 'models/user'

enable :sessions

helpers do
  #1 def logged_in?
  #1   session[:user_id]
  #2   current_user
  #1 end
  #1 def current_user
  #1   User.find_by(id: session[:user_id])
  #1 end
  def logged_in?
    !!current_user   # returns true if there is a current user, or false if ther's not
  end
  def current_user
    User.find_by(id: session[:user_id])
  end
end

get '/' do
  @videos = Video.all
  erb :index
end

get '/session/new' do
  erb :session_new
end

get '/videos/new' do
  redirect to 'session/new' unless logged_in?
  @video_genres = VideoGenre.all

  erb :videos_new
end
#--------------------/Videos--------------------
post '/videos' do
  # Video.create(title: params[:title], url: params[:url] )

  new_video = Video.new
  new_video.title = params[:title]
  new_video.url = params[:url]
  new_video.id = params[:video_genre_id]
  if new_video.save
    redirect to '/'
  else
    @video_genre = VideoGenre.all
    erb :videos_new
  end
end
#-------------------------------------------------------------------------
get '/videos/:id' do
  @video = Video.find(params[:id])
  @comments = Comment.where(video_id: @video.id)

  erb :videos_show
end

#show the 'edit video' form
get '/videos/:id/edit' do
  @video = Video.find(params[:id])
  @video_genre = VideoGenre.all
  erb :videos_edit
end

#updating an existing video
post '/videos/:id' do
  video_updated = Video.find(params[:id])
  video_updated.title = params[:title]
  video_updated.url = params[:url]
  video_updated.save
  redirect to "videos/#{params[:id]}"
end

post '/videos/:id/delete' do
  video_removed = Video.find(params[:id])
  video_removed.destroy
  redirect to "/"
end

post '/comments' do
  comment = Comment.new
  comment.video_id = params[:video_id]
  comment.body = params[:body]
  comment.save
  redirect to "/videos/#{comment.video_id}"
end

post '/session' do
  user = User.find_by(email: params[:email])
  # using only 'if user' it returns true, the same as 'if user == true'
  if user && user.authenticate(params[:password])
    #you are fine
    session[:user_id] = user.id
    redirect to '/'
  else
    #who are you
    erb :session_new
  end
end

delete '/session' do
  #clearing the session
  session[:user_id] = nil
  redirect to '/session/new'
end
