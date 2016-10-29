require 'sinatra'
require 'sinatra/reloader'
require_relative 'db_config'
require_relative 'models/video'

# Show all videos
get '/' do
  @videos = Video.all
  erb :index
end

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

# Show a single video
get '/videos/:id' do
  @video = Video.find_by(id: params[:id])
  if !@video
    @error = 'Video not found'
    erb :error
  else
    erb :video_details
  end
end

# Show edit form
get '/videos/:id/edit' do
  @video = Video.find_by(id: params[:id])

  if !@video
    @error = 'Video not found'
    erb :error
  else
    erb :video_edit
  end
end

# Update video details
put '/videos/:id' do
  @video = Video.find_by(id: params[:id])

  if !@video
    @error = 'Video not found'
    erb :error
  else
    @video.title = params[:title]
    @video.url = params[:url]
    @video.description = params[:description]
    @video.genre = params[:genre]

    if @video.save
      redirect to "/videos/#{@video.id}"
    else
      erb :video_edit
    end
  end
end

# Delete video
