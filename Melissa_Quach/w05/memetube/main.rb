require 'sinatra'
require 'sinatra/reloader'
require_relative 'db_config'
require_relative 'models/video'

# Show all videos
get '/' do
  @videos = Video.all
  erb :index
end

# Show a single video

# Show add video form
get '/videos/new' do
  erb :video_new
end

# Add video to database
post '/videos' do
  video = Video.new
  video.title = params[:title]
  video.description = params[:description]
  video.url = params[:url]
  video.genre = params[:genre]

  video.save
  redirect to '/'
end

# Show edit form

# Update video details

# Delete video
